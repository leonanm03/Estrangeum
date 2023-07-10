import { UserContext } from "@/contexts/userContext";
import { useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";

export function Menu() {
  const { user, resetUser } = useContext(UserContext);
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn m-1 bg-base-100 text-primary">
        <AiOutlineMenu />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a href="/submit-item">Enviar um Objeto</a>
        </li>
        <li>
          <a href="/my-objects">Meus objetos enviados</a>
        </li>
        {user.type === "ADMIN" && (
          <li>
            <a href="/pending">Objetos Pendentes</a>
          </li>
        )}
        <li onClick={resetUser}>
          <a>Sair</a>
        </li>
      </ul>
    </div>
  );
}
