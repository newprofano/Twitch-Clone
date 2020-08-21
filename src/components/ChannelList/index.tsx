import React from "react";
import {
  Container,
  ChannelFooter,
  ChannelInput,
  InputContainer,
  IconSearch,
  TagContainer,
  IconHide,
  Tag,
  ScrollContent,
} from "./styles";

import ChannelButton from "../ChannelButton";

interface ChannelTagProps {
  text: string;
}

const ChannelTag: React.FC<ChannelTagProps> = ({ text }) => {
  return <Tag>{text}</Tag>;
};

const ChannelList: React.FC = () => {
  return (
    <Container>
      <ScrollContent>
        <TagContainer>
          <ChannelTag text="Canais Seguidos" />
          <IconHide />
        </TagContainer>

        <ChannelButton name="Christian Furlan" desc="Programing" qtdeP={27} />
        <ChannelButton name="Github/newprofano" desc="Coding" qtdeP={5} />
        <ChannelButton name="ReactJS" desc="s2" qtdeP={154.215} />
        <ChannelButton name="TypeScrip" desc="s2" qtdeP={231.123} />
        <ChannelButton name="NodeJS" desc="<3" qtdeP={111.111} />
        <ChannelButton name="React Native " desc="*.*" qtdeP={512.145} />
        <ChannelButton name="VS Code" desc="♥" qtdeP={29} />
        <ChannelButton name="xD " desc="xD" qtdeP={29} />

        <ChannelFooter>Mostrar mais</ChannelFooter>
        <TagContainer>
          <ChannelTag text="Canais Recomendados" />
        </TagContainer>

        <ChannelButton name="Chris" desc="Programing" qtdeP={83.198} />
        <ChannelButton name="JS" desc="Funny" qtdeP={964.021} />
        <ChannelButton name="New" desc="Valorant" qtdeP={33} />
        <ChannelButton name="Last" desc="Done" qtdeP={82} />

        <ChannelFooter>Mostrar mais</ChannelFooter>
      </ScrollContent>
      <InputContainer>
        <IconSearch />
        <ChannelInput placeholder="Buscar amigos para adicionar" />
      </InputContainer>
    </Container>
  );
};

export default ChannelList;
