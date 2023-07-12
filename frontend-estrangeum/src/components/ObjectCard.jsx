export function ObjectCard({ category, name, ObjectImage, children }) {
  const image = ObjectImage[0].image_url;

  return (
    <div className="card grid content-between w-96 h-96 bg-base-100 shadow-xl shadow-secondary">
      <figure>
        <img className="w-96 " src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-primary">{name}</h2>
        <div className="card-actions justify-end">
          <div className="badge badge-outline text-primary">{category}</div>
          {children}
        </div>
      </div>
    </div>
  );
}
