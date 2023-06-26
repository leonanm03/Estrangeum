import { ObjectCarousel } from "@/components/ObjectCarousel";
import useObject from "@/hooks/api/useObject";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ObjectPage() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const { getObject } = useObject();
  const [objectData, setObjectData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      if (id !== undefined) {
        try {
          const object = await getObject(id);
          console.log(object);
          setObjectData(object);
        } catch (error) {
          console.log(error);
        }
      }
    }
    fetchData();
  }, [id]);

  return (
    <>{objectData && <ObjectCarousel images={objectData.ObjectImage} />}</>
  );
}
