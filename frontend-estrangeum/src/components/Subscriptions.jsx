import { ObjectCard, StatusBadge } from "@/components";

export function Subscriptions({ subscriptions }) {
  return (
    <div className="flex justify-center flex-wrap bg-base-200 gap-10 py-6">
      {subscriptions?.length > 0
        ? subscriptions.map((object) => (
            <a href={`/subscription/${object.id}`}>
              <ObjectCard
                key={object.id}
                id={object.id}
                category={object.category}
                name={object.name}
                ObjectImage={object.SubscriptionImage}
              >
                <StatusBadge status={object.status} />
              </ObjectCard>
            </a>
          ))
        : "nothing"}
    </div>
  );
}
