import * as P from "@/@pages";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/landing" replace />} />
        <Route path="/landing" element={<P.Landing />} />
        <Route path="/login" element={<P.Login />} />
        <Route path="/register" element={<P.Register />} />
        <Route path="/home" element={<P.Home />} />
        <Route path="/mypage" element={<P.MyPage />} />
        <Route path="/bank" element={<P.Bank />} />
        <Route path="/invest" element={<P.Invest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
