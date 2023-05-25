import axios from "axios";

export async function postCheckEmail(email: string) {
  const data = await axios.post(`${import.meta.env.VITE_BASE_URL}/check-email`, email);

  console.log(data);
  return data;
}
