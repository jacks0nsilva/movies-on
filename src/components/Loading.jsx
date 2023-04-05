import React from 'react'
import foto from '../img/loading.svg'
import Title from './Title'

function Loading() {
  return (
    <div className='containerLoading'>
        <img src={foto} alt="carregando" className='loading' />
        <h1>Carregando...</h1>
        <Title title={`Movies On | Loading`} description={`Carregando conteúdo...`}/>
    </div>
  )
}

export default Loading