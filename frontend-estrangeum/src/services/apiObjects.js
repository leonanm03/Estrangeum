import api from "./api";

export async function getObjects() {
  const response = await api.get("/object/all");
  return response.data;
}
