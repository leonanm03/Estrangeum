import { UserContext } from "@/contexts/userContext";
import { useContext } from "react";

export default function useToken() {
  const { token } = useContext(UserContext);

  return token;
}
