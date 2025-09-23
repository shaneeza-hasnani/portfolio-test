import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { 
        status: 405, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }

  try {
    const formData: ContactFormData = await req.json();
    const { name, email, company, subject, message } = formData;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    console.log(`Sending contact email from ${name} (${email})`);

    // Send email to Shaneeza's inbox
    const emailResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["hasnani.shaneeza@gmail.com"],
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #CD8B76; border-bottom: 2px solid #CD8B76; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #CD8B76;">${email}</a></p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: white; padding: 20px; border-left: 4px solid #CD8B76; margin: 20px 0;">
            <h3 style="color: #4D5061; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #4D5061;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #e8f5e8; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px; color: #666;">
              <strong>Quick Reply:</strong> Simply reply to this email to respond directly to ${name}.
            </p>
          </div>
          
          <footer style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #888;">
            <p>This email was sent from your portfolio contact form.</p>
            <p>Sent on ${new Date().toLocaleString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric', 
              hour: '2-digit', 
              minute: '2-digit',
              timeZoneName: 'short'
            })}</p>
          </footer>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    // Send confirmation email to the sender
    await resend.emails.send({
      from: "Shaneeza Hasnani <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for reaching out!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #95B8D1, #C4F4C7); padding: 30px; border-radius: 8px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; text-align: center;">Thank You, ${name}!</h1>
          </div>
          
          <div style="padding: 20px;">
            <p style="font-size: 16px; line-height: 1.6; color: #4D5061;">
              Thank you for reaching out through my portfolio. I've received your message about "<strong>${subject}</strong>" 
              and I appreciate you taking the time to connect.
            </p>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #CD8B76;">
              <h3 style="color: #CD8B76; margin-top: 0;">What happens next?</h3>
              <ul style="color: #4D5061; line-height: 1.6;">
                <li>I'll review your message within 24 hours</li>
                <li>You'll hear back from me at this email address</li>
                <li>If your project needs urgent attention, feel free to connect with me on 
                    <a href="https://linkedin.com/in/shasnani" style="color: #CD8B76;">LinkedIn</a></li>
              </ul>
            </div>
            
            <p style="color: #4D5061; line-height: 1.6;">
              I'm excited to learn more about your data science and fraud detection challenges. 
              Whether you're looking to build new ML models, enhance fraud prevention systems, or need insights 
              from complex datasets, I'm here to help turn your data into actionable solutions.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://linkedin.com/in/shasnani" 
                 style="display: inline-block; background-color: #CD8B76; color: white; padding: 12px 24px; 
                        text-decoration: none; border-radius: 6px; font-weight: bold;">
                Connect on LinkedIn
              </a>
            </div>
            
            <div style="background-color: #e8f5e8; padding: 15px; border-radius: 6px; margin-top: 20px;">
              <p style="margin: 0; font-size: 14px; color: #666; text-align: center;">
                <strong>Response Time:</strong> I typically respond within 24 hours during business days.
              </p>
            </div>
          </div>
          
          <footer style="margin-top: 30px; padding: 20px; border-top: 1px solid #eee; text-align: center; color: #888; font-size: 12px;">
            <p>Best regards,<br><strong>Shaneeza Hasnani</strong><br>CFE & Data Science Professional</p>
            <p>🔗 <a href="https://linkedin.com/in/shasnani" style="color: #CD8B76;">LinkedIn</a> | 
               💻 <a href="https://github.com/shaneeza" style="color: #CD8B76;">GitHub</a></p>
          </footer>
        </div>
      `,
    });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Email sent successfully" 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );

  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    
    return new Response(
      JSON.stringify({ 
        error: "Failed to send email",
        details: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);