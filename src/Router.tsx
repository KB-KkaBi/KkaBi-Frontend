import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import * as P from "@/@pages";

const Router = () => {
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
        <Route path="/home" element={<P.Home />} />
        <Route path="/mypage">
          <Route index element={<P.MyPage />} />
          <Route path="ranklist" element={<P.RankList />} />
        </Route>
        <Route path="/bank" element={<P.Bank />} />
        <Route path="/invest" element={<P.Invest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
