import React from 'react'
import { MovieContext } from './FavoritesMovies'

const LocalStorage = () => {
    const {favorito} = React.useContext(MovieContext)
    React.useEffect(()=>{
        const m = JSON.stringify(favorito)
        window.localStorage.setItem('movie', m)
    },[favorito])

  return (
    <></>
  )
}

export default LocalStorage