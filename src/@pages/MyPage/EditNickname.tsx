import { Button, Modal, PaperLayout, TextField } from "@/@components";
import { updateNickname } from "@/api/mypage";
import { userNickname } from "@/recoil/User";
import React, { useCallback, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import * as S from "./styles/editnicknameStyle";

const EditNickname = () => {
  const navigate = useNavigate();
  const [editedNickname, setEditedNickname] = useRecoilState(userNickname);
  const [open, setOpen] = useState(false); //Modal Open

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedNickname(e.target.value);
  };

  const handleModalOpen = useCallback(() => {
    setOpen(true);
  }, []);
  const handleModalClose = useCallback(() => {
    setOpen(false);
  }, []);

  const { mutate: changePost } = useMutation(updateNickname, {
    onSuccess: (response) => {
      navigate("/mypage");
    },
    onError: (error) => {
      //console.log(error);

      handleModalOpen();
    },
  });

  /**
   * 닉네임을 전송한다.
   * 결과로 status = 200이 오면 마이페이지로
   * 변경이 안되면 에러 모달 띄어주고 다시 마이페이지로 가기
   * */
  //console.debug("테스트");

  //닉네임 업데이트할 때 할 함수
  const handleNicknameEditClicked = () => {
    if (!editedNickname) {
      handleModalOpen();
    } else {
      changePost({ nickname: editedNickname });
    }
  };

  return (
    <>
      <PaperLayout
        handleClick={() => {
          navigate("/mypage");
        }}>
        <S.EditNicknameRootContainer>
          <S.NickNameInputWrapper>
            <p>NICKNAME</p>
            <TextField
              placeholder="변경하고싶은 닉네임을 적어주세요"
              value={editedNickname}
              onChange={handleNicknameChange}
            />
          </S.NickNameInputWrapper>
          <Button color="primary" type="button" onClick={handleNicknameEditClicked}>
            확인
          </Button>
          <Modal open={open} onClose={handleModalClose}>
            <S.ModalWrapper>
              <p className="text">최소 1글자 이상 입력해야합니다.</p>
              <Button onClick={handleModalClose}>확인</Button>
            </S.ModalWrapper>
          </Modal>
        </S.EditNicknameRootContainer>
      </PaperLayout>
    </>
  );
};

export default EditNickname;
