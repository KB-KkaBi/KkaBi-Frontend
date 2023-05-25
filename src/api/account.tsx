import axios from "axios";

export async function getAccountInfo() {
  const data = await axios.get(`${import.meta.env.VITE_BASE_URL}/account-info`);
  return data.data;
}

export async function getMyAccount() {
   console.log("sdsfdsdsf")
  const data = await axios.get(`/get-account-all`, {withCredentials: true});
  console.log(data.data);
  return data.data;
}

export async function postNewAccount(formData:any) {
  const data = await axios.post(`/api/create-account`, formData, {withCredentials: true})
  
  return data.data;
}

