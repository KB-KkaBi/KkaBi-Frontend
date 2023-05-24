import axios from "axios";

export async function getTreasure() {
  console.log(import.meta.env.VITE_BASE_URL);
  const data = await axios.get(`${import.meta.env.VITE_BASE_URL}/treasure-info`);

  return data.data;
}

export async function postTreasure(treasureData: any) {
  const data = await axios.post(`서버url`, treasureData);

  console.log(data);
  return data;
}
