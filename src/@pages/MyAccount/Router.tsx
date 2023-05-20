import * as B from ".";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<B.MyAccountMain />} />
      <Route path="/deposit" element={<B.Deposit />} />
    </Routes>
  );
};

export default Router;
