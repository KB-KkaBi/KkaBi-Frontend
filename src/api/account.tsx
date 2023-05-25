import axios from "axios";

export async function getAccountInfo() {
  const data = await axios.get(`${import.meta.env.VITE_BASE_URL}/account-info`);
  console.log(data.data);
  return data.data;
}

export async function getMyAccount() {
  const data = await axios.get(`${import.meta.env.VITE_BASE_URL}/get-account-all`);
  console.log(data.data);
  return data.data;
}