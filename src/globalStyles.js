import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html, body, div, span, button, input,
h1, h2, h3, h4, h5, h6, p,
a,img,i, ol, ul, li,
form, label, aside, 
figure, figcaption, footer, header, nav,section{
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 16px;
	font: inherit;
	vertical-align: baseline;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
}

:root {
	--color-color-primary: #ff577f;
	--color-color-primary-50: #ff427f;
	--color-color-primary-disable: #59323f;
	--color-grey-4: #121214;
	--color-grey-3: #212529;
	--color-grey-2: #343b41;
	--color-grey-1: #868e96;
	--color-grey-0: #f8f9fa;
	--color-sucess: #3fe864;
	--color-negative: #e83f5b;
    --color-red:#ff0000;
}

body{
    background-color: var(--color-grey-4);
}

#root{
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
}
`;



export const StyledContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;
