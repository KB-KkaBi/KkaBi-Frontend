import * as P from "@/@pages";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userSequence } from "./recoil/User";

// 로그인 여부를 체크하는 함수
// const isLoggedIn = () => {
//
//   let userLoggedIn = false;

//   if (userSeq > 0) {
//     userLoggedIn = true; // 예시로 true로 설정합니다.
//   } else {
//     userLoggedIn = false; // 예시로 true로 설정합니다.
//   }

//   return userLoggedIn;
// };

const Router = () => {
  const [userSeq, setUserSeq] = useRecoilState(userSequence);

  function isLoggedIn() {
    console.log("Router : ", userSeq);

    return userSeq > 0;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/landing" replace />} />
        <Route path="/landing" element={<P.Landing />} />
        <Route path="/login" element={<P.Login />} />
        <Route path="/register">
          <Route index element={<P.Register />} />
          <Route path="profile" element={<P.Profile />} />
        </Route>
        {isLoggedIn() ? (
          <>
            <Route path="/home" element={<P.Home />} />
            <Route path="/mypage/*" element={<P.Mypage />} />
            <Route path="/bank/*" element={<P.Bank />} />
            <Route path="/invest/*" element={<P.Invest />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/landing" replace />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
