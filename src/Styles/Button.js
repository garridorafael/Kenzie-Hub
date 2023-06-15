import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8.2496px 0;
  border: 0.0625rem solid ${({ backgroundcolor }) => backgroundcolor};
  border-radius: 0.25rem;
  color: var(--color-grey-0);
  background-color: ${({ backgroundcolor }) => backgroundcolor};
  line-height: 1.3125rem;
  font-size: 0.8rem;
  width: 16.2437rem;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: var(--color-color-primary-disable);
  }
`;

export const LinkStyled = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8.2496px 0;
  border: 0.0625rem solid ${({ backgroundcolor }) => backgroundcolor};
  border-radius: 0.25rem;
  color: var(--color-grey-0);
  background-color: ${({ backgroundcolor }) => backgroundcolor};
  line-height: 1.3125rem;
  font-size: 0.8rem;
  width: 16.2437rem;
  text-decoration: none;

  a {
    color: var(--color-grey-0);
  }

  &:hover {
    cursor: pointer;
  }
`;
