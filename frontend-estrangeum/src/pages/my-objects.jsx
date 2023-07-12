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
      <div className="hero max-h-96 bg-base-200">
        <div className="hero-content text-center text-primary">
          <div className="max-w-5xl">
            <h1 className="text-5xl font-bold mb-4">Meus Objetos</h1>
            {subscriptions.length <= 0 && (
              <p className="text-xl">
                Você ainda não enviou nenhum objeto para o museu.
              </p>
            )}
            <p className="text-xl">
              Deseja enviar um objeto para o museu? Clique no botão!
              <span>
                <a
                  href="/submit-item"
                  type="submit"
                  className="btn btn-sm btn-primary ml-4"
                >
                  Enviar objeto
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>

      {subscriptions.length > 0 && (
        <Subscriptions subscriptions={subscriptions} />
      )}
    </>
  );
}
