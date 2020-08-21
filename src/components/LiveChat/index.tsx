import React, { useRef, useEffect } from "react";
import {
  Container,
  ChatHeader,
  HideIcon,
  UsersIcon,
  GiftContainer,
  FirstPlace,
  IconGift,
  IconContainer,
  LeftArrowIcon,
  RightArrowIcon,
  OthersGift,
  FakeToogle,
  ChatContainer,
  InputContainer,
  InputChat,
  EmojiIcon,
  BitsIcon,
  IconsContainer,
  BallIcon,
  ConfigIcon,
  ChatButton,
  IconNumber,
} from "./styles";

import ChatMessage from "../ChatMessage";

const LiveChat = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messageRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messageRef]);

  return (
    <Container>
      <ChatHeader>
        <HideIcon />
        <span>chat da transmissão</span>
        <UsersIcon />
      </ChatHeader>

      <GiftContainer>
        <LeftArrowIcon />
        <FirstPlace>
          <IconGift />
          <div>
            <span>profano</span>
            <IconContainer>
              <IconGift className="small" />
              <span className="desc">6</span>
            </IconContainer>
          </div>
        </FirstPlace>

        <OthersGift>
          <div>
            <IconGift className="second" />
            <span>New</span>
            <IconGift className="small" />
            <span className="desc">2</span>
          </div>
          <div>
            <IconGift className="last" />
            <span>Christian</span>
            <IconGift className="small" />
            <span className="desc">1</span>
          </div>
        </OthersGift>
        <RightArrowIcon />
      </GiftContainer>
      <FakeToogle />

      <ChatContainer ref={messageRef}>
        <ChatMessage
          nickname="Player Profano"
          message="Oque acontece se eu quiser mandar uma mensagem muito grande nesse chat só para ver como ele se comporta e como ele vai quebrar a mensagem, para ver se não vai bugar tudo ou vai ficar bem clean"
          isSub
          isVip
        />
        <ChatMessage
          nickname="Mero Jogador"
          message="é, ficou bem nice Christian VÉRI UÉL"
        />
        <ChatMessage
          nickname="Christian"
          message="i have all tags"
          isSub
          isPrime
          isVip
          isModerator
        />
        <ChatMessage nickname="PROFANO" isPrime message="BRABU" />
        <ChatMessage nickname="Random" isVip message="xsjbswhsbw" />
        <ChatMessage nickname="Random" isModerator isSub message="xsjbswhsbw" />
        <ChatMessage nickname="Random" message="xsjbswhsbw" />
        <ChatMessage nickname="Random" message="xsjbswhsbw" />
        <ChatMessage nickname="Random" message="xsjbswhsbw" />
        <ChatMessage
          nickname="Random"
          isPrime
          isModerator
          message="xsjbswhsbw"
        />
        <ChatMessage nickname="Random" isVip message="xsjbswhsbw" />
        <ChatMessage nickname="Random" message="xsjbswhsbw" />
        <ChatMessage nickname="Random" message="xsjbswhsbw" />
        <ChatMessage nickname="Random" message="xsjbswhsbw" />
        <ChatMessage nickname="Random" isSub message="xsjbswhsbw" />
        <ChatMessage nickname="Random" message="xsjbswhsbw" />
        <ChatMessage nickname="Random" isPrime message="xsjbswhsbw" />
        <ChatMessage nickname="Random" message="xsjbswhsbw" />
        <ChatMessage nickname="Random" isPrime message="xsjbswhsbw" />
        <ChatMessage nickname="Random" message="xsjbswhsbw" />
        <ChatMessage nickname="Random" message="xsjbswhsbw" />
        <ChatMessage nickname="Random" isModerator message="xsjbswhsbw" />
        <ChatMessage nickname="Random" message="xsjbswhsbw" />
        <ChatMessage nickname="Random" isSub isPrime message="xsjbswhsbw" />
        <ChatMessage nickname="Random" message="xsjbswhsbw" />
        <ChatMessage nickname="Random" message="xsjbswhsbw" />
        <ChatMessage
          nickname="Random"
          isPrime
          isSub
          isModerator
          isVip
          message="xsjbswhsbw"
        />
        <ChatMessage nickname="Random" message="xsjbswhsbw" />
        <ChatMessage nickname="Random" message="xsjbswhsbw" />
        <ChatMessage nickname="Random" message="xsjbswhsbw" />
        <ChatMessage nickname="KKKK" isSub message="xsjbswhsbw" />
      </ChatContainer>

      <InputContainer>
        <InputChat placeholder="Enviar uma mensagem" />

        <BitsIcon />
        <EmojiIcon />
      </InputContainer>

      <IconsContainer>
        <div>
          <BallIcon />
          <IconNumber>8.000</IconNumber>
        </div>
        <div>
          <ConfigIcon />
          <ChatButton>Chat</ChatButton>
        </div>
      </IconsContainer>
    </Container>
  );
};

export default LiveChat;
