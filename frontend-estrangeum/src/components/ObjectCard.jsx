import { useEffect, useState } from "react";

export function ObjectCard({ object }) {
  const { id, category, name, ObjectImage } = object;
  const image = ObjectImage[0].image_url;

  return (
    <div className="card w-96 max-h-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-96 " src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-primary">{name}</h2>
        <div className="card-actions justify-end">
          <div className="badge badge-outline text-primary">{category}</div>
        </div>
      </div>
    </div>
  );
}
