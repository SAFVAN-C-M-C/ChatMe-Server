import nodemailer from "nodemailer";
import {config} from "dotenv"
config()
export const generateVerificationMail = async (
  email: string,
  title: string,
  body: string
): Promise<void> => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    let info = await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: email,
      subject: title,
      html: body,
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Response: %s", info.response);
  } catch (error: any) {
    console.error("Failed to send email:", error.message);
    throw error;
  }
};
