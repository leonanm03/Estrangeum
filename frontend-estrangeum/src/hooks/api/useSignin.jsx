import * as authApi from "../../services/apiAuth";
import { useAsync } from "../useAsync";

export default function useSignIn() {
  const {
    loading: signInLoading,
    error: signInError,
    act: signIn,
  } = useAsync(authApi.signIn, false);

  return {
    signInLoading,
    signInError,
    signIn,
  };
}
