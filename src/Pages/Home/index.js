import styled from "styled-components";

export const CustomForm = styled.form`
  width: 296px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: var(--color-grey-3);
  padding: 34px 18px;
  border-radius: 4px;
  align-self: center;
  box-sizing: border-box;

  h2 {
    color: var(--color-grey-0);
    align-self: center;
    font-weight: 700;
    line-height: 23px;
  }

  label {
    color: var(--color-grey-0);
    font-size: 0.6125rem;
  }

  span {
    font-size: 0.6062rem;
    font-weight: 600;
    line-height: 14px;
    color: var(--color-grey-1);
    text-align: center;
    margin-top: 10px;
  }

  p {
    font-size: 0.6062rem;
    font-weight: 600;
    line-height: 14px;
    color: var(--color-red);
  }

  .registerSpan {
    font-size: 0.625rem;
    font-weight: 600;
    line-height: 14px;
    color: var(--color-grey-1);
    text-align: center;
    margin-top: 10px;

    &hover {
      cursor: pointer;
    }
  }
`;
