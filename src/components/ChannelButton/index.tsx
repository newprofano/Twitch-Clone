import React from "react";
import {
  Container,
  UserChannel,
  Avatar,
  CircleRed,
  Qtde,
  ChannelOnInfo,
} from "./styles";

//channel
interface ChannelProps {
  name: string;
  desc: string;
  qtdeP: number;
}

const ChannelButton: React.FC<ChannelProps> = ({ name, desc, qtdeP }) => {
  return (
    <Container>
      <UserChannel>
        <Avatar />
        <div>
          <h3>{name}</h3>
          <h4>{desc}</h4>
        </div>
        <ChannelOnInfo>
          <CircleRed />
          <Qtde>{qtdeP}</Qtde>
        </ChannelOnInfo>
      </UserChannel>
    </Container>
  );
};
//channelList

export default ChannelButton;
