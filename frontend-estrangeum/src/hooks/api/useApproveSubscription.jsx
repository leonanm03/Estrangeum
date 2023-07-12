import * as subscriptionApi from "@/services/apiSubscription";
import { useAsync } from "../useAsync";

export default function useApproveSubscription() {
  const {
    loading: subscriptionLoading,
    error: subscriptionError,
    act: approveSubscription,
  } = useAsync(subscriptionApi.approveSubscription, false);

  return {
    subscriptionLoading,
    subscriptionError,
    approveSubscription,
  };
}
