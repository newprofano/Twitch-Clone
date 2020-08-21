import styled from "styled-components";

export const Button = styled.p`
  color: var(--nav-button-color);
  font-size: 15px;
  flex-shrink: 0;
  cursor: pointer;

  &:hover {
    color: var(--text-hover);
  }
`;
