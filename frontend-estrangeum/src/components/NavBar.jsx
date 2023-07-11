import { useContext, useEffect, useState } from "react";
import { sun, moon } from "../assets";
import { UserContext } from "@/contexts/userContext";
import { Menu } from "./Menu";
export function NavBar() {
  const { user } = useContext(UserContext);
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    changeTheme(localTheme || "night");
  }, []);

  function handleToggle(e) {
    if (e.target.checked) {
      changeTheme("garden");
    } else {
      changeTheme("night");
    }
  }

  function changeTheme(theme) {
    setTheme(theme);
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }

  return (
    <div className="navbar flex flex-auto justify-auto  bg-base-100 shadow-lg text-primary">
      <div className="navbar-start">
        <button className="btn btn-square btn-ghost">
          <label className="swap swap-rotate w-12 h-12">
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={theme === "night" ? false : true}
            />
            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d={sun} />
            </svg>

            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d={moon} />
            </svg>
          </label>
        </button>
      </div>

      <a href="/" className="link link-hover navbar-center text-xl font-bold">
        <img src="/logo.png" alt="logo"></img>
      </a>

      {!user ? (
        <div className="navbar-end">
          <a href="/sign-in" className="link link-hover mr-2.5">
            login
          </a>
          /
          <a href="/sign-up" className="link link-hover ml-2.5">
            cadastro
          </a>
        </div>
      ) : (
        <div className="navbar-end">
          <Menu />
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={user.image_url || "/noprofile.jpg"} alt="avatar" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
