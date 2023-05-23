import * as B from ".";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<B.SelectAccountMain />} />
      <Route path="/create-new-account" element={<B.CreateNewAccount />} />
      <Route path="/create-new-account-name" element={<B.CreateNewAccountName />} />
    </Routes>
  );
};

export default Router;
