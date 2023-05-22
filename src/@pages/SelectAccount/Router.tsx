import * as B from ".";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<B.SelectAccountMain />} />
    </Routes>
  );
};

export default Router;
