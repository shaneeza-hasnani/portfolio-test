import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { applicationData } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are an advanced ML-based fraud detection system using ensemble learning with Random Forest and Logistic Regression models.

System Capabilities:
- Classifies 200k+ high-risk applications monthly
- Achieves 25% enhanced fraud detection accuracy
- Analyzes 500+ payment datasets monthly using SQL and Python
- Reduces suspicious applications by 20% annually
- Automated scoring pipeline with 15% streamlined review time

You must respond with structured analysis for admissions, compliance, and IT teams:
1. risk_level: Risk classification (Low Risk, Medium Risk, High Risk, or Critical Risk)
2. confidence: Model confidence score (0-100)
3. fraud_probability: Ensemble model prediction probability (0-100)
4. risk_factors: Feature importance outputs from Random Forest and Logistic Regression
5. recommendation: Prescriptive action (Approve, Further Review, Reject, Investigate)

Model Features (Feature Importance Rankings):
- Email domain authenticity (Random Forest: HIGH importance)
- GPA-Program consistency score (Logistic Regression coefficient)
- Document completion ratio
- Geographic risk indicators (country-based scoring)
- Payment method risk classification
- Application timing patterns (seasonal anomaly detection)
- Previous institution verification status
- Cross-reference with payment datasets patterns

Provide data-driven, prescriptive recommendations aligned with compliance requirements.`;

    const userPrompt = `Analyze this student application using Random Forest and Logistic Regression ensemble scoring:

Application Data:
Student Name: ${applicationData.studentName}
Email: ${applicationData.email}
Program: ${applicationData.program}
Academic Level: ${applicationData.academicLevel}
Previous Institution: ${applicationData.previousInstitution}
GPA: ${applicationData.gpa}
Application Date: ${applicationData.applicationDate}
Country: ${applicationData.country}
Documents Submitted: ${applicationData.documentsSubmitted}
Payment Method: ${applicationData.paymentMethod}

Apply automated scoring pipeline methodology and cross-reference with 500+ payment dataset patterns.
Provide prescriptive, data-driven risk assessment with specific feature importance explanations.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        tools: [{
          type: "function",
          function: {
            name: "risk_analysis",
            description: "Provide a structured student application risk analysis",
            parameters: {
              type: "object",
              properties: {
                risk_level: {
                  type: "string",
                  enum: ["Low Risk", "Medium Risk", "High Risk", "Critical Risk"],
                  description: "Overall risk level"
                },
                confidence: {
                  type: "number",
                  description: "Confidence score from 0-100"
                },
                fraud_probability: {
                  type: "number",
                  description: "Exact probability of fraudulent application as percentage (0-100)"
                },
                risk_factors: {
                  type: "array",
                  items: { type: "string" },
                  description: "Key risk factors identified"
                },
                recommendation: {
                  type: "string",
                  enum: ["Approve", "Further Review", "Reject", "Investigate"],
                  description: "Recommended action"
                }
              },
              required: ["risk_level", "confidence", "fraud_probability", "risk_factors", "recommendation"],
              additionalProperties: false
            }
          }
        }],
        tool_choice: { type: "function", function: { name: "risk_analysis" } }
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Payment required. Please add credits to your workspace." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error("AI gateway error");
    }

    const result = await response.json();
    const toolCall = result.choices?.[0]?.message?.tool_calls?.[0];
    
    if (!toolCall) {
      throw new Error("No analysis result received");
    }

    const analysis = JSON.parse(toolCall.function.arguments);

    return new Response(
      JSON.stringify({ analysis }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in analyze-student-risk:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
