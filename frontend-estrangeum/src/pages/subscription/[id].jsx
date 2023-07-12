import { ObjectDetails } from "@/components";
import useSubscription from "@/hooks/api/useSubscription";
import useToken from "@/hooks/useToken";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SubscriptionPage() {
  const router = useRouter();
  const { id } = router.query;
  const { getSubscription } = useSubscription();
  const [objectData, setObjectData] = useState(null);
  const token = useToken();

  useEffect(() => {
    async function fetchData() {
      if (id !== undefined) {
        try {
          const object = await getSubscription(id, token);
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
      {objectData && (
        <ObjectDetails
          {...objectData}
          ObjectImage={objectData.SubscriptionImage}
          isSubscription={true}
        />
      )}
    </>
  );
}
