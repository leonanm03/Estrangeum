import useApproveSubscription from "@/hooks/api/useApproveSubscription";
import useRejectSubscription from "@/hooks/api/useRejectSubscription";
import useToken from "@/hooks/useToken";

export function AddOrReject({ id }) {
  const token = useToken();
  const { approveSubscription } = useApproveSubscription();
  const { rejectSubscription } = useRejectSubscription();

  function approveOrReject(approve) {
    if (approve) {
      approveSubscription(id, token);
    } else {
      rejectSubscription(id, token);
    }
  }

  return (
    <>
      <button
        onClick={() => approveOrReject(true)}
        className="btn bg-green-700 hover:bg-green-900"
      >
        aprovar
      </button>
      <button
        onClick={() => approveOrReject(false)}
        className="btn bg-red-700 hover:bg-red-900"
      >
        rejeitar
      </button>
    </>
  );
}
