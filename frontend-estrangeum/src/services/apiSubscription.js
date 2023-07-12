import useToken from "@/hooks/useToken";
import api, { authorization } from "./api";

export async function getPending() {
  const response = await api.get("/subscription/pending");
  return response.data;
}

export async function getSubscription(id) {
  const response = await api.get(`/subscription/id/${id}`);
  return response.data;
}

export async function getMySubscriptions(token) {
  if (token) {
    const response = await api.get(
      "/subscription/my-items",
      authorization(token)
    );
    return response.data;
  }
}

export async function postSubscription(body, token) {
  const response = await api.post("/subscription", body, authorization(token));
  return response.data;
}
