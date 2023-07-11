import { createContext, useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

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
    const loggedUser = data.user;
    const token = data.token;

    localStorage.setItem("user", JSON.stringify(loggedUser));
    localStorage.setItem("tokenUser", JSON.stringify(token));

    setUser(loggedUser);
    setToken(token);
  };

  const resetUser = () => {
    toast(`Volte sempre, ${user.name}!`);
    localStorage.removeItem("user");
    localStorage.removeItem("tokenUser");
    setUser(null);
    setToken(null);
    toast("Logout efetuado com sucesso!");
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
