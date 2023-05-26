import axios from "axios";

export async function getQuizLog(pageNumber: number, pageSize: number) {
  const data = await axios.get(`/api/quiz-log?pageNumber=${pageNumber}&pageSize=${pageSize}`, {
    withCredentials: true,
  });

  console.debug(data.data);
  return data.data;
}
