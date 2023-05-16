import styled from "styled-components";
import Modal from "@mui/material/Modal";

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
