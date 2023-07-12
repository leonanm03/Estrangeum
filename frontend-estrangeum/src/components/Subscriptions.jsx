import { ObjectCard, StatusBadge } from "@/components";

export function Subscriptions({ subscriptions }) {
  return (
    <div className="flex justify-center flex-wrap bg-base-200 gap-10 py-6">
      {subscriptions?.length > 0 ? (
        subscriptions.map((object) => (
          <a key={object.id} href={`/subscription/${object.id}`}>
            <ObjectCard
              id={object.id}
              category={object.category}
              name={object.name}
              ObjectImage={object.SubscriptionImage}
            >
              <StatusBadge status={object.status} />
            </ObjectCard>
          </a>
        ))
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
    </div>
  );
}
