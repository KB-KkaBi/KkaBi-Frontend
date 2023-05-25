import * as B from ".";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/editnickname" element={<B.EditNickname />} />
      <Route path="/editpassword" element={<B.EditPassword />} />
      <Route path="/quiznote" element={<B.QuizNote />} />
      <Route path="/ranklist" element={<B.RankList />} />
      <Route path="/" element={<B.MypageMain />} />
    </Routes>
  );
};

export default Router;
