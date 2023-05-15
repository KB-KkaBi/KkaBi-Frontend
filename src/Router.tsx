import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import * as P from "@/pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<P.Login />} />
        <Route path="/home" element={<P.Home />} />
        <Route path="/mypage" element={<P.MyPage />} />
        <Route path="/bank" element={<P.Bank />} />
        <Route path="/invest" element={<P.Invest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
