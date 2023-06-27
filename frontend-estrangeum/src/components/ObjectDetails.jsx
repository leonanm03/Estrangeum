import { useState } from "react";
import { ImageMagnifier, ZoomIcon } from ".";

export function ObjectDetails({ object }) {
  const [selectedImage, setSelectedImage] = useState(object.ObjectImage[0]);
  return (
    <>
      <section>
        <div className="relative mx-auto max-w-screen-xl px-4 py-8">
          <div>
            <h1 className="text-2xl font-bold text-primary lg:text-3xl">
              {object.name}
            </h1>

            <p className="mt-1 text-sm text-gray-500">ID: {object.id}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
            <div className="lg:col-span-3">
              <div className="relative mt-4 flex content-center">
                <ImageMagnifier src={selectedImage.image_url} />
                <ZoomIcon />
              </div>

              <ul className="mt-6 flex gap-1">
                {object.ObjectImage.map((image) => (
                  <li key={image.id}>
                    <img
                      alt={image.id}
                      src={image.image_url}
                      className={
                        selectedImage.id === image.id
                          ? "h-20 w-20 rounded-md object-cover cursor-pointer hover:opacity-75"
                          : "h-16 w-16 rounded-md object-cover cursor-pointer hover:opacity-75"
                      }
                      onClick={() => setSelectedImage(image)}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:sticky lg:top-0">
              <form className="space-y-4 lg:pt-8">
                <fieldset>
                  <legend className="text-lg font-bold text-primary">
                    Categoria
                  </legend>

                  <div className="mt-2 flex flex-wrap gap-1">
                    <span className="badge badge-outline text-primary">
                      {object?.category}
                    </span>
                  </div>
                </fieldset>
              </form>
            </div>

            <div className="lg:col-span-3">
              <div className="prose max-w-none">
                <p className="text-primary">{object.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
