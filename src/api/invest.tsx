import { InvestDataTypes } from "@/core/investData";
import axios from "axios";

export async function getQuizList(treasureId: number) {
  const data = await axios.get(`/api/quiz-info?treasureId=${treasureId}`, { withCredentials: true });
  console.debug(data);
  return data?.data;
}

export async function postQuizAnswer(investData: InvestDataTypes) {
  const data = await axios.post(`/api/invest`, investData, { withCredentials: true });
  console.debug(data);
  return data;
}
