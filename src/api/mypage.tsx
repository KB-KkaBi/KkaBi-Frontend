import axios from "axios";

export async function getTotalQuizLog() {
  const data = await axios.get(`https://kkabi.shop:9000/quiz-total-log`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: null,
    withCredentials: true,
  });
  console.debug("gettotal quizlog:", data?.data);
  return data?.data;
}

export async function getQuizLogPagnation(pageNumber: number, pageSize: number) {
  const data = await axios.get(`https://kkabi.shop:9000/quiz-log?size=${pageSize}&page=${pageNumber}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: null,
    withCredentials: true,
  });

  console.debug(data.data);
  return data?.data;
}
interface nicknameType {
  nickname: string;
}
export async function getMyInfo() {
  const data = await axios.get(`https://kkabi.shop:9000/userInfo`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: null,
    withCredentials: true,
  });

  return data.data;
}

export async function updateNickname(nickname: nicknameType) {
  const data = await axios.post(`https://kkabi.shop:9000/update-nickname`, nickname, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: null,
    withCredentials: true,
  });

  console.debug(data);
  return data;
}

export async function updatePassword(passwordData: any) {
  const data = await axios.post(`https://kkabi.shop:9000/update-password`, passwordData, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: null,
    withCredentials: true,
  });

  console.debug(data);
  return data;
}
