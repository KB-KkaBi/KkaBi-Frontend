import axios from "axios";

export async function getTotalAccountLog() {
  const data = await axios.post(`/api/account-total-log`, { withCredentials: true });

  console.log(data);
  return data;
}

export async function getAccountLogPagenation(page: number) {
  const data = await axios.post(`/api/account-total-log?size=10&page=${page}`, { withCredentials: true });

  console.log(data);
  return data;
}
