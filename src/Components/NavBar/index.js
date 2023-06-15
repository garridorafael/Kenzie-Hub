import styled from "styled-components";

export const CustomNav = styled.nav`
  margin-top: 30px;
  display: flex;
  box-sizing: content-box;
  max-width: 1200px;
  width: 100%;

  a{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 2rem;
    background-color: var(--color-grey-3);
    border-radius: 4px;
    font-size: .625rem;
    font-weight: 600;
    line-height: 14px;
    color: var(--color-grey-0);
    text-align: center;
    margin-top: 10px;

    &:hover{
        cursor: pointer;
    }
  }

  .logout{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 2rem;
    background-color: var(--color-grey-3);
    border-radius: 4px;
    font-size: .625rem;
    font-weight: 600;
    line-height: 14px;
    color: var(--color-grey-0);
    text-align: center;
    margin-top: 10px;

    &:hover{
        cursor: pointer;
    }
  }

  .navContainer{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 900px;
    margin-bottom: 20px;
    gap: 10px;
        
       
        width: 100%;
        margin: 0 auto;
        padding: 1rem;
      
  }
`;
