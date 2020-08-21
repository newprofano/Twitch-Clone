import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Qtde = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 15px;
`;

export const ChannelOnInfo = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  margin-right: 10px;
  margin-top: -10px;
  justify-content: flex-end;
`;

export const CircleRed = styled.div`
  display: flex;
  margin-top: 5px;
  margin-right: 2px;
  height: 8px;
  width: 8px;
  background-color: red;
  border-radius: 50%;
`;

export const Avatar = styled.div`
  height: 30px;
  width: 30px;
  background-color: black;
  margin: 10px;

  border-radius: 25px;
`;

export const UserChannel = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  > div h3 {
    color: rgba(255, 255, 255, 0.9);
    font-size: 14px;
  }

  > div h4 {
    color: rgba(255, 255, 255, 0.6);
    font-size: 12px;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
