import * as subscriptionApi from "@/services/apiSubscription";
import { useAsync } from "../useAsync";
import useToken from "../useToken";

export default function useMySubscriptions() {
  const token = useToken();
  const {
    data: subscriptions,
    loading: subscriptionsLoading,
    error: subscriptionsError,
    act: getMySubscriptions,
  } = useAsync(() => subscriptionApi.getMySubscriptions(token));

  return {
    subscriptions,
    subscriptionsLoading,
    subscriptionsError,
    getMySubscriptions,
  };
}
