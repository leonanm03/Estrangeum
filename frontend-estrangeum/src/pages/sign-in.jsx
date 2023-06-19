import useSignIn from "@/hooks/api/useSignin";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SigninPage() {
  const [disabled, setDisabled] = useState(false);
  const { signIn } = useSignIn();
  const router = useRouter();
  const [body, setBody] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);

    const userData = await signIn(body);
    setDisabled(false);

    if (!userData.user)
      return alert("Erro ao fazer login! Verifique suas credenciais!");

    alert("Login feito com sucesso!");
    router.push("/");
  }

  function handleChange(e) {
    setBody({ ...body, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left text-primary">
            <h1 className="text-5xl font-bold">Faça login agora!</h1>
            <p className="py-6">
              Não compartilhe sua senha com ninguém! A administração não pede
              sua senha!
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
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

              <label className="label">
                <a href="/sign-up" className="label-text-alt link link-hover">
                  Não tem uma conta? Cadastre-se agora!
                </a>
              </label>

              <div className="form-control mt-6">
                <button
                  type="submit"
                  disabled={disabled}
                  className="btn btn-primary"
                >
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
