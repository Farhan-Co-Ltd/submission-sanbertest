import axios from "axios";

const API_URL = "http://localhost:3000/favorite-characters";

export async function fetchFavoriteCharactersByPersonId(personId: number) {
  const response = await axios.get(`${API_URL}/${personId}`);
  return response.data;
}

export async function createFavoriteCharacter(
  personId: number,
  data: { origin: string; name: string }
) {
  const response = await axios.post(`${API_URL}/${personId}`, data);
  return response.data;
}

export async function deleteFavoriteCharacter(id: number) {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
}
