import Head from "next/head";
import { useState } from "react";

export default function SignupPage() {
  const [disabled, setDisabled] = useState(false);
  const [body, setBody] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    image_url: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    console.log(body);

    setDisabled(true);
  }

  function handleChange(e) {
    setBody({ ...body, [e.target.name]: e.target.value });
    console.log(body);
  }

  return (
    <>
      <Head>
        <title>Login</title>
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
                  <span className="label-text">Avatar</span>
                </label>
                <input
                  className="input input-bordered"
                  disabled={disabled}
                  name="confirmPassword"
                  value={body.image_url}
                  type="password"
                  placeholder="avatar url"
                  onChange={handleChange}
                  required
                />
              </div>

              <label className="label">
                <a href="/sign-up" className="label-text-alt link link-hover">
                  Não tem uma conta? Cadastre-se agora!
                </a>
              </label>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
