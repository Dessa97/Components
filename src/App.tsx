import React from 'react';
import {Header} from './components/header'
import{Aluno} from './components/alunos'
import{Footer} from './components/footer'


export default function App(){
  return(
    <div>
      {/*chamando os components*/}
      <Header title="Curso React + TypeScript"/>

      <Aluno nome="Andressa Oliveira" idade={27}/>

      <Aluno nome="Rafael Picolo" idade={33}/>

      <Footer/>
    </div>
  )
}

