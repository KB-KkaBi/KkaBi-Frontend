import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as P from "@/pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<P.Login />} />
        <Route path="/home" element={<P.Home />} />
        <Route path="/mypage" element={<P.MyPage />} />
        <Route path="/bank" element={<P.Bank />} />
        <Route path="/invest" element={<P.Invest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
