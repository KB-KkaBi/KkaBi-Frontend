import { Button, Modal, PaperLayout, TextField } from "@/@components";
import React, { useCallback, useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import ago from "../../assets/icon/characterAgo.svg";
import bibi from "../../assets/icon/characterBb.svg";
import kiki from "../../assets/icon/characterKiki.svg";
import kolly from "../../assets/icon/characterKolly.svg";
import lamu from "../../assets/icon/characterLamu.svg";

import { postRegister } from "@/api/register";
import { registerEmail, registerPassword, registerSelectedCharacter } from "@/recoil/Register";
import { userNickname } from "@/recoil/User";
import { useRecoilState, useRecoilValue } from "recoil";

const Profile = () => {
  const navigate = useNavigate();

  const email = useRecoilValue(registerEmail);
  const password = useRecoilValue(registerPassword);

  const [isSuccess, setIsSuccess] = useState(false); // 회원가입 성공여부
  const [selectedCharacter, setSelectedCharacter] = useRecoilState(registerSelectedCharacter); // 사용자가 선택한 캐릭터 이름
  const [nickName, setNickName] = useRecoilState(userNickname);

  const [modalOpen, setModalOpen] = useState(false); //Register Success Modal Open

  const handleModalOpen = useCallback(() => {
    setModalOpen(true);
  }, []);
  const handleModalClose = useCallback(() => {
    setModalOpen(false);
  }, []);

  const handleSelectCharacter = useCallback((character: string) => {
    setSelectedCharacter(character);
  }, []);

  const handleNickNameInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.slice(0, 4); // 입력값의 최대 길이를 4로 제한
    setNickName(value);
  }, []);

  useEffect(() => {
    setSelectedCharacter("");
  }, []);

  //테스트하기
  // useEffect(() => {
  //   console.debug("selectedCharacter", selectedCharacter);
  //   console.debug("nickName~", nickName);
  // }, [selectedCharacter, nickName]);

  const character = [
    { key: 1, characterName: "루나키키", src: kiki },
    { key: 2, characterName: "멜랑콜리", src: kolly },
    { key: 3, characterName: "롤로라무", src: lamu },
    { key: 4, characterName: "심콩비비", src: bibi },
    { key: 5, characterName: "포스아거", src: ago },
  ];

  const { mutate: registerPost } = useMutation(postRegister, {
    onSuccess: () => {
      setIsSuccess(true);
      handleModalOpen();
    },
    onError: (error) => {
      console.debug(error);
      handleModalOpen();
    },
  });

  //할때 할 함수
  const handleRegisterlicked = () => {
    email &&
      registerPost({
        character: selectedCharacter,
        email: email,
        nickname: nickName,
        pw: password,
      });

    console.debug("회원가입 버튼 눌렀음");
  };

  return (
    <PaperLayout
      handleClick={() => {
        navigate("./register");
      }}>
      <ProfileRootContainer>
        <CharacterTextContainer>
          <p>나의 깨비를 선택해주세요!</p>
          <CharacterWrapper>
            {character.map((item) => {
              return (
                <div
                  key={item.key}
                  className={`characterContainer 
                    ${selectedCharacter === item.characterName ? "select" : ""}`}
                  onClick={() => handleSelectCharacter(item.characterName)}>
                  <img className="characterImg" src={item.src} alt="test" />
                </div>
              );
            })}
          </CharacterWrapper>
        </CharacterTextContainer>
        <NickNameWrapper>
          <p>NickName</p>
          <TextField
            type="text"
            placeholder="닉네임을 입력해주세요(최대 4글자)"
            inputProps={{
              maxLength: 4, // 최대 길이를 4로 설정
            }}
            onChange={handleNickNameInput}
          />
        </NickNameWrapper>
        <Button disabled={!nickName || !selectedCharacter} onClick={handleRegisterlicked}>
          확인
        </Button>
        <Modal open={modalOpen} onClose={handleModalClose}>
          <ModalWrapper>
            {isSuccess ? (
              <p className="text">회원가입 완료되었습니다</p>
            ) : (
              <p className="text">회원가입 실패했습니다</p>
            )}
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

export const ProfileRootContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.fonts.text}
`;

export const CharacterTextContainer = styled.div`
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
    cursor: pointer;

    &:hover {
      border: 1px solid #ecab3d;
      box-shadow: 0px 0px 20px #fcaf16;
    }

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
      //filter: drop-shadow(0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25));
      box-shadow: 0px 0px 20px #fcaf16;
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
