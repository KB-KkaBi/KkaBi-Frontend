import axios from "axios";

export async function getTreasure() {
  const data = await axios.get(`서버url`);

  console.log(data);
  return data;
}

export async function postTreasure(treasureData: any) {
  const data = await axios.post(`서버url`, treasureData);

  console.log(data);
  return data;
}
