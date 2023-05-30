import axios from "axios";

export async function postLogin(userData: any) {
  const data = await axios.post(`https://kkabi.shop:9000/login`, userData, {
    withCredentials: true,
  });

  console.log(data);
  return data;
}
