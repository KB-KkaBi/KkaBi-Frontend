import axios from "axios";

export async function postLogin(userData: any) {
  const data = await axios.post(`${import.meta.env.VITE_BASE_URL}/login`, userData);

  console.log(data);
  return data;
}
