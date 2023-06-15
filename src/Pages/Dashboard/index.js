import styled from "styled-components";

export const BoxStyled = styled.div`
  border-top: 2px solid var(--color-grey-3);
  border-bottom: 2px solid var(--color-grey-3);
  margin-top: 10px;
  padding: 25px 0;
  width: 100%;

  .contentBox {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
    max-width: 900px;
  }

  h3 {
    color: var(--color-grey-0);
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin-bottom: 10px;
  }

  span {
    font-size: 0.75rem;
    line-height: 18px;
    color: var(--color-grey-1);
  }
`;

export const MainContent = styled.main`
  width: 100%;
  .contentBox {
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
    max-width: 900px;
  }

  h3 {
    color: var(--color-grey-0);
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin-bottom: 10px;
    margin-top: 25px;
  }

  span {
    color: var(--color-grey-0);
    font-size: 1rem;
    line-height: 25px;
  }
`;
