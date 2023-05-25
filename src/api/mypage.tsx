import axios from "axios";

export async function getMyInfo() {
  const data = await axios.get(`/api/userInfo`,{withCredentials: true});

  return data.data;
}

export async function updateNickname(newNickname: string) {
  const data = await axios.post(`/api/update-nickname`, newNickname,{withCredentials: true});

  console.log(data);
  return data;
}

export async function updatePassword(passwordData: any) {
  const data = await axios.post(`/api/update-password`, passwordData,{withCredentials: true});

  console.log(data);
  return data;
}
