
import { updateOTP } from "../database/mongodb/repositories/updateOTP";

export const updateOTPService = async (email: string, otp: string) => {
  try {
    await updateOTP({
      email,
      otp,
    });
  } catch (error) {
    console.log(error);
  }
};
