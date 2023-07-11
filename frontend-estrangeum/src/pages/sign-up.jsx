import useSignUp from "@/hooks/api/useSignup";
import { uploadProfile } from "@/services/storage";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";

export default function SignupPage() {
  const [disabled, setDisabled] = useState(false);
  const { signUp } = useSignUp();
  const router = useRouter();
  const [body, setBody] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    image_url: "",
  });
  const [profile, setProfile] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const { name, email, password, confirmPassword } = body;

    if (password !== confirmPassword) {
      toast.error("As senhas devem ser iguais!");
    } else {
      setDisabled(true);

      const image_url = await uploadProfile(profile);
      const request = await signUp({ name, email, password, image_url });
      setDisabled(false);

      if (request.email) {
        toast.success("Inscrito com sucesso! Por favor, faça login.");
        return router.push("/sign-in");
      }
      if (request.response?.status === 409)
        return toast.error("Este email já está cadastrado!, tente outro.");
      if (request.response?.status === 400)
        return toast.error("Preencha os campos corretamente!");
      toast.error("Erro ao se inscrever, tente novamente mais tarde.");
    }
  }

  function handleChange(e) {
    setBody({ ...body, [e.target.name]: e.target.value });
  }

  function handleChangeProfile(e) {
    console.log(e.target.files[0]);
    setProfile(e.target.files[0]);
  }

  return (
    <>
      <Head>
        <title>Cadastro</title>
      </Head>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left text-primary">
            <h1 className="text-5xl font-bold">Faça cadastro agora!</h1>
            <p className="py-6">
              Seja bem vindo ao <strong>Estrangeum</strong>, o melhor lugar para
              você vislumbrar os objetos mais estranhos do universo!
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                  <span className="label-text">Email</span>
                </label>
                <input
                  className="input input-bordered"
                  disabled={disabled}
                  name="email"
                  value={body.email}
                  type="email"
                  placeholder="E-mail"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Senha</span>
                </label>
                <input
                  className="input input-bordered"
                  disabled={disabled}
                  name="password"
                  value={body.password}
                  type="password"
                  placeholder="Senha"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirmar senha</span>
                </label>
                <input
                  className="input input-bordered"
                  disabled={disabled}
                  name="confirmPassword"
                  value={body.confirmPassword}
                  type="password"
                  placeholder="Senha"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Imagem de perfil</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered file-input w-full text-primary"
                  name="profile"
                  onChange={(e) => handleChangeProfile(e)}
                  disabled={disabled}
                  required
                />
                {profile && (
                  <div className="mt-2  text-primary">
                    <Image
                      src={URL.createObjectURL(profile)}
                      alt="profile"
                      width={200}
                      height={200}
                    />
                  </div>
                )}
              </div>

              <label className="label">
                <a href="/sign-up" className="label-text-alt link link-hover">
                  Já tem uma conta? Faça login!
                </a>
              </label>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
