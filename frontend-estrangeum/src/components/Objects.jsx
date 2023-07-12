import useObjects from "@/hooks/api/useObjects";
import { ObjectCard } from "@/components";

export function Objects() {
  const { objects } = useObjects();

  return (
    <div className="flex justify-center flex-wrap bg-base-200 gap-10 py-6">
      {objects?.length > 0 ? (
        objects.map((object) => (
          <a key={object.id} href={`object/${object.id}`}>
            <ObjectCard
              id={object.id}
              category={object.category}
              name={object.name}
              ObjectImage={object.ObjectImage}
            />
          </a>
        ))
      ) : (
        <div className="hero max-h-96 bg-base-200">
          <div className="hero-content text-center text-primary">
            <div className="max-w-2xl">
              <p className="text-2xl">
                Estamos sem objetos no momento. Volte mais tarde!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
