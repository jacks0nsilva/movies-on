import React from 'react'
import { APIKey } from '../config/Key'
import { Link } from 'react-router-dom'
import styles from '../styles/Index.module.css'
import Loading from './Loading'
import Title from './Title'
import { MovieContext, useFavoriteContext } from './FavoritesMovies'
import heartNegative from '../img/heart-positive.svg'
import heartPositive from '../img/heart-negative.svg'


function Index() {

  const [movies, setMovies] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const image_path = 'https://image.tmdb.org/t/p/w500'
  const {favorito} = React.useContext(MovieContext)
  const {adicionarFavorito} = useFavoriteContext()


  React.useEffect(()=>{
    async function initMovies(){
      setLoading(true)
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=pt-BR&page=1`)
      const json = await response.json()
      setMovies(json.results)
      setLoading(false)
    }
    initMovies()

  },[])

  if (loading) return <Loading/>
  if(movies.length > 0)

  return (
    <main className={styles.main + ' animeLeft'}>
      <h1>Filmes Populares:</h1>

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
      <Title title={`Movies On | Inicio`} description={`Página inicial do Movies On`}/>
    </main>
  )
}

export default Index