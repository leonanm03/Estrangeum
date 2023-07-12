import { Subscriptions } from "@/components/Subscriptions";
import useMySubscriptions from "@/hooks/api/useMySubscriptions";
import useToken from "@/hooks/useToken";
import { useEffect, useState } from "react";

export default function MyObjects() {
  const token = useToken();
  const { getMySubscriptions } = useMySubscriptions();
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    if (token !== null) {
      getMySubscriptions().then((subscriptions) => {
        setSubscriptions(subscriptions);
      });
    }
  }, [token]);

  return (
    <>
      <Subscriptions subscriptions={subscriptions} />
    </>
  );
}
