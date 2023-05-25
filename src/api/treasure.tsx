import axios from "axios";
axios.defaults.withCredentials = true;

export async function getTreasure() {
  const data = await axios.get(`/treasure-info`, { withCredentials: true });

  return data.data;
}

// export async function postTreasure(treasureData: any) {
//   const data = await axios.post(`${import.meta.env.VITE_BASE_URL}`, treasureData);

//   console.log(data);
//   return data;
// }

export async function getMyAccount() {
  const data = await axios.get(`/api/get-account-all`, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });

  console.log(data);
  return data;
}
