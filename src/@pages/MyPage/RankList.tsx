import { PaperLayout } from "@/@components";
import { useNavigate } from "react-router-dom";
import rank1 from "../../assets/icon/rank1.svg";
import rank2 from "../../assets/icon/rank2.svg";
import rank3 from "../../assets/icon/rank3.svg";
import rank4 from "../../assets/icon/rank4.svg";
import rank5 from "../../assets/icon/rank5.svg";
import rank6 from "../../assets/icon/rank6.svg";
import * as S from "./styles/ranklistStyle";

const RankList = () => {
  const navigate = useNavigate();
  const RankInfoList = [
    { id: 1, price: 10000, imgUrl: rank6 },
    { id: 2, price: 15000, imgUrl: rank5 },
    { id: 3, price: 20000, imgUrl: rank4 },
    { id: 4, price: 25000, imgUrl: rank3 },
    { id: 5, price: 30000, imgUrl: rank2 },
    { id: 6, price: 40000, imgUrl: rank1 },
  ];
  return (
    <>
      <PaperLayout
        handleClick={() => {
          navigate(-1);
        }}>
        <S.RankListRootContainer>
          <S.TitleWrapper>
            <p className="text">랭킹</p>
          </S.TitleWrapper>
          <S.RankInfoContainer>
            {RankInfoList.map((item) => {
              return (
                <S.EachRankContainer>
                  <S.RankImg src={item.imgUrl} alt="rankImg" />
                  <S.RankText>{item.price.toLocaleString()}원 이상</S.RankText>
                </S.EachRankContainer>
              );
            })}
          </S.RankInfoContainer>
        </S.RankListRootContainer>
      </PaperLayout>
    </>
  );
};

export default RankList;
