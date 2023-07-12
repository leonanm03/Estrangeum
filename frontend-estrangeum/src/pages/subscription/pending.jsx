import { Subscriptions } from "@/components/Subscriptions";
import usePendingSubscriptions from "@/hooks/api/usePendingSubscriptions";
import useToken from "@/hooks/useToken";
import { useEffect, useState } from "react";

export default function PendingSubscriptions() {
  const token = useToken();
  const { getPending } = usePendingSubscriptions();
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    if (token !== null) {
      getPending().then((subscriptions) => {
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
