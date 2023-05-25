import axios from "axios";

export async function getQuizList(treasureId: number) {
  const data = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/quiz-info/${treasureId}`);
  console.debug(data);
  return data?.data;
}
