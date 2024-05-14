// import { generateOTP } from "@/_lib/util/generateOTP";
// import { Otp } from "../models/OtpSchema";
// import { IOtp } from "@/domain/entities";

// export const createOTP = async (
//   email: string,
// ) => {
//   try {
//     const existingOTP = await Otp.findOne({ email });

//     if (existingOTP) {
//       await Otp.deleteOne({ email });
//     }

//     const otp = generateOTP();
//     const newOTP = new Otp({ email, otp });

//     await newOTP.save();
//     return newOTP;
//   } catch (error: any) {
//     throw new Error(error?.message);
//   }
// };
