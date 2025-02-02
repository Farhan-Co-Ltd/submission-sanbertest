import axios from "axios";

const API_URL = "http://localhost:3000/persons";

export async function fetchPersons() {
  const response = await axios.get(API_URL);
  return response.data;
}

export async function fetchPersonById(id: number) {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
}

export async function createPerson(data: {
  name: string;
  phone: string;
  email: string;
}) {
  const response = await axios.post(API_URL, data);
  return response.data;
}

export async function updatePerson(
  id: number,
  data: { name?: string; phone?: string; email?: string }
) {
  const response = await axios.put(`${API_URL}/${id}`, data);
  return response.data;
}

export async function deletePerson(id: number) {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
}
