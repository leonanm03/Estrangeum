import { storage } from "@/firebase/initFirebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { v4 as uuid } from "uuid";

export async function uploadObjects(files) {
  const urls = [];
  const folder = uuid();

  const uploadPromises = files.map((file) => {
    return new Promise(async (resolve, reject) => {
      try {
        const storageRef = ref(
          storage,
          `objects/${folder}/${file.name}${uuid().slice(0, 4)}`
        );
        const uploadTask = uploadBytesResumable(storageRef, file);

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
      } catch (error) {
        reject(error);
      }
    });
  });

  try {
    await Promise.all(uploadPromises);
    return urls;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
