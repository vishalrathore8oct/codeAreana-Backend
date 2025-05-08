import nodemailer from "nodemailer";
import Mailgen from "mailgen";
import { ApiError } from "../utils/ApiError.js";

export const sendEmail = async (options) => {
  try {
    const mailGenerator = new Mailgen({
      theme: "default",
      product: {
        name: "YourCodeArena",
        link: "https://yourcodearena.com",
      },
    });

    const textualEmail = mailGenerator.generatePlaintext(
      options.mailgenContent,
    );

    const htmlEmail = mailGenerator.generate(options.mailgenContent);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: +process.env.SMTP_PORT === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: options.toEmail,
      subject: options.subject,
      text: textualEmail,
      html: htmlEmail,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("✅ Email sent successfully: ", info.messageId);
  } catch (error) {
    console.error("❌ Email send failed:", error.message);
    throw new ApiError(500, "Email send failed", error);
  }
};

export const emailVerificationMailgenContent = (username, verificationUrl) => ({
  body: {
    name: username,
    intro: "Welcome to YourCodeArena! We're thrilled to have you.",
    action: {
      instructions:
        "Please click the button below to verify your email address:",
      button: {
        color: "#22BC66",
        text: "Verify Email",
        link: verificationUrl,
      },
    },
    outro: "Need help? Just reply to this email, we're here to help.",
  },
});

export const forgotPasswordMailgenContent = (username, passwordResetUrl) => ({
  body: {
    name: username,
    intro: "We received a request to reset your password.",
    action: {
      instructions: "Click the button below to reset it:",
      button: {
        color: "#FF8C00",
        text: "Reset Password",
        link: passwordResetUrl,
      },
    },
    outro: "If you didn't request this, just ignore this email.",
  },
});
