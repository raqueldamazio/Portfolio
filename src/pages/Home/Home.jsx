import React from 'react'
import { Link } from 'react-router-dom'
import * as S from "./styled"
import fotomenu from "../../assets/fotomenu.jpg"
import iconhtml from "../../assets/html.png"
import iconcss from "../../assets/css.png"
import js from "../../assets/js.png"
import reac from "../../assets/react.png"
import componen from "../../assets/components.png"
import face from "../../assets/face.png"
import git from "../../assets/git.png"
import linkedin from "../../assets/linkedin.png"


export default function Home() {
  return (
    <S.Main>
<S.Title>
 <h4>Olá, meu nome é</h4>
 <h1>Raquel Damázio</h1>
 </S.Title>
 <S.Caixa>
 <S.Animacao>       </S.Animacao>
 </S.Caixa>
 <S.Apresentacao>
  <S.Foto>
    <img src={fotomenu} alt="" />
  </S.Foto>
  <S.Text>
  <p>Sou desenvolvedora Front-end, buscando aprender e me especializar cada vez mais na área.
  Atualmente, tenho 26 anos. Nascida e crescida no estado do Rio de Janeiro, na Zona Oeste.
  conheci o mundo da programação através do Vai na Web, que me abriu um leque de oportunidades depois de uma transição de carreira. 
  
  Seja bem-vindo(a) ao meu portfólio. 
 </p>
 <S.Contato>
 <a href="https://www.facebook.com/" target="_blank"><img src={face} alt="" /></a>
 <a href="https://github.com/raqueldamazio" target="_blank"><img src={git} alt="" /></a>
 <a href="https://www.linkedin.com/" target="_blank"><img src={linkedin} alt="" /></a>
 </S.Contato>
  </S.Text>
 </S.Apresentacao>
 <S.Icons>
  <img src={iconhtml} alt="" />
  <img src={iconcss} alt="" />
  <img src={js} alt="" />
  <img src={reac} alt="" />
  <img src={componen} alt="" />
 </S.Icons>
  </S.Main>
  )
}
