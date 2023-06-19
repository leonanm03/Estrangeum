import api from "./api";

export async function signUp(body) {
  const response = await api.post("/user/create", body);
  return response.data;
}
