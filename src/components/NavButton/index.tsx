import React from "react";

import { Button } from "./styles";
interface ButtonProps {
  text: string;
}

const NavButton: React.FC<ButtonProps> = ({ text }) => {
  return <Button>{text}</Button>;
};

export default NavButton;
