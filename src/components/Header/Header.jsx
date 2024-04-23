import React from 'react'
import { Link } from 'react-router-dom'
import * as S from "./styled"


export default function Header() {
  return (
    <S.Header>
        <S.Menu>
          <S.Lista1>
          <S.Lista>
<Link to="/">Home</Link>
</S.Lista>
<S.Lista>
<Link to="Projetos">Projetos</Link>
</S.Lista>
</S.Lista1>
</S.Menu>
    </S.Header>
        
  )
}
