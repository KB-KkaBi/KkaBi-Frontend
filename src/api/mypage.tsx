import axios from "axios";

export async function getTotalQuizLog() {
  const data = await axios.get(process.env.REACT_APP_DB_HOST + `/api/quiz-log`, {
    withCredentials: true,
  });

  return data?.data;
}

export async function getQuizLogPagnation(pageNumber: number, pageSize: number) {
  const data = await axios.get(process.env.REACT_APP_DB_HOST + `/api/quiz-log?page=${pageNumber}&size=${pageSize}`, {
    withCredentials: true,
  });

  console.debug(data.data);
  return data?.data;
}
interface nicknameType {
  nickname: string;
}
export async function getMyInfo() {
  const data = await axios.get(process.env.REACT_APP_DB_HOST + `/api/userInfo`, { withCredentials: true });

  return data.data;
}

export async function updateNickname(nickname: nicknameType) {
  const data = await axios.post(process.env.REACT_APP_DB_HOST + `/api/update-nickname`, nickname, {
    withCredentials: true,
  });

  console.log(data);
  return data;
}

export async function updatePassword(passwordData: any) {
  const data = await axios.post(process.env.REACT_APP_DB_HOST + `/api/update-password`, passwordData, {
    withCredentials: true,
  });

  console.log(data);
  return data;
}
