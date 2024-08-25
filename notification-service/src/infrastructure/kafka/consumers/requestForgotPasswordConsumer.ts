import { sendChangePasswordMail } from "@/infrastructure/services";


export default async (data: { email: string; token: string }) => {
  try {
    await sendChangePasswordMail(data.email, data.token);

  } catch (error: any) {
    console.error(
      "request-password-changed-consumed mail send error: ",
      error?.message
    );
  }
};
