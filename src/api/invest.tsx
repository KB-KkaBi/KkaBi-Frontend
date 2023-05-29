import { InvestDataTypes } from "@/core/investData";
import axios from "axios";

export const getQuizList = async (treasureId: number) => {
  const data = await axios.get(process.env.REACT_APP_DB_HOST + `/api/quiz-info?treasureId=${treasureId}`, {
    withCredentials: true,
  });

  return data.data;
};

export async function postQuizAnswer(investData: InvestDataTypes) {
  console.debug("postQuiz:", investData);
  const data = await axios.post(process.env.REACT_APP_DB_HOST + `/api/invest`, investData, { withCredentials: true });
  console.debug(data);
  return data;
}
