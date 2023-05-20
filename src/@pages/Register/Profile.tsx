import { Button, PaperLayout, TextField } from "@/@components";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Modal } from "@/@components";

import ago from "../../assets/icon/characterAgo.svg";
import bibi from "../../assets/icon/characterBb.svg";
import kiki from "../../assets/icon/characterKiki.svg";
import kolly from "../../assets/icon/characterKolly.svg";
import lamu from "../../assets/icon/characterLamu.svg";

const Profile = () => {
  const navigate = useNavigate();
  const [selectedCharacter, setSelectedCharacter] = useState("루나키키"); // 사용자가 선택한 캐릭터 이름
  const [nickName, setNickName] = useState(""); // 나중에 recoil로
  const [open, setOpen] = useState(false); //Modal Open

  const handleModalOpen = useCallback(() => {
    setOpen(true);
  }, []);
  const handleModalClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleSelectCharacter = useCallback((character: string) => {
    setSelectedCharacter(character);
  }, []);
  const handleNickNameInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  }, []);

  //테스트하기
  useEffect(() => {
    console.log("selectedCharacter", selectedCharacter);
  }, [selectedCharacter]);

  const character = [
    { key: 1, characterName: "루나키키", src: kiki },
    { key: 2, characterName: "멜랑콜리", src: kolly },
    { key: 3, characterName: "롤로라무", src: lamu },
    { key: 4, characterName: "심콩비비", src: bibi },
    { key: 5, characterName: "포스아거", src: ago },
  ];

  return (
    <PaperLayout
      handleClick={() => {
        navigate(-1);
      }}>
      <ProfileRootContainer>
        <CharacterTextWrapper>
          <p>나의 깨비를 선택해주세요!</p>
          <CharacterWrapper>
            {character.map((item) => {
              return (
                <div
                  className={`characterContainer 
                    ${selectedCharacter === item.characterName ? "select" : ""}`}
                  onClick={() => handleSelectCharacter(item.characterName)}>
                  <img className="characterImg" src={item.src} alt="test" />
                </div>
              );
            })}
          </CharacterWrapper>
        </CharacterTextWrapper>
        <NickNameWrapper>
          <p>NickName</p>
          <TextField placeholder="닉네임을 입력해주세요" value={nickName} onChange={handleNickNameInput} />
        </NickNameWrapper>
        <Button onClick={handleModalOpen}>확인</Button>
        <Modal open={open} onClose={handleModalClose}>
          <ModalWrapper>
            <p className="text">회원가입 완료되었습니다</p>
            <Button
              onClick={() => {
                navigate("/landing");
              }}>
              확인
            </Button>
          </ModalWrapper>
        </Modal>
      </ProfileRootContainer>
    </PaperLayout>
  );
};

export default Profile;

export const ProfileRootContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.fonts.text}
`;

export const CharacterTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 13rem;
`;

export const CharacterWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 2.5rem;
  margin-top: 2rem;

  .characterContainer {
    width: 23rem;
    height: 23rem;
    background-color: #fcf9eb;
    border-radius: 4rem;
    display: flex;
    justify-content: center;
    //align-items: center;

    &:first-child {
      margin-right: 1rem;
      margin-left: 0rem;
    }
    margin-right: 1rem;
    margin-left: 1rem;
    &:last-child {
      margin-right: 0rem;
      margin-left: 1rem;
    }
    &.select {
      border: 1px solid #ecab3d;
      filter: drop-shadow(0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25));
    }
    .characterImg {
      /* width: 20rem;
      height: 20rem; */
    }
  }
`;

export const NickNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.fonts.text}
  text-align: center;

  .text {
    margin-bottom: 3rem;
  }
`;