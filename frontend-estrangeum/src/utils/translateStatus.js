export function showPortugueseStatus(status) {
  switch (status) {
    case "PENDING":
      return "PENDENTE";
    case "APPROVED":
      return "APROVADO";
    case "REJECTED":
      return "REJEITADO";
    default:
      return "OUTRO";
  }
}

export function showEnglishStatus(status) {
  switch (status) {
    case "PENDENTE":
      return "PENDING";
    case "APROVADO":
      return "APPROVED";
    case "REJEITADO":
      return "REJECTED";
    default:
      return "OTHER";
  }
}
