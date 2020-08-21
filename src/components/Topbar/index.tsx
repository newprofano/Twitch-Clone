import React from "react";
import {
  Container,
  NavLogo,
  LeftGroup,
  Separator,
  NavIcon,
  SearchInput,
  RightGroup,
  NavIconButton,
  MyChannelLogo,
  SearchInputContainer,
  SearchIcon,
  CrownInput,
  SignInput,
  MessageInput,
  IconButton,
} from "./styles";

import NavButton from "../NavButton";

const Topbar: React.FC = () => {
  return (
    <Container>
      <LeftGroup>
        <NavLogo />
        <NavButton text="Seguindo" />
        <NavButton text="Procurar" />
        <Separator />
        <NavButton text="Esports" />
        <NavButton text="Música" />
        <NavIcon />
      </LeftGroup>
      <SearchInputContainer>
        <SearchInput placeholder="Buscar" />
        <SearchIcon color="#3A3A3D" />
      </SearchInputContainer>

      <RightGroup>
        <CrownInput />
        <SignInput />
        <MessageInput />
        <NavIconButton>
          <IconButton />
          Comprar Bits
        </NavIconButton>
        <MyChannelLogo />
      </RightGroup>
    </Container>
  );
};

export default Topbar;
