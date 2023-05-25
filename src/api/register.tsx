import axios from "axios";

interface EmailType {
  email: string;
}

export async function postCheckEmail(email: EmailType) {
  console.log(email);
  const data = await axios.post(`/api/check-email`, email, { withCredentials: true });

  console.log(data);
  return data;
}
