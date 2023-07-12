export function showPortugueseCategory(category) {
  switch (category) {
    case "HAUNTED":
      return "ASSOMBRADO";
    case "MYSTERY":
      return "MISTERIOSO";
    case "ALIEN":
      return "ALIENÍGENA";
    case "MAGIC":
      return "MÁGICO";
    default:
      return "OUTROS";
  }
}

export function showEnglishCategory(category) {
  switch (category) {
    case "ASSOMBRADO":
      return "HAUNTED";
    case "MISTERIOSO":
      return "MYSTERY";
    case "ALIENÍGENA":
      return "ALIEN";
    case "MÁGICO":
      return "MAGIC";
    default:
      return "OTHER";
  }
}
