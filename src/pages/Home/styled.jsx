import styled, { css, keyframes } from "styled-components"
import Keyframes from "styled-components"

const Center = css`
display: flex;
justify-content: center;
align-items: center;`

export const Main = styled.main`
/* border: solid 1px black; */
width: 100%;
height: 100%;
background-color: #f1e3f1;

`

export const Caixa = styled.div`
/* border: solid 1px; */
width: 40vw;
margin-left: 50%;

@media screen and (max-width: 768px) {
    width: 80%;
  }

  @media screen and (max-width: 480px) {
    width: 90%;
  }

`
const spin = keyframes`
 0% {
    transform: rotate(0deg) translateX(80px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(80px) rotate(-360deg);
  };`

export const Animacao = styled.div`
/* border: solid 3px; */
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background: #4e054e;
	margin: 60px auto;
    animation: ${spin} 2s linear infinite;

`

export const Title = styled.div`
/* border: solid 1px; */
height: 10vh;
width: 100%;
${Center}
flex-direction: column;
justify-content: start;
align-items: start;

h1{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
/* border: solid 1px; */
height: 10vh;
padding: 0%;
font-size: 2.2rem;
margin-left: 30%;
color: #c054c0;
}
h4 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
/* border: solid 1px; */
color: #df90df;
height: 4vh;
padding: 3%;
margin-left: 11%;
font-size: 2.1rem;
}

@media screen and (max-width: 480px) {
    h1 {
      font-size: 1.5rem;
      margin-left: 2%;
    }

    h4 {
      font-size: 1.4rem;
      margin-left: 2%;
    }
  }

`

export const Apresentacao = styled.div`
/* border: solid 1px; */
height: 59vh;
${Center}
justify-content: space-evenly;
`

export const Foto = styled.div`

/* border: solid 1px; */
width: 30vw;
${Center}
img {
    height: 35vh;
    border-radius: 35%;
}

@media screen and (max-width: 768px) {
    width: 90%;
  }
`

export const Text = styled.div`
/* border: solid 1px; */
 width: 30vw;
 p {
    font-family: Arial, Helvetica, sans-serif;
 }

 @media screen and (max-width: 768px) {
    width: 90%;
  }

`
export const Contato = styled.div`
/* border: solid 1px; */
${Center}
`

export const Icons = styled.div`
/* border: solid 1px; */
height: 10vh;
${Center}
`