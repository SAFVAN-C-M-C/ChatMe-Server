import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { config } from "dotenv";
config();

const s3Client = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: String(process.env.S3_ACCESS_KEY),
    secretAccessKey: String(process.env.S3_SECRET_KEY),
  },
});

export const getPutSignedUrl = async (key: string, contentType: string) => {
  const command = new PutObjectCommand({
    Bucket: "bucket.chatme.use",
    Key: key,
    ContentType: contentType,
  });
  const url = await getSignedUrl(s3Client, command, { expiresIn: 60 });
  return url;
};
