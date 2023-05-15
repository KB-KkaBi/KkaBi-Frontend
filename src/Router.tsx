import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as P from "@/pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<P.Home />} />
        <Route path="/mypage" element={<P.MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
