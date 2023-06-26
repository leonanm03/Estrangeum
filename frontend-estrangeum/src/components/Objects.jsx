import useObjects from "@/hooks/api/useObjects";
import { ObjectCard } from "./ObjectCard";

export function Objects() {
  const { objects, getObjects } = useObjects();

  return (
    <div className="flex justify-center flex-wrap bg-base-200 gap-10 py-6">
         {objects?.length > 0
        ? objects.map((object) => <ObjectCard key={object.id} object={...object} />)
        : "nothing"}
    </div>
  );
}
