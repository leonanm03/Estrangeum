import { storage } from "@/firebase/initFirebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { v4 as uuid } from "uuid";

export default async function uploadFiles(files) {
  const urls = [];
  const promises = [];

  files.forEach((file) => {
    const storageRef = ref(storage, `objects/${file.name}${uuid()}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    promises.push(
      new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (progress) => {},
          (error) => {
            reject(error);
          },
          async () => {
            try {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              urls.push(downloadURL);
              resolve();
            } catch (error) {
              reject(error);
            }
          }
        );
      })
    );
  });

  try {
    await Promise.all(promises);
    return urls;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
