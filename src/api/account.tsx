import axios from "axios";

export async function getAccount() {
  const data = await axios.get(`${import.meta.env.VITE_BASE_URL}/account-info`);

  return data.data;
}

