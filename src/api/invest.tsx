import axios from "axios";

export async function getQuizList(treasureId: number) {
  const data = await axios.get(`${import.meta.env.VITE_BASE_URL}/quiz-info?treasureId=${treasureId}`);
  console.debug(data);
  return data?.data;
}
