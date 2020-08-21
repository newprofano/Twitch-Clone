import React from "react";

import LogoImage from "../../assets/magaTOP.png";

import {
  Container,
  FakeVideoContainer,
  LeftContainer,
  BottomVideoContainer,
  ProfileImage,
  ChannelName,
  IconVerificad,
  LiveName,
  GameName,
  ButtonTag,
  RightContainer,
  FollowIcon,
  AlertIcon,
  SubButtom,
  ShareIcon,
  StarIcon,
  SubText,
  ArrowDownIcon,
  UsersIcon,
  UsersCont,
  LiveTime,
  MoreIcon,
  BottomDesc,
  About,
  Desc,
  BottomImageContainer,
  BottomDescContainer,
} from "./styles";

const LiveContent = () => {
  return (
    <Container>
      <FakeVideoContainer />
      <BottomVideoContainer>
        <ProfileImage src={LogoImage} />
        <div>
          <LeftContainer>
            <ChannelName>
              Christian <IconVerificad />
            </ChannelName>
            <LiveName>CODANDO, ESTUDANDO E RELAXANDO</LiveName>
            <div>
              <GameName>ReactJS</GameName>
              <ButtonTag>JS</ButtonTag>
              <ButtonTag>TS</ButtonTag>
            </div>
          </LeftContainer>
          <RightContainer>
            <div>
              <FollowIcon />
              <AlertIcon />
              <SubButtom>
                <StarIcon />
                <SubText>Inscrever-se</SubText>
                <ArrowDownIcon />
              </SubButtom>
            </div>
            <div className="bottom">
              <UsersIcon />
              <UsersCont>78.756</UsersCont>
              <LiveTime>3:23:12</LiveTime>
              <ShareIcon />
              <MoreIcon />
            </div>
          </RightContainer>
        </div>
      </BottomVideoContainer>

      <BottomDesc>
        <BottomImageContainer>
          <ProfileImage src={LogoImage} className="bottom" />
          <span>10</span>
          <strong>seguidores</strong>
        </BottomImageContainer>
        <BottomDescContainer>
          <About>Sobre Christian</About>
          <Desc>
            Bom, Aqui é onde a gelerinha gosta de enrolar digitando várias
            coisas relevantes,mas eu só vou dizer isso: o importante é oque
            importa, se não tivermos expectativas não teremos decepções, se não
            tentarmos não falharemos, mas são essas coisas que nos fazem um ser
            humano , sempre que você percebe o erro você pode concerta-lo, e
            logo quando menos esperar, vai ter superado algo que na sua cabeça
            era inalcançavel.
          </Desc>
        </BottomDescContainer>
      </BottomDesc>
    </Container>
  );
};

export default LiveContent;
