import { InvestDataTypes } from "@/core/investData";
import axios from "axios";

export const getQuizList = async (treasureId: number) => {
  const data = await axios.get(`https://kkabi.shop:9000/quiz-info?treasureId=${treasureId}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: {},
    withCredentials: true,
  });

  return data.data;
};

export async function postQuizAnswer(investData: InvestDataTypes) {
  console.debug("postQuiz:", investData);
  const data = await axios.post(`https://kkabi.shop:9000/invest`, investData, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: {},
    withCredentials: true,
  });
  console.debug(data);
  return data;
}
