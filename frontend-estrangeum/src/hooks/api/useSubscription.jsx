import * as subscriptionApi from "@/services/apiSubscription";
import { useAsync } from "../useAsync";
import useToken from "../useToken";

export default function useSubscription() {
  const token = useToken();
  const {
    data: subscription,
    loading: subscriptionLoading,
    error: subscriptionError,
    act: getSubscription,
  } = useAsync((id) => subscriptionApi.getSubscription(id, token), false);

  return {
    subscription,
    subscriptionLoading,
    subscriptionError,
    getSubscription,
  };
}
