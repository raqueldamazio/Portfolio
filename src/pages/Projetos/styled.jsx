import styled, {css} from "styled-components"

const Center = css`
display: flex;
justify-content: center;
align-items: center;`

export const Main = styled.main`
/* border: solid 1px; */
background-color: #f1e3f1;

`
export const Texto = styled.div`
/* border: solid 1px; */
height: 20vh;
p{
font-size: 3rem;
color: #d177d1;
${Center}
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    align-items: center;
}

@media screen and (max-width: 768px) {
    p {
      font-size: 2.5rem;
    }
  }

  @media screen and (max-width: 480px) {
    p {
      font-size: 2rem;
    }
  }

`

export const Conteudo = styled.div`
/* border: solid 1px; */
display: grid;
grid-template-columns: 1fr 1fr/ 1fr 1fr;
justify-items: center;
justify-content: space-evenly;
grid-gap: 20px;

img {
    width: 30vw;
    flex-direction: column;
}

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr / 1fr; /* Alterando para uma coluna em telas menores que 768px */
  }

  @media screen and (max-width: 480px) {
    img {
      width: 50vw; /* Reduzindo a largura da imagem em telas menores que 480px */
    }
  }

`
