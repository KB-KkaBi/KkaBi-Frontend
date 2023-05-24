import { Route, Routes } from "react-router-dom";
import * as B from ".";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<B.BankMain />} />
      <Route path="/create-new-account" element={<B.CreateNewAccount />} />
      <Route path="/create-new-account-name" element={<B.CreateNewAccountName />} />{" "}
      {/* <Route path="/my-account" element={<B.MyAccountMain />} />
       */}
      <Route path="/my-account/*">
        <Route path="" element={<B.MyAccountMain />} />
        <Route path="withdraw" element={<B.Withdraw />} />
        <Route path="deposit" element={<B.Deposit />} />
        <Route path="account-log" element={<B.AccountLog />} />
      </Route>
    </Routes>
  );
};

export default Router;
