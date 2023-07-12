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
      {subscriptions?.length > 0 ? (
        <Subscriptions subscriptions={subscriptions} />
      ) : (
        <div className="hero max-h-96 bg-base-200">
          <div className="hero-content text-center text-primary">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold mb-4">Estrangeum</h1>
              <p className="text-xl">
                Sem objetos pendentes no momento. Volte mais tarde!
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
