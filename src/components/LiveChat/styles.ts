import styled from "styled-components";
import {
  ArrowFromLeft,
  ChevronLeft,
  ChevronRight,
  Gift,
} from "styled-icons/boxicons-solid";

import { BowlingBall } from "styled-icons/boxicons-regular";

import { MoneyBillAlt } from "styled-icons/fa-regular";

import { Settings2 } from "styled-icons/remix-line";

import { Users, EmojiHappy } from "styled-icons/entypo";

export const Container = styled.div`
  grid-area: LV;

  display: flex;
  flex-direction: column;
  background-color: var(--grey-2);

  border-left: 1px solid rgba(255, 255, 255, 0.2);
`;

export const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  padding: 12px;
  > span {
    color: var(--white);
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const HideIcon = styled(ArrowFromLeft)`
  color: white;
  width: 22px;
  height: 22px;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
`;

export const UsersIcon = styled(Users)`
  color: white;
  width: 22px;
  height: 22px;
  padding: 2px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
`;

export const GiftContainer = styled.div`
  align-items: center;
  display: flex;
  height: 72px;
  justify-content: space-between;
  padding: 8px;

  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const LeftArrowIcon = styled(ChevronLeft)`
  color: white;
  width: 22px;
  height: 22px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
`;
export const RightArrowIcon = styled(ChevronRight)`
  color: white;
  width: 22px;
  height: 22px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
`;

export const FirstPlace = styled.div`
  display: flex;
  flex: 1;

  > div {
    display: flex;

    flex-direction: column;
    flex: 1;

    > span {
      color: var(--white);
      font-weight: bold;
      font-size: 14px;

      &.desc {
        color: grey;
      }
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;

  > span {
    color: gray;
    font-size: 15px;
    font-weight: bold;
    margin-left: 3px;
  }
`;

export const IconGift = styled(Gift)`
  color: gold;
  width: 40px;
  height: 40px;

  &.small {
    color: lightblue;
    width: 15px;
    height: 15px;
  }

  &.second {
    color: silver;
    width: 22px;
    height: 22px;
  }
  &.last {
    color: chocolate;
    width: 22px;
    height: 22px;
  }
`;

export const OthersGift = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  > div {
    display: flex;

    align-items: center;
  }

  > div span {
    color: white;
    font-size: 12px;
    font-weight: bold;
    margin-left: 5px;
    margin-right: 5px;

    &.desc {
      color: gray;
      font-size: 15px;
    }
  }
`;

export const FakeToogle = styled.div`
  display: flex;
  margin-top: -8px;
  align-self: center;
  justify-content: center;
  width: 45px;
  height: 5px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-height: calc(100vh - 45px - 72px - 50px - 92px);

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--grey4);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--grey3);
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 5px;
  padding: 10px;
`;

export const InputChat = styled.input`
  background-color: transparent;
  flex: 1;
  color: var(--white);
  ::placeholder {
    color: rgba(255, 255, 255, 0.7);
    padding-left: 6px;
  }
`;
export const EmojiIcon = styled(EmojiHappy)`
  height: 20px;
  width: 20px;
  color: var(--white);
  margin-left: 10px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
`;
export const BitsIcon = styled(MoneyBillAlt)`
  height: 20px;
  width: 20px;
  color: var(--white);
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  margin: 10px;
`;

export const BallIcon = styled(BowlingBall)`
  height: 20px;
  width: 20px;
  color: rgb(160, 107, 241);
  margin-right: 5px;
  margin-left: 5px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
`;

export const IconNumber = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  font-weight: bold;
`;

export const ConfigIcon = styled(Settings2)`
  height: 20px;
  width: 20px;
  color: var(--white);

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
`;

export const ChatButton = styled.button`
  color: var(--white);
  width: 47px;
  border-radius: 4px;
  height: 30px;
  background-color: rgb(145, 71, 255);
  margin-left: 10px;

  &:hover {
    background-color: rgb(119, 44, 232);
  }

  cursor: pointer;
`;
