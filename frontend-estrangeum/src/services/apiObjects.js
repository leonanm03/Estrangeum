import api from "./api";

export async function getObjects() {
  const response = await api.get("/object/all");
  return response.data;
}

export async function getObject(id) {
  const response = await api.get(`/object/${id}`);
  return response.data;
}
