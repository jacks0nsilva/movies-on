import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Index.module.css'
import Title from './Title'
import { MovieContext, useFavoriteContext } from './FavoritesMovies'
import heartNegative from '../img/heart-positive.svg'
import heartPositive from '../img/heart-negative.svg'
import useFetch from '../hooks/useFetch'
import { POPULAR_MOVIES } from '../config/Api'
import InfiteScroll from '../hooks/InfiteScroll'

function Index() {

  const {request} = useFetch()
  const [movies, setMovies] = React.useState([])
  const image_path = 'https://image.tmdb.org/t/p/w500'
  const {favorito} = React.useContext(MovieContext)
  const {adicionarFavorito} = useFavoriteContext()
  const [pagina, setPagina] = React.useState(0)
  


  React.useEffect(()=>{
    async function initMovies(){
      const {url, options} = POPULAR_MOVIES(pagina)
      const {json} = await request(url, options)
      setMovies([...movies, ...json.results])
    }
    initMovies()

  },[request, pagina])

  return (
    <main className={styles.main + ' animeLeft'}>
      <h1>Filmes Populares:</h1>

      <section className={styles.section + ' animeLeft'}>
        <ul  className={styles.moviesList}>
          {movies.map((movie)=>{
            const isFavorite = favorito.some((fav) => fav.id === movie.id);
            const heart = !isFavorite ? heartPositive : heartNegative
            return(
              <li key={movie.id} className={styles.movie}>
                <img 
                  src={image_path + movie.poster_path} 
                  alt={movie.title}  
                  className={styles.imagem}
                />
                <p>
                  {movie.title}
                </p>
                <p className={styles.star}>
                  {movie.vote_average.toFixed(1)}
                </p>
                <Link className={styles.button} to={`/details/${movie.id}`}>
                  <button>
                    Detalhes
                  </button>
                </Link>
                <img 
                  src={heart} 
                  onClick={()=> adicionarFavorito(movie) } 
                  alt="heart" 
                  className={styles.heart} 
                />
              </li>
            )
          })}
        </ul>
        <InfiteScroll callback={()=> setPagina((previous)=> previous + 1)}/>
      </section>
      <Title title={`Movies On | Inicio`} description={`Página inicial do Movies On`}/>
    </main>
  )
}

export default Index