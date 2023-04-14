import React, { useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { APIKey } from '../config/Key';
import styles from '../styles/Search.module.css'
import Loading from './Loading';
import Title from './Title';
import { MovieContext, useFavoriteContext } from './FavoritesMovies'
import heartNegative from '../img/heart-positive.svg'
import heartPositive from '../img/heart-negative.svg'


function Search() {

  const [searchParams] = useSearchParams();
  const [loading, setLoading] = React.useState(false)
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('q')
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=`
  const image_path = 'https://image.tmdb.org/t/p/w500'
  const {favorito} = React.useContext(MovieContext)
  const {adicionarFavorito} = useFavoriteContext()  


  React.useEffect(()=>{
    setLoading(true)
    async function initMovies(){
      const response = await fetch(`${URL}${APIKey}&language=pt-BR&query=${query}&page=1&include_adult=false`)
      const json = await response.json()
      setMovies(json.results)
      setLoading(false)
    }
    initMovies()

  },[query])

  if (loading) return <Loading/>
  if (movies.length > 0)

  return (
    <main className={styles.main + ' animeLeft'}>
      <h1>Exibindo resultados para: <span className={styles.query}>{query}</span></h1>

      <section className={styles.section + ' animeLeft'}>
        <ul  className={styles.moviesList}>
        {movies.map((movie)=>{
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
      <Title title={`Movies On | Search`} description={`Resultados de busca de: ${query}`}/>
    </main>
  )
}

export default Search