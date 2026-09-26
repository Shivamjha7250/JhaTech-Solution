import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const service = String(body.service || "").trim();
    const message = String(body.message || "").trim();

    /* =====================================================
       VALIDATION
    ===================================================== */

    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 }
      );
    }

    /* =====================================================
       ENVIRONMENT VARIABLES
    ===================================================== */

    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_APP_PASSWORD;

    if (!emailUser || !emailPassword) {
      console.error("EMAIL ENVIRONMENT VARIABLES ARE MISSING");

      return NextResponse.json(
        {
          success: false,
          message:
            "Email configuration is missing. Please check .env.local.",
        },
        { status: 500 }
      );
    }

    /* =====================================================
       GMAIL SMTP
    ===================================================== */

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    /* =====================================================
       VERIFY SMTP CONNECTION
    ===================================================== */

    await transporter.verify();

    /* =====================================================
       SEND EMAIL TO JHATECH SOLUTION
    ===================================================== */

    await transporter.sendMail({
      from: `"JhaTech Solution Website" <${emailUser}>`,
      to: emailUser,
      replyTo: email,

      subject: `New Website Enquiry - ${name}`,

      text: `
New Project Enquiry

Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}

Project Details:
${message}
      `,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 30px; color: #0f172a;">

          <div style="background: linear-gradient(135deg, #7c3aed, #2563eb); padding: 25px; border-radius: 14px; color: white;">
            <h1 style="margin: 0; font-size: 24px;">
              New Project Enquiry
            </h1>

            <p style="margin: 8px 0 0; opacity: 0.9;">
              JhaTech Solution Website
            </p>
          </div>

          <div style="margin-top: 25px; border: 1px solid #e2e8f0; border-radius: 14px; padding: 25px;">

            <h2 style="font-size: 18px; margin-top: 0;">
              Client Information
            </h2>

            <p>
              <strong>Name:</strong>
              ${escapeHtml(name)}
            </p>

            <p>
              <strong>Email:</strong>
              ${escapeHtml(email)}
            </p>

            <p>
              <strong>Phone / WhatsApp:</strong>
              ${escapeHtml(phone)}
            </p>

            <p>
              <strong>Service:</strong>
              ${escapeHtml(service)}
            </p>

            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 25px 0;" />

            <h2 style="font-size: 18px;">
              Project Details
            </h2>

            <div style="background: #f8fafc; padding: 18px; border-radius: 10px; line-height: 1.7;">
              ${escapeHtml(message).replace(/\n/g, "<br />")}
            </div>

          </div>

          <p style="margin-top: 20px; color: #64748b; font-size: 13px;">
            This enquiry was submitted through the JhaTech Solution website contact form.
          </p>

        </div>
      `,
    });

    /* =====================================================
       SEND CONFIRMATION EMAIL TO CLIENT
    ===================================================== */

    await transporter.sendMail({
      from: `"JhaTech Solution" <${emailUser}>`,
      to: email,

      subject: "Thank you for contacting JhaTech Solution",

      text: `
Thank you for contacting JhaTech Solution.

Our team will review your enquiry and contact you within 24 hours.

Regards,
JhaTech Solution
      `,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 30px; color: #0f172a;">

          <div style="background: linear-gradient(135deg, #7c3aed, #2563eb); padding: 28px; border-radius: 14px; color: white;">
            <h1 style="margin: 0;">
              Thank You
            </h1>

            <p style="margin: 8px 0 0;">
              JhaTech Solution
            </p>
          </div>

          <div style="padding: 25px 5px;">

            <p style="font-size: 16px;">
              Hello ${escapeHtml(name)},
            </p>

            <p style="font-size: 16px; line-height: 1.7;">
              Thank you for contacting JhaTech Solution.
            </p>

            <p style="font-size: 16px; line-height: 1.7;">
              Our team will review your enquiry and contact you within 24 hours.
            </p>

            <div style="margin-top: 25px; padding: 18px; background: #f8fafc; border-radius: 10px;">
              <strong>Service:</strong>
              ${escapeHtml(service)}
            </div>

            <p style="margin-top: 30px; font-size: 14px; color: #64748b;">
              Regards,<br />
              <strong>JhaTech Solution</strong><br />
              info.jhatechsolution@gmail.com
            </p>

          </div>

        </div>
      `,
    });

    /* =====================================================
       SUCCESS
    ===================================================== */

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully.",
    });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    let errorMessage = "Unable to send enquiry. Please try again.";

    if (error instanceof Error) {
      console.error("ERROR MESSAGE:", error.message);

      if (error.message.includes("Invalid login")) {
        errorMessage =
          "Gmail authentication failed. Please check your Gmail App Password.";
      }

      if (error.message.includes("Username and Password not accepted")) {
        errorMessage =
          "Gmail login failed. Please check EMAIL_USER and EMAIL_APP_PASSWORD.";
      }
    }

    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
      },
      { status: 500 }
    );
  }
}