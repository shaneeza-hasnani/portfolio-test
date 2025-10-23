import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { transferData } = await req.json();
    console.log('Analyzing wire transfer:', transferData);

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const prompt = `Analyze this wire transfer for potential anomalies and fraud indicators:

Transfer Details:
- Sender: ${transferData.senderName} (${transferData.senderAccount})
- Receiver: ${transferData.receiverName} (${transferData.receiverAccount})
- Amount: ${transferData.amount} ${transferData.currency}
- Origin Country: ${transferData.originCountry}
- Destination Country: ${transferData.destinationCountry}
- Transfer Date: ${transferData.transferDate}
- Purpose: ${transferData.purpose}
- Bank/Institution: ${transferData.bank}

Provide a structured analysis with:
1. Risk Level (Low Risk, Medium Risk, High Risk, or Critical Risk)
2. Anomaly Score (0-100%)
3. Confidence Level (0-100%)
4. Key Anomaly Indicators (list specific concerns)
5. Recommendation (what action to take)

Consider factors like:
- Unusual transfer amounts
- High-risk country combinations
- Suspicious timing patterns
- Vague or inconsistent transfer purposes
- New or unverified accounts
- Patterns typical of money laundering or fraud`;

    const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: 'You are an expert financial fraud detection system specializing in wire transfer anomaly detection. Provide accurate, structured analysis of wire transfers for potential fraud or money laundering indicators.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
      }),
    });

    if (!aiResponse.ok) {
      const errorText = await aiResponse.text();
      console.error('AI API error:', aiResponse.status, errorText);
      throw new Error(`AI API error: ${aiResponse.status}`);
    }

    const aiData = await aiResponse.json();
    const analysisText = aiData.choices[0].message.content;

    console.log('AI Analysis:', analysisText);

    // Parse the analysis to extract structured data
    const riskLevelMatch = analysisText.match(/Risk Level:?\s*(Low Risk|Medium Risk|High Risk|Critical Risk)/i);
    const anomalyScoreMatch = analysisText.match(/Anomaly Score:?\s*(\d+(?:\.\d+)?)/i);
    const confidenceMatch = analysisText.match(/Confidence Level:?\s*(\d+(?:\.\d+)?)/i);

    const analysis = {
      risk_level: riskLevelMatch ? riskLevelMatch[1] : "Medium Risk",
      anomaly_score: anomalyScoreMatch ? parseFloat(anomalyScoreMatch[1]) : 50.0,
      confidence: confidenceMatch ? parseFloat(confidenceMatch[1]) : 75.0,
      anomaly_indicators: extractListItems(analysisText, 'Anomaly Indicators', 'Key Anomaly Indicators'),
      recommendation: extractRecommendation(analysisText),
    };

    return new Response(JSON.stringify({ analysis }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in analyze-wire-transfer function:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error occurred',
        details: 'Failed to analyze wire transfer'
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});

function extractListItems(text: string, ...headers: string[]): string[] {
  for (const header of headers) {
    const regex = new RegExp(`${header}:?([\\s\\S]*?)(?=\\d+\\.|Recommendation|$)`, 'i');
    const match = text.match(regex);
    if (match) {
      const listText = match[1];
      const items = listText
        .split(/[\n\r]+/)
        .map(line => line.trim())
        .filter(line => line.match(/^[-*•]\s*(.+)/) || line.match(/^\d+\.\s*(.+)/))
        .map(line => line.replace(/^[-*•]\s*/, '').replace(/^\d+\.\s*/, '').trim())
        .filter(item => item.length > 0);
      
      if (items.length > 0) return items;
    }
  }
  return ['No specific indicators identified'];
}

function extractRecommendation(text: string): string {
  const match = text.match(/Recommendation:?\s*([^\n]+(?:\n(?!\d+\.)[^\n]+)*)/i);
  return match ? match[1].trim() : 'Review transfer and verify details with sender';
}
