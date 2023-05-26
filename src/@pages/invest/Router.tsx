import { Route, Routes } from "react-router-dom";
import * as I from ".";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<I.SelectMyAccount />} />
      <Route path="/select-treasure" element={<I.SelectTreasure />} />
      <Route path="/select-amount" element={<I.SelectTreasureCnt />} />
      <Route path="/quiz" element={<I.Quiz />} />
    </Routes>
  );
};

export default Router;
