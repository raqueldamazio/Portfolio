import styled, {createGlobalStyle, css} from "styled-components"
import { Link } from "react-router-dom"

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`

const center = css`
display: flex;
justify-content: center;
align-items: center;
`

export const Header = styled.header`
background-color: #f3d0f3;
height: 7vh;
${center}
justify-content: space-evenly;
`
export const Menu = styled.nav`
/* border: solid white 1px; */
display: flex;
width: 100%;
justify-content: space-around;

@media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: 70vh;
  }

`

export const Lista1 = styled.ul`
display: flex;
width: 100%;
justify-content: space-around;
list-style-type: none;

@media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

`

export const Lista = styled.li`
/* border: solid 1px; */
a {
    text-decoration: none;
    color: violet;
    list-style-type: none;
    
    &:hover {
    color: black;}
    cursor: pointer;
}

@media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }


`
 