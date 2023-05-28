import Modal from "@mui/material/Modal";
import styled from "styled-components";

export const CommonStyledModal = styled(Modal)`
  && {
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ModalContainer = styled.div`
  background-color: ${(props) => props.theme.colors.whiteYellow};
  border-radius: 4rem;
  width: 49rem;
  height: 33.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CommonGuideModal = styled(Modal)`
  && {
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: rgba(0, 0, 0, 0.6);
    outline: none;
    user-select: none;
    pointer-events: none;
  }
`;

export const GuideModalContainer = styled.div`
  background-color: transparent;
  width: 0;
  height: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: none;
`;
