import * as subscriptionApi from "@/services/apiSubscription";
import { useAsync } from "../useAsync";

export default function useRejectSubscription() {
  const {
    loading: subscriptionLoading,
    error: subscriptionError,
    act: rejectSubscription,
  } = useAsync(subscriptionApi.rejectSubscription, false);

  return {
    subscriptionLoading,
    subscriptionError,
    rejectSubscription,
  };
}
