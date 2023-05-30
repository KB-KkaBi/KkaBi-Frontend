import axios from "axios";

export interface EmailType {
  email: string;
}

interface UserType {
  character: string;
  email: string;
  nickname: string;
  pw: string;
}

/**
 * 이메일 중복검사 확인
 */
export async function postCheckEmail(email: EmailType) {
  const data = await axios.post(`https://kkabi.shop:9000/check-email`, email, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: {},
    withCredentials: true,
  });

  // console.log(data);
  return data;
}
/**
 * 회원가입하기
 */
export async function postRegister(user: UserType) {
  const data = await axios.post(`https://kkabi.shop:9000/register`, user, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: {},
    withCredentials: true,
  });

  // export async function postCheckEmail(email: EmailType) {
  //   const data = await axios.post(`https://kkabi.shop:9000/check-email`, email);

  // console.log(data);
  return data;
}
