import { showPortugueseStatus } from "@/utils/translateStatus";

export function StatusBadge({ status }) {
  if (status === "REJECTED") {
    return (
      <div className="badge bg-red-700 text-white">
        <strong>{showPortugueseStatus(status)}</strong>
      </div>
    );
  }

  if (status === "APPROVED") {
    return (
      <div className="badge bg-green-700 text-white">
        <strong>{showPortugueseStatus(status)}</strong>
      </div>
    );
  }
  return (
    <div className="badge badge-outline text-primary">
      {showPortugueseStatus(status)}
    </div>
  );
}
