import { TextFieldProps } from "@mui/material/TextField";
import * as I from "./style";

export default function Modal(props: TextFieldProps) {
  const { ...args } = props;
  return <I.CommonStyledInput {...args}></I.CommonStyledInput>;
}
