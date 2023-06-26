import { useState } from "react";

export function ObjectCarousel({ images }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div
      style={{
        height: "60vh",
      }}
      className="flex flex-col"
    >
      <div className="join flex justify-center">
        {images.map((image) => (
          <button
            key={image.id}
            className={
              selectedImage.id === image.id
                ? "join-item btn w-20 h-20 btn-square bg-secondary px-1 hover:bg-secondary-focus"
                : "join-item btn w-20 h-20 btn-square bg-secondary-content px-1"
            }
            type="radio"
            name="options"
            aria-label={image.id}
            checked={selectedImage.id === image.id}
            onClick={() => setSelectedImage(image)}
          >
            <img
              className="max-h-20 max-w-20"
              src={image.image_url}
              alt={image.id}
            />
          </button>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <img
          className="shadow-xl shadow-secondary"
          width={500}
          height={500}
          src={selectedImage.image_url}
          alt={selectedImage.id}
        />
      </div>
    </div>
  );
}
