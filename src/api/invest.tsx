import axios from "axios";

export async function getQuizList(treasureId: number) {
  const data = await axios.get(`/api/quiz-info?treasureId=${treasureId}`, { withCredentials: true });
  console.debug(data);
  return data?.data;
}
