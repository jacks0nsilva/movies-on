import React from 'react'
import foto from '../img/loading.svg'

function Loading() {
  return (
    <div className='containerLoading'>
        <img src={foto} alt="carregando" className='loading' />
        <h1>Carregando...</h1>
    </div>
  )
}

export default Loading