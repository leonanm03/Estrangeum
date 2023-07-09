import { createContext, useState } from "react";
import { useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    const recoveredToken = localStorage.getItem("tokenUser");

    if (recoveredUser && recoveredToken) {
      setUser(JSON.parse(recoveredUser));
      setToken(JSON.parse(recoveredToken));
    }

    setLoading(false);
  }, []);

  const storeUser = (data) => {
    console.log("guardando usuário");
    console.log(data);
    const loggedUser = data.user;
    const token = data.token;

    console.log("logged user:", loggedUser);
    console.log("token:", token);

    localStorage.setItem("user", JSON.stringify(loggedUser));
    localStorage.setItem("tokenUser", JSON.stringify(token));

    setUser(loggedUser);
    setToken(token);
  };

  const resetUser = () => {
    console.log("Você saiu!");
    localStorage.removeItem("user");
    localStorage.removeItem("tokenUser");
    setUser(null);
    setToken(null);
  };

  return (
    <UserContext.Provider
      value={{
        authenticated: !!user,
        user,
        token,
        storeUser,
        loading,
        resetUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
