import axios from "axios";

export async function getAccountInfo() {
  const data = await axios.get(`/api/account-info`, { withCredentials: true });
  // console.log(data.data)
  return data.data;
}

export async function getMyAccount() {
  const data = await axios.get(`/api/get-account-all`, { withCredentials: true });

  // console.log(data.data);
  return data.data;
}

export async function postNewAccount(formData:any) {
  const data = await axios.post(`/api/create-account`, formData, {withCredentials: true})
  
  return data.data;
}

export async function postAccountLog(formData:any){
  const data = await axios.post(`/api/account-log`, formData, {withCredentials: true})
  
  return data.data;
}

export async function getMyOneAccount(id:number){
  const data= await axios.get(`/api/bank?accountId=${id}`, {withCredentials: true});
  
  return data.data.accountMoney;
}