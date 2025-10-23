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
    const { transactionData } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are an expert fraud detection AI system trained on credit card transaction patterns. 
Analyze transactions using Random Forest and Decision Tree classifier principles with 99.96% accuracy.

You must respond with a structured analysis that includes:
1. fraud_risk: A risk level (Low, Medium, High, or Critical)
2. confidence: A percentage confidence score (0-100)
3. fraud_probability: The exact probability of fraud as a percentage
4. reasoning: Key factors that influenced your decision
5. recommendation: What action should be taken

Consider these factors:
- Transaction amount (unusually high or low amounts are suspicious)
- Time of transaction (late night transactions are higher risk)
- Merchant category (some categories have higher fraud rates)
- Location discrepancies
- Transaction patterns and velocity
- Historical user behavior

Be precise and professional in your analysis.`;

    const userPrompt = `Analyze this credit card transaction for fraud:

Amount: $${transactionData.amount}
Merchant: ${transactionData.merchant}
Category: ${transactionData.category}
Time: ${transactionData.time}
Location: ${transactionData.location}
Card Last 4 Digits: ${transactionData.cardLast4}

Provide a detailed fraud risk assessment.`;

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
            name: "fraud_analysis",
            description: "Provide a structured fraud risk analysis",
            parameters: {
              type: "object",
              properties: {
                fraud_risk: {
                  type: "string",
                  enum: ["Low", "Medium", "High", "Critical"],
                  description: "Overall fraud risk level"
                },
                confidence: {
                  type: "number",
                  description: "Confidence score from 0-100"
                },
                fraud_probability: {
                  type: "number",
                  description: "Exact probability of fraud as percentage (0-100)"
                },
                reasoning: {
                  type: "array",
                  items: { type: "string" },
                  description: "Key factors influencing the decision"
                },
                recommendation: {
                  type: "string",
                  description: "Recommended action (Approve, Review, Block)"
                }
              },
              required: ["fraud_risk", "confidence", "fraud_probability", "reasoning", "recommendation"],
              additionalProperties: false
            }
          }
        }],
        tool_choice: { type: "function", function: { name: "fraud_analysis" } }
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
    console.error("Error in analyze-fraud:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
