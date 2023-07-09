import api from "./api";

export async function getPending() {
  const response = await api.get("/subscription/pending");
  return response.data;
}

export async function getSubscription(id) {
  const response = await api.get(`/subscription/id/${id}`);
  return response.data;
}
