import { Route, Routes } from "react-router-dom";
import * as I from ".";

const Router = () => {
  return (
    <Routes>
      <Route path="/select-treasure" element={<I.SelectTreasure />} />
      <Route path="/select-amount" element={<I.SelectTreasureCnt />} />
      {/* <Route path="/select-amount" element={<I.SelectTreasureCnt />} /> */}
    </Routes>
  );
};

export default Router;
