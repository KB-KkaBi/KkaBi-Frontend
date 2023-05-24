import { Button, PaperLayout, TextField } from "@/@components";
import { userNickname } from "@/recoil/User";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import * as S from "./styles/editnicknameStyle";

const EditNickname = () => {
  const navigate = useNavigate();
  const [editedNickname, setEditedNickname] = useRecoilState(userNickname);

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedNickname(e.target.value);
  };

  //닉네임 업데이트할 때 할 함수
  const handleNicknameEditClicked = useCallback(async () => {
    /**
     * 닉네임을 전송한다.
     * 결과로 status = 200이 오면 마이페이지로
     * 변경이 안되면 에러 모달 띄어주고 다시 마이페이지로 가기
     * */
    //console.debug("테스트");
  }, []);
  return (
    <>
      <PaperLayout
        handleClick={() => {
          navigate(-1);
        }}>
        <S.EditNicknameFormContainer
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            handleNicknameEditClicked();
          }}>
          <S.NickNameInputWrapper>
            <p>NICKNAME</p>
            <TextField
              placeholder="변경하고싶은 닉네임을 적어주세요"
              value={editedNickname}
              onChange={handleNicknameChange}
            />
          </S.NickNameInputWrapper>
          <Button color="primary" type="submit">
            확인
          </Button>
        </S.EditNicknameFormContainer>
      </PaperLayout>
    </>
  );
};

export default EditNickname;
