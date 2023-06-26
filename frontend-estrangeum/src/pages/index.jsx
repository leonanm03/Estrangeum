// import useObjects from "@/hooks/api/useObjects";
import { getObjects } from "@/services/apiObjects";
import { useEffect, useState } from "react";

export default function Home() {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    getObjects()
      .then((res) => {
        setObjects(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {objects.map((object) => (
        <div key={object.id}>
          <h1>{object.name}</h1>
        </div>
      ))}
    </>
  );
}
