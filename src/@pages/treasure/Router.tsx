import * as B from ".";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<B.SelectMyAccount />} />
      <Route path="/select-treasure" element={<B.SelectTreasure />} />
      <Route path="/cnt" element={<B.SelectTreasureCnt />} />
    </Routes>
  );
};

export default Router;
