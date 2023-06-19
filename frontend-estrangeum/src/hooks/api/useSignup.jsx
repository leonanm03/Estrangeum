import * as userApi from "../../services/userApi";
import { useAsync } from "../useAsync";

export default function useSignUp() {
  const {
    loading: signUpLoading,
    error: signUpError,
    act: signUp,
  } = useAsync(userApi.signUp, false);

  return {
    signUpLoading,
    signUpError,
    signUp,
  };
}
