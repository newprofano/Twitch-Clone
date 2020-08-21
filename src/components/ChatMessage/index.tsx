import React from "react";

import {
  Container,
  SubIcon,
  VipIcon,
  ModeratorIcon,
  PrimeIcon,
} from "./styles";
interface MessageProps {
  nickname: string;
  message: string;
  isModerator?: boolean;
  isPrime?: boolean;
  isVip?: boolean;
  isSub?: boolean;
}

const colors = ["blue", "red", "purple", "green", "white", "black", "orange"];

const ChatMessage: React.FC<MessageProps> = ({
  nickname,
  message,
  isModerator,
  isPrime,
  isVip,
  isSub,
}) => {
  return (
    <Container>
      <div>
        {isSub ? <SubIcon /> : ""}
        {isVip ? <VipIcon /> : ""}
        {isModerator ? <ModeratorIcon /> : ""}
        {isPrime ? <PrimeIcon /> : ""}
        <strong
          style={{ color: colors[Math.floor(Math.random() * colors.length)] }}
        >
          {nickname}
        </strong>

        <span>: {message}</span>
      </div>
    </Container>
  );
};

export default ChatMessage;
