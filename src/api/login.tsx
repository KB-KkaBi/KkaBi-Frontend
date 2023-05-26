import axios from "axios";

export async function postLogin(userData: any) {
  const data = await axios.post(`/api/login`, userData,{withCredentials: true});

  console.log(data);
  return data;
}
