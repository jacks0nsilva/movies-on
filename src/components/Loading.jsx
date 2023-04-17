import React from 'react'
import Title from './Title'

function Loading(){
  return(
    <div className="containerLoading">
      <div class="spinner"></div>
      <h1>Carregando...</h1>
      <Title title={`Movies On | Loading`} description={`Carregando conteúdo...`}/>
    </div>
  )
}

export default Loading