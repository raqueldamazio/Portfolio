import { Link } from 'react-router-dom'
import * as S from "./styled"
import beat from "../../assets/beat.png"
import mc from "../../assets/mc.png"
import halloween from "../../assets/halloween.png"
import selfcare from "../../assets/selfcare.png"




export default function Home() {
  return (
    <S.Main>
      <S.Texto>
        <p>Alguns dos projetos desenvolvidos por mim.</p>
      </S.Texto>
      <S.Conteudo>
      <a href="https://raqueldamazio.github.io/Selfcare-desafiofinal/" target="_blank"><img src={selfcare} alt="" /></a>
      <a href="https://raqueldamazio.github.io/beat/" target="_blank"><img src={beat} alt="" /></a>
      <a href="https://desafio-mc.vercel.app/" target="_blank"><img src={mc} alt="" /></a>
      <a href="https://raqueldamazio.github.io/Halloween-VNW.T3/" target="_blank"><img src={halloween} alt="" /></a>
        </S.Conteudo>
</S.Main>
  )
  }