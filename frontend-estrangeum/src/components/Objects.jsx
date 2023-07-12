import useObjects from "@/hooks/api/useObjects";
import { ObjectCard } from "@/components";

export function Objects() {
  const { objects } = useObjects();

  return (
    <div className="flex justify-center flex-wrap bg-base-200 gap-10 py-6">
      {objects?.length > 0
        ? objects.map((object) => (
            <a key={object.id} href={`object/${object.id}`}>
              <ObjectCard
                id={object.id}
                category={object.category}
                name={object.name}
                ObjectImage={object.ObjectImage}
              />
            </a>
          ))
        : "nothing"}
    </div>
  );
}
