import React from "react";
import { CardStyled } from "./style";
interface CardProps {
  color?: any;
}

export const Card: React.FC<CardProps> = (props) => {
  const { color } = props;
  return <CardStyled color={color}>{props.children}</CardStyled>;
};
