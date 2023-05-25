import axios from "axios";

export interface EmailType {
  email: string;
}

export async function postCheckEmail(email: any) {
  console.log("email --> ", email);
  const data = await axios.post(`/api/check-email`, email, { withCredentials: true });

  console.log(data);
  return data;
}
