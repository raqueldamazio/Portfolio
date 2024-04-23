import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home"
import Projetos from "./pages/Projetos/Projetos"
import Header from './components/Header/Header'
import * as S from "./components/Header/styled"


export default function App() {
  return (
    <>
    <S.GlobalStyle/>
<BrowserRouter>
<Header/>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Projetos" element={<Projetos/>}/>
</Routes>
</BrowserRouter>
    </>
  )
}

