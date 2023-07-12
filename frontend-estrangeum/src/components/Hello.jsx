import { UserContext } from "@/contexts/userContext";
import { useContext } from "react";

export function Hello() {
  const { user } = useContext(UserContext);
  return (
    <div className="hero max-h-96 bg-base-200">
      <div className="hero-content text-center text-primary">
        <div className="max-w-5xl">
          <h1 className="text-5xl font-bold mb-4">Estrangeum</h1>
          <p className="text-xl">
            Bem vindo(a) ao Estrangeum, um museu virtual de objetos estranhos.
            Aqui vislumbraremos objetos que não são comuns, mas que são
            interessantes.
          </p>

          {user && (
            <>
              <div className="flex flex-col items-center mt-8">
                <h2 className="text-2xl font-bold mb-2">Olá, {user.name}! </h2>
                <p className="text-xl">
                  Deseja enviar um objeto para o museu? Clique no botão!
                  <span>
                    <a
                      href="/submit-item"
                      type="submit"
                      className="btn btn-sm btn-primary ml-4"
                    >
                      Enviar objeto
                    </a>
                  </span>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
