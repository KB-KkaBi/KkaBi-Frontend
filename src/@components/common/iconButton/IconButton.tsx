import { ReactNode } from "react";
import { ButtonContainer } from "./style";

type PropsWithChildren<P> = P & {
  children?: ReactNode;
};

export type IconButtonProps = {
  width?: number;
  height?: number;
};

export default function IconButton(props: PropsWithChildren<IconButtonProps>) {
  const { children, ...args } = props;
  return <ButtonContainer {...args}>{props.children}</ButtonContainer>;
}
