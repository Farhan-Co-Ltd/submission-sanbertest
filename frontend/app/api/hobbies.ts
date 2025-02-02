import axios from "axios";

const API_URL = "http://localhost:3000/hobbies";

export async function fetchHobbiesByPersonId(personId: number) {
  const response = await axios.get(`${API_URL}/${personId}`);
  return response.data;
}

export async function createHobby(personId: number, name: string) {
  const response = await axios.post(`${API_URL}/${personId}`, { name });
  return response.data;
}

export async function deleteHobby(id: number) {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
}
