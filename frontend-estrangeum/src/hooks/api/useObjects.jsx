import * as objectsApi from "@/services/apiObjects";
import { useAsync } from "../useAsync";

export default function useObjects() {
  const {
    data: objects,
    loading: objectsLoading,
    error: objectsError,
    act: getObjects,
  } = useAsync(objectsApi.getObjects);

  return {
    objects,
    objectsLoading,
    objectsError,
    getObjects,
  };
}
