import { ModalProps } from "@mui/material/Modal";
import * as React from "react";
import * as M from "./style";

export default function Modal<C extends React.ElementType>(props: ModalProps<C, { component?: C }>) {
  const { children, ...args } = props;
  return (
    <M.CommonGuideModal {...args}>
      <M.GuideModalContainer>{children}</M.GuideModalContainer>
    </M.CommonGuideModal>
  );
}
