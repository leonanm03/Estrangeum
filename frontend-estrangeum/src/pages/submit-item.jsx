import usePostSubscription from "@/hooks/api/usePostSubscription";
import useToken from "@/hooks/useToken";
import { uploadObjects } from "@/services/storage";
import { showEnglishCategory } from "@/utils/translateCategory";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SubmitItem() {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const token = useToken();
  const { postSubscription } = usePostSubscription();
  const [body, setBody] = useState({
    name: "",
    description: "",
  });
  const [category, setCategory] = useState("MAGIC");
  const [images, setImages] = useState(["", "", ""]);

  async function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);
    setLoading(true);
    window.my_modal_1.showModal();
    try {
      const SubscriptionImage = await uploadObjects(images);
      await postSubscription({ ...body, category, SubscriptionImage }, token);
    } catch (error) {
      console.log(error);
    }
    setDisabled(false);
    setLoading(false);
  }

  function handleChange(e) {
    setBody({ ...body, [e.target.name]: e.target.value });
  }

  function handleChangeCategory(e) {
    const newValue = showEnglishCategory(e.target.value);
    setCategory(newValue);
  }

  function addImageInput() {
    setImages([...images, ""]);
  }

  function removeImageInput(index) {
    setImages(images.filter((image, i) => i !== index));
  }

  function handleChangeImage(index, e) {
    const newImages = [...images];
    newImages[index] = e.target.files[0];
    setImages(newImages);
  }

  return (
    <>
      <Head>
        <title>Enviar Objeto</title>
      </Head>
      <dialog id="my_modal_1" className="modal">
        <form method="dialogue" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            {loading
              ? "Enviando seu objeto..."
              : `${body.name} enviado com sucesso!`}
          </p>
          {loading ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : (
            <div className="modal-action">
              <button className="btn">Close</button>
            </div>
          )}
        </form>
      </dialog>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left text-primary">
            <h1 className="text-5xl font-bold">
              Envie seu objeto para o museu!
            </h1>
            <p className="py-6">
              Escreva o nome do objeto, dê sua descrição, escolha a categoria e
              envie<strong> ao menos 3 (três)</strong> imagens dele.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nome</span>
                </label>
                <input
                  className="input input-bordered text-primary"
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
                  className="textarea textarea-bordered text-primary"
                  disabled={disabled}
                  name="description"
                  value={body.description}
                  type="text"
                  placeholder="Escreva uma breve história sobre o objeto"
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
                  className="select select-bordered w-full text-primary"
                  onChange={handleChangeCategory}
                  defaultValue={category}
                  disabled={disabled}
                >
                  <option>MÁGICO</option>
                  <option>ALIENÍGENA</option>
                  <option>MISTERIOSO</option>
                  <option>ASSOMBRADO</option>
                </select>
              </div>

              {images.map((image, index) => (
                <div key={index} className="form-control">
                  <label className="label">
                    <span className="label-text">Imagem {index + 1}</span>
                  </label>
                  <input
                    type="file"
                    className="file-input file-input-bordered file-input w-full text-primary"
                    name={`image-${index}`}
                    onChange={(e) => handleChangeImage(index, e)}
                    disabled={disabled}
                    required
                  />
                  {image && (
                    <div className="mt-2  text-primary">
                      <Image
                        src={URL.createObjectURL(image)}
                        alt={`Imagem ${index + 1}`}
                        width={200}
                        height={200}
                      />
                    </div>
                  )}
                </div>
              ))}

              {images.length > 3 && (
                <div className="form-control mt-6">
                  <button
                    onClick={() => removeImageInput(images.length - 1)}
                    type="button"
                    className="btn btn-100"
                    disabled={disabled}
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
                  disabled={disabled}
                >
                  Adicionar imagem
                </button>
              </div>

              <div className="form-control mt-6">
                <button
                  type="submit"
                  disabled={disabled}
                  className="btn btn-primary"
                >
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
