import { useState, useEffect } from "react";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "@/firebase/initFirebase";

function Teste() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "objects");

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls([...imageUrls, url]);
        });
      });
    });
  }, []);

  return (
    <div>
      {imageUrls.map((url, index) => {
        return <img key={index} src={url} />;
      })}
    </div>
  );
}

export default Teste;
