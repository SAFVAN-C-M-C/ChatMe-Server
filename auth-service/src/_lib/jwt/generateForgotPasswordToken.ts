import jwt from "jsonwebtoken";

export const generateForgotPasswordToken = (payload: {
  email: string;
  reset?: boolean;
  otp: boolean;
  details?: boolean;
}) => {
  const secret = process.env.ACCESS_TOKEN_SECRET;
  if (!secret) {
    throw new Error("token secret is not defined!");
  }
  try {
    return jwt.sign(payload, secret, { expiresIn: "15m" });
  } catch (error) {
    throw new Error("Failed to generate refresh token.");
  }
};
