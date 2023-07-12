import useToken from "@/hooks/useToken";
import api, { authorization } from "./api";

export async function getPending(token) {
  if (token !== null) {
    const response = await api.get(
      `/subscription/pending`,
      authorization(token)
    );
    return response.data;
  }
}

export async function getSubscription(id, token) {
  if (token !== null) {
    const response = await api.get(
      `/subscription/id/${id}`,
      authorization(token)
    );
    return response.data;
  }
}

export async function getMySubscriptions(token) {
  if (token !== null) {
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
