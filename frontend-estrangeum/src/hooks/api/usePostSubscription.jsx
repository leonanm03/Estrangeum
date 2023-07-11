import * as subscriptionApi from "@/services/apiSubscription";
import { useAsync } from "../useAsync";

export default function usePostSubscription() {
  const {
    loading: subscriptionLoading,
    error: subscriptionError,
    act: postSubscription,
  } = useAsync(subscriptionApi.postSubscription, false);

  return {
    subscriptionLoading,
    subscriptionError,
    postSubscription,
  };
}
