import * as subscriptionApi from "@/services/apiSubscription";
import { useAsync } from "../useAsync";
import useToken from "../useToken";

export default function usePendingSubscriptions() {
  const token = useToken();
  const {
    data: subscriptions,
    loading: subscriptionsLoading,
    error: subscriptionsError,
    act: getPending,
  } = useAsync(() => subscriptionApi.getPending(token));

  return {
    subscriptions,
    subscriptionsLoading,
    subscriptionsError,
    getPending,
  };
}
