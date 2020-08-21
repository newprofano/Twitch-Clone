import styled from "styled-components";
import { Search } from "styled-icons/evaicons-solid";
import { ArrowFromRight } from "styled-icons/boxicons-solid";

export const Container = styled.div`
  grid-area: CL;
  background-color: var(--grey-3);
  display: flex;
  flex-direction: column;
`;

export const ScrollContent = styled.div`
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 53px - 50px);
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
export const TagContainer = styled.div`
  display: flex;
  padding: 12px;
  justify-content: space-between;
`;

export const IconHide = styled(ArrowFromRight)`
  color: white;
  width: 22px;
  height: 22px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
`;

export const Tag = styled.span`
  color: var(--white);
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const ChannelFooter = styled.span`
  color: var(--text-hover);
  font-size: 11px;
  margin-left: 11px;

  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const ChannelInput = styled.input`
  height: 32px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.15);
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  font-size: 12px;

  color: white;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
    padding-left: 6px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 10px;
  align-items: flex-end;
  background-color: var(--grey-3);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  width: 240px;
`;

export const IconSearch = styled(Search)`
  color: rgba(255, 255, 255, 0.7);
  background-color: rgba(255, 255, 255, 0.15);
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
  padding-left: 4px;

  width: 27px;
  height: 32px;
`;
