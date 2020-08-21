import styled from "styled-components";
import ImageMage from "../../assets/MageWings.jpg";

import { Verified } from "styled-icons/octicons";
import { Star, User } from "styled-icons/boxicons-regular";
import { Heart } from "styled-icons/boxicons-solid";
import { Notifications } from "styled-icons/material";
import { KeyboardArrowDown } from "@styled-icons/material-sharp";
import { ShareAlternative } from "@styled-icons/entypo";
import { MoreVertical } from "styled-icons/evaicons-solid/";

export const Container = styled.div`
  grid-area: CC;

  display: flex;

  flex-direction: column;

  background-color: rgb(14, 14, 16);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 1px;
  }
`;

export const FakeVideoContainer = styled.div`
  display: flex;
  flex: 1;
  background-image: url(${ImageMage});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 60vh;
  width: 100%;
  background-color: black;

  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-left: 1px solid black;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    align-items: center;
  }
  margin-left: 10px;
`;
export const BottomVideoContainer = styled.div`
  display: flex;
  flex: 1;
  margin: 10px;
  margin-top: 22px;
  margin-right: 20px;
  align-items: center;

  > div {
    display: flex;
    flex: 1;
    justify-content: space-between;
  }
`;

export const ProfileImage = styled.img`
  height: 72px;
  width: 72px;
  border-radius: 50%;
  background-color: black;
  border: 2px solid purple;
  margin-left: 10px;

  &.bottom {
    margin-left: 0;
    margin-top: 23px;
    width: 96px;
    height: 96px;
    border: none;
  }
`;
export const ChannelName = styled.h3`
  color: white;
  font-size: 17px;
`;
export const IconVerificad = styled(Verified)`
  color: rgb(169, 112, 255);
  width: 12px;
  height: 12px;
`;
export const LiveName = styled.h3`
  color: white;
  font-size: 15px;
  margin-top: 5px;
`;
export const GameName = styled.span`
  color: rgb(102, 69, 151);
  margin-top: 5px;
  margin-right: 7px;
  font-size: 17px;

  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
export const ButtonTag = styled.button`
  align-items: center;
  height: 20px;
  width: 70px;
  background-color: rgb(50, 50, 52);
  color: rgb(156, 156, 157);
  margin-right: 5px;
  border-radius: 30px;
  font-weight: bold;
  font-size: 11px;
  margin-top: 7px;

  cursor: pointer;

  &:hover {
    background-color: rgb(62, 62, 64);
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    &.bottom {
      margin-top: 10px;
    }
  }
  margin-left: 10px;
`;
export const FollowIcon = styled(Heart)`
  width: 40px;
  height: 30px;

  border-radius: 5px;
  padding: 5px;

  background-color: rgba(255, 255, 255, 0.2);
  color: var(--white);

  cursor: pointer;
  &:hover {
    background-color: red;
  }
`;
export const AlertIcon = styled(Notifications)`
  width: 40px;
  height: 30px;
  margin-left: 10px;
  border-radius: 5px;
  padding: 5px;

  background-color: rgba(255, 255, 255, 0.2);
  color: var(--white);

  cursor: pointer;

  &:hover {
    color: yellow;
  }
`;
export const SubButtom = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  height: 30px;
  border-radius: 5px;
  background-color: rgb(145, 71, 255);
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgb(166, 107, 255);
  }
`;
export const StarIcon = styled(Star)`
  width: 40px;
  height: 30px;

  border-radius: 5px;
  padding: 5px;
  color: var(--white);
`;
export const SubText = styled.span`
  color: var(--white);
  font-weight: bold;
  font-size: 12px;
`;
export const ArrowDownIcon = styled(KeyboardArrowDown)`
  width: 40px;
  height: 30px;

  color: var(--white);
`;
export const UsersIcon = styled(User)`
  width: 22px;
  height: 22px;

  color: red;
`;
export const UsersCont = styled.span`
  color: rgb(174, 62, 61);
  font-size: 14px;
  font-weight: bold;
  margin-right: 10px;
`;
export const LiveTime = styled.span`
  color: var(--white);
  font-size: 14px;
  margin-right: 10px;
`;
export const ShareIcon = styled(ShareAlternative)`
  width: 20px;
  height: 20px;
  padding: 1px;
  color: var(--white);
  margin-right: 10px;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
export const MoreIcon = styled(MoreVertical)`
  width: 22px;
  height: 22px;

  color: var(--white);
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const BottomDesc = styled.div`
  display: flex;
  flex: 1;
  background-color: var(--grey-2);
  align-items: flex-start;
  padding: 20px;
  margin: 20px;
`;
export const About = styled.h3`
  color: var(--white);
  font-size: 24px;
  align-self: flex-start;
  padding: 20px;
`;
export const Desc = styled.span`
  color: rgba(255, 255, 255, 0.9);
  padding-left: 20px;
  text-align: justify;
`;

export const BottomImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > span {
    color: rgba(255, 255, 255, 0.9);
    margin-top: 5px;
  }
  > strong {
    margin-top: 3px;
    color: rgba(255, 255, 255, 0.9);
    font-weight: normal;
    font-size: 13px;
  }
`;

export const BottomDescContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
