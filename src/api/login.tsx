import axios from "axios";
const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  data: {},
  withCredentials: true,
};
export async function postLogin(userData: any) {
  const data = await axios.post(process.env.REACT_APP_DB_HOST + `/api/login`, userData, config);

  console.log("debug data: ", data);
  return data;
}
