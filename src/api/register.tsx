import axios from "axios";

export interface EmailType {
  email: string;
}

export async function postCheckEmail(email: EmailType) {
  const data = await axios.post(`/api/check-email`, email);

  // console.log(data);
  return data;
}
