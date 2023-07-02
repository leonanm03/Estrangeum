import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SubmitItem() {
  const [disabled, setDisabled] = useState(false);
  const router = useRouter();
  const [body, setBody] = useState({
    name: "",
    description: "",
    category: "MAGIC",
  });
  const [images, setImages] = useState(["", "", ""]);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("BODY", body);
    console.log("IMAGES", images);
  }

  function handleChange(e) {
    setBody({ ...body, [e.target.name]: e.target.value });
  }

  function addImageInput() {
    setImages([...images, ""]);
  }

  function removeImageInput(index) {
    setImages(images.filter((image, i) => i !== index));
  }

  function handleChangeImage(e) {
    const index = e.target.name.split("-")[1];
    const newImages = [...images];
    newImages[index] = e.target.value;
    setImages(newImages);
  }

  return (
    <>
      <Head>
        <title>Enviar Objeto</title>
      </Head>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left text-primary">
            <h1 className="text-5xl font-bold">
              Envie seu objeto para o museu!
            </h1>
            <p className="py-6">
              Diga o nome do objeto, dê sua descrição, escolha a categoria e
              envie<strong> ao menos 3 (três)</strong> imagens dele.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nome</span>
                </label>
                <input
                  className="input input-bordered"
                  disabled={disabled}
                  name="name"
                  value={body.name}
                  type="text"
                  placeholder="Nome"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Descrição</span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  disabled={disabled}
                  name="description"
                  value={body.description}
                  type="text"
                  placeholder="Insira a descrição do objeto"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Categoria</span>
                </label>
                <select
                  name="category"
                  className="select select-bordered w-full"
                  onChange={handleChange}
                  defaultValue={body.category}
                >
                  <option>MAGIC</option>
                  <option>ALIEN</option>
                  <option>MYSTERY</option>
                  <option>HAUNTED</option>
                </select>
              </div>

              {images.map((image, index) => (
                <input
                  type="file"
                  className="file-input file-input-bordered file-input w-full"
                  key={index}
                  name={`image-${index}`}
                  value={image}
                  onChange={handleChangeImage}
                  required
                />
              ))}

              {images.length > 3 && (
                <div className="form-control mt-6">
                  <button
                    onClick={() => removeImageInput(images.length - 1)}
                    type="button"
                    className="btn btn-100"
                  >
                    Remover imagem
                  </button>
                </div>
              )}
              <div className="form-control mt-6">
                <button
                  onClick={addImageInput}
                  type="button"
                  className="btn btn-100"
                >
                  Adicionar imagem
                </button>
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Enviar meu objeto
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
