import axios from "axios";

export async function postLogin(userData: any) {
  const data = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/api/login`, userData, {
    withCredentials: true,
  });

  console.log(data);
  return data;
}
