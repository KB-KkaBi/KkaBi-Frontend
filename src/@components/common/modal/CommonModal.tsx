import * as React from "react";
import { ModalProps } from "@mui/material/Modal";
import * as M from "./style";

export default function Modal<C extends React.ElementType>(props: ModalProps<C, { component?: C }>) {
  const { children, ...args } = props;
  return (
    <M.CommonStyledModal {...args}>
      <M.ModalContainer>{children}</M.ModalContainer>
    </M.CommonStyledModal>
  );
}
