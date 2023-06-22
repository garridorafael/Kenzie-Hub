import styled from "styled-components";
import Modal from "react-modal";

export const BoxStyled = styled.div`
  border-top: 2px solid var(--color-grey-3);
  border-bottom: 2px solid var(--color-grey-3);
  margin-top: 10px;
  padding: 25px 1rem;
  width: 100%;

  .contentBox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    padding: 1rem 0;
    max-width: 900px;
    flex-grow: 1;
    flex-wrap: wrap;
  }

  h3 {
    color: var(--color-grey-0);
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin-bottom: 10px;
    margin-right: 110px;
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
    padding: 1rem 0;
    max-width: 900px;
  }

  .contentBoxMain{
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
    max-width: 900px;
    max-height: 410px;
    overflow-y: auto;
    background-color: var(--color-grey-3); 
    border-radius: 4px;

    ul{
      display: flex;
      flex-direction: column;
      gap: 12px;
      height: 100%;
    }

    li{
      background-color: var(--color-grey-4);
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 49px;
      border-radius: 4px;
      padding: 0 10px;

      h3{
        font-weight: 700;
        font-size: .875rem;
        line-height: 1.5rem;
        margin: 0;
      }

      span{
        font-size: .75rem;
        line-height: 1.375rem;
        color: var(--color-grey-1);
      }

      &:hover{
        cursor: pointer;
        background-color: var(--color-grey-2);
      }
    }
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

  .addButton{
    width: 33px;
    height: 33px;
  }

  .mainHeader{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    padding: 8px 0;
    max-width: 900px;
    margin-bottom: 20px;

    h3{
      margin: 0;
    }
  }

  
`;

export const CustomModal = styled(Modal)`
  max-width: 369px;
  height: 342px;
  background-color: var(--color-grey-3);
  border-radius: 4px;
  outline: none;
  
  
  .modalContainer{
    align-self: center;
    justify-self: center;
    max-width: 369px;
    border-radius: 4px;
    box-sizing: border-box;

    form{
      gap: 22px;
    }

    .modalHeader{
      border-radius: 4px 4px 0 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 18px;
      background-color: var(--color-grey-2);

      h2{
        color: var(--color-grey-0);
        font-weight: 700;
        font-size: .75rem;
        line-height: 1.1875rem;
      }

      button{
        background: transparent;
        font-weight: 600;
        font-size: .8125rem;
        line-height: 1.3125rem;
        color: var(--color-grey-1);

        &:hover{
          cursor: pointer;
          scale: 1.3;
        }
      }
    }
  }

  .registerButton{
    margin-top: 20px;
  }

  .deleteButton{
    width: 79px;
    height: 39px;
    background-color: var(--color-grey-1);
    border: none;
  }
`;
