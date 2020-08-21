import styled from "styled-components";

import { VipDiamond, Sword, VipCrown } from "styled-icons/remix-fill";
import { Star } from "styled-icons/boxicons-solid";

export const Container = styled.div`
  display: flex;
  margin-left: 20px;
  margin-top: 7px;

  margin-bottom: 3px;

  align-items: center;

  > div strong {
    font-size: 13px;
    flex-shrink: 0;
  }

  > div span {
    color: white;
    text-overflow: ellipsis;
    font-size: 12px;
  }
`;

export const SubIcon = styled(Star)`
  width: 17px;
  height: 17px;
  background-color: purple;
  color: white;
  border-radius: 3px;
  margin-right: 4px;
`;
export const VipIcon = styled(VipDiamond)`
  width: 17px;
  height: 17px;
  background-color: rgb(224, 5, 185);
  color: white;
  border-radius: 3px;
  margin-right: 4px;
`;

export const PrimeIcon = styled(VipCrown)`
  width: 17px;
  height: 17px;

  background-color: rgb(0, 160, 214);
  color: white;
  border-radius: 3px;
  margin-right: 4px;
`;
export const ModeratorIcon = styled(Sword)`
  width: 17px;
  height: 17px;
  background-color: rgb(0, 173, 3);
  color: white;
  border-radius: 3px;
  margin-right: 4px;
`;
