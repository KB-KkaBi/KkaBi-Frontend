import axios from "axios";

interface nicknameType {
  nickname : string;
}
export async function getMyInfo() {
  const data = await axios.get(`/api/userInfo`,{withCredentials: true});

  return data.data;
}

export async function updateNickname(nickname: nicknameType) {
  const data = await axios.post(`/api/update-nickname`, nickname,{withCredentials: true});

  console.log(data);
  return data;
}

export async function updatePassword(passwordData: any) {
  const data = await axios.post(`/api/update-password`, passwordData,{withCredentials: true});

  console.log(data);
  return data;
}
