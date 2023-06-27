import { ObjectDetails } from "@/components";
import useObject from "@/hooks/api/useObject";
import Head from "next/head";
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
    <>
      <Head>
        <title>{objectData?.name || "Página do objeto"}</title>
      </Head>
      {objectData && <ObjectDetails object={objectData} />}
    </>
  );
}
