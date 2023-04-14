import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/Header.module.css'
import logo from '../img/logo.svg'
import lupa from '../img/lupa.svg'
import { MovieContext } from './FavoritesMovies'
import {ReactComponent as Heart} from '../img/heart-header.svg'

function Header() {

  const [searchKey, setSearchKey] = React.useState('');
  const navigate = useNavigate()
  const {favorito} = React.useContext(MovieContext)

  const searchMovies = (event) =>{
    event.preventDefault()
    if (searchKey !== '')
    navigate(`/search?q=${searchKey}`)
    setSearchKey('')
  }

  return (
    <nav className={styles.nav}>
        <Link to="/"><img src={logo} alt="Logo" className={styles.logo} /></Link>
        <div className={styles.heartContainer}>
          <Link to='/favoritos'>
          <Heart/>
          </Link>
          <span className={styles.favCount}>{favorito.length}</span>
        </div>
        <form onSubmit={searchMovies}>
            <input type="text" placeholder='Busque um filme'onChange={(e)=> setSearchKey(e.target.value)}  value={searchKey}/>
            <button type="submit" className={styles.lupa}>
              <img src={lupa} alt="lupa"  />
            </button>
        </form>
    </nav>
  )
}

export default Header