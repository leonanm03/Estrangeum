import useAsync from "../useAsync";

import * as objectsApi from "@/services/apiObjects";

export default function useObjects() {
  const {
    data: objects,
    loading: objectsLoading,
    error: objectsError,
    act: getObjects,
  } = useAsync(() => objectsApi.getObjects);

  return {
    objects,
    objectsLoading,
    objectsError,
    getObjects,
  };
}
