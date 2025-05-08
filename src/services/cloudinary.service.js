import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.COUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadOnCloudinary = async (filePath) => {
  try {
    if (!filePath) {
      throw new Error("File path is required");
    }

    const uploadResult = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto",
    });

    console.log("✅ File uploaded successfully:", uploadResult.url);

    await fs.unlink(filePath);

    return uploadResult;
  } catch (error) {
    fs.unlinkSync(filePath);
    console.error("❌ File upload failed:", error.message);
    throw new Error("File upload failed");
  }
};
