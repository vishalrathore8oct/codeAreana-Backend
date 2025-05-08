import nodemailer from "nodemailer";
import Mailgen from "mailgen";

export const sendEmail = async (options) => {
  try {
    const mailGenerator = new Mailgen({
      theme: "default",
      product: {
        name: "YourCodeArena",
        link: "https://mailgen.js/",
      },
    });

    const textualEmail = mailGenerator.generatePlaintext(
      options.mailgenContent,
    );

    const htmlEmail = mailGenerator.generate(options.mailgenContent);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports
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
    throw new Error("Email send failed");
  }
};

export const emailVerificationMailgenContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to our app! We're very excited to have you on board.",
      action: {
        instructions:
          "To verify your email please click on the following button:",
        button: {
          color: "#22BC66", // Optional action button color
          text: "Verify your email",
          link: verificationUrl,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
};

export const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "We got a request to reset the password of our account",
      action: {
        instructions:
          "To reset your password click on the following button or link:",
        button: {
          color: "#22BC66", // Optional action button color
          text: "Reset password",
          link: passwordResetUrl,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
};
