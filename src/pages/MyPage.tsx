import React from "react";
import { Button, Modal } from "@/@components";
import styled from "styled-components";

const MyPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <h1>My Page</h1>
      <Button onClick={handleOpen}>내 정보 수정</Button>
      <Modal open={open} onClose={handleClose}>
        <ModalContent>
          <Button>닉네임 수정</Button>
          <Button>비밀번호 수정</Button>
        </ModalContent>
      </Modal>
    </div>
  );
};

// 예시입니다. 추후 작업하실 분이 styled.ts에 처리하고 제거해주세요!
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

export default MyPage;
