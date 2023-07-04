import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;
  console.log("env", typeof process.env.NEXT_STORAGE_BUCKET_ID);
  console.log("id", typeof process.env.NEXT_PUBLIC_DATABASE_ID2);
  console.log("id", process.env.NEXT_PUBLIC_DATABASE_ID2);

  const fileUploaded = await storage.createFile(
    process.env.NEXT_PUBLIC_DATABASE_ID2!,
    ID.unique(),
    file
  );
  return fileUploaded;
};

export default uploadImage;
