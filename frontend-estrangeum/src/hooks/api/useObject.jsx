import * as objectsApi from "@/services/apiObjects";
import { useAsync } from "../useAsync";

export default function useObject() {
  const {
    data: object,
    loading: objectLoading,
    error: objectError,
    act: getObject,
  } = useAsync((id) => objectsApi.getObject(id), false);

  return {
    object,
    objectLoading,
    objectError,
    getObject,
  };
}
