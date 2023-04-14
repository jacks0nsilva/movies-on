import React from 'react'
import styles from '../styles/ListFavorites.module.css';
import { MovieContext, useFavoriteContext } from './FavoritesMovies'
import heartNegative from '../img/heart-positive.svg'
import heartPositive from '../img/heart-negative.svg'
import { Link } from 'react-router-dom';
import Title from './Title';


const ListFavorites = () => {
    const {favorito} = React.useContext(MovieContext)
    const image_path = 'https://image.tmdb.org/t/p/w500'
    const {adicionarFavorito} = useFavoriteContext()

  return (
    <main className={styles.main}>
        <h1 className={styles.title}>Sua lista de filmes favoritos</h1>
        <section className={styles.section + ' animeLeft'}>
        <ul  className={styles.moviesList}>
        {favorito.map((movie)=>{
           const isFavorite = favorito.some((fav) => fav.id === movie.id);
           const heart = !isFavorite ? heartPositive : heartNegative
          return(
            <li key={movie.id}>
              <img src={image_path + movie.poster_path} alt={movie.title}  className={styles.imagem}/>
              <p>{movie.title}</p>
              <p className={styles.star}>{movie.vote_average.toFixed(1)}</p>
              <Link className={styles.button} to={`/details/${movie.id}`}><button>Detalhes</button></Link>
              <img src={heart} onClick={()=> adicionarFavorito(movie) } alt="heart" className={styles.heart} />
            </li>
          )
        })}
        </ul>
      </section>
      <Title title={`Movies On | Favoritos`} description={`Lista de filmes favoritos`}/>
    </main>
  )
}

export default ListFavorites