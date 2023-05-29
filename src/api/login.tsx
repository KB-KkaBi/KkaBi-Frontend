import axios from "axios";
const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  data: null,
  withCredentials: true,
};
export async function postLogin(userData: any) {
  const data = await axios.post(`/api/login`, userData, config);

  console.log("debug data: ", data);
  return data;
}
