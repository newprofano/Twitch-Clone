import styled from "styled-components";
import { MoreHoriz } from "styled-icons/material";
import { Search } from "styled-icons/evaicons-solid";
import { VipCrown2 } from "styled-icons/remix-line";

import { Notifications } from "styled-icons/material-outlined";
import { MessageAlt } from "styled-icons/boxicons-regular";
import { Twitch } from "styled-icons/fa-brands";

import { Ghost } from "styled-icons/boxicons-solid";

export const Container = styled.div`
  grid-area: TN;

  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.5);
  background-color: var(--grey-2);
`;

export const NavLogo = styled(Twitch)`
  margin-left: 10px;
  color: rgb(169, 112, 255);
  width: 27px;
  height: 27px;
  flex-shrink: 0;
`;
export const IconButton = styled(Ghost)`
  width: 18px;
  height: 18px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const LeftGroup = styled.div`
  display: flex;
  width: 29vw;
  align-items: center;
  justify-content: space-between;

  > img {
    width: 50px;
    height: 40px;
  }
`;

export const CrownInput = styled(VipCrown2)`
  width: 18px;
  height: 18px;
  color: var(--nav-button-color);
  border-radius: 4px;
  margin-right: 15px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const MessageInput = styled(MessageAlt)`
  width: 18px;
  height: 18px;
  color: var(--nav-button-color);
  border-radius: 4px;
  margin-right: 15px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const SignInput = styled(Notifications)`
  width: 20px;
  height: 20px;
  color: var(--nav-button-color);
  border-radius: 4px;
  margin-right: 15px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const Separator = styled.div`
  height: 30px;
  width: 0.2px;
  background-color: var(--grey-4);
`;
export const NavIcon = styled(MoreHoriz)`
  width: 27px;
  height: 27px;
  color: var(--nav-button-color);
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const SearchInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SearchInput = styled.input`
  height: 35px;
  width: 350px;
  border-right: 0.5px solid black;
  background-color: rgba(255, 255, 255, 0.15);
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;

  color: white;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
    padding-left: 15px;
  }
`;

export const SearchIcon = styled(Search)`
  background-color: #29292c;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;

  width: 30px;
  height: 35px;
  cursor: not-allowed;
`;
export const RightGroup = styled.div`
  display: flex;
  width: 20vw;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
`;
export const NavIconButton = styled.button`
  font-size: 12px;
  font-weight: 500;
  display: flex;
  background-color: rgba(255, 255, 255, 0.15);
  color: white;
  height: 30px;
  align-items: center;
  padding-right: 15px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
export const MyChannelLogo = styled.div`
  width: 30px;
  height: 30px;
  background-color: black;
  border-radius: 15px;
`;
