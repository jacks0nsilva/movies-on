import React from 'react'
import { MovieContext } from './FavoritesMovies'
import styles from '../styles/FavoriteIndicator.module.css';
import { Link } from 'react-router-dom';

const FavoriteIncator = () => {
    const {favorito} = React.useContext(MovieContext)
  return (
    <Link to='/favoritos'>
        <div className={styles.circle}>
            <span>{favorito.length}</span>
        </div>
    </Link>
  )
}

export default FavoriteIncator