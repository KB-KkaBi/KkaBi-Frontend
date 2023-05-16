import * as React from "react";
import { ButtonProps } from "@mui/material/Button";
import { CommonStyledButton } from "./style";

export default function CommonButton<C extends React.ElementType>(props: ButtonProps<C, { component?: C }>) {
  const { children, ...args } = props;
  return <CommonStyledButton {...args}>{children}</CommonStyledButton>;
}
