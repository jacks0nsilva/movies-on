import React from 'react'
import { useParams } from 'react-router-dom'
import { APIKey } from '../config/Key'
import styles from '../styles/Details.module.css'
import Loading from './Loading'
import Title from './Title'
import {ReactComponent as Sinopse} from '../img/arquivo.svg'
import {ReactComponent as Calendario} from '../img/calendario.svg'
import {ReactComponent as Tempo} from '../img/tempo.svg'
import {ReactComponent as Orcamento} from '../img/orcamento.svg'
import {ReactComponent as Receita} from '../img/carteira.svg'

function Details() {
    const {id} = useParams()
    const image_path = 'https://image.tmdb.org/t/p/w500'
    const [movie, setMovie] = React.useState([])
    const [loading, setLoading] = React.useState(false)

    React.useEffect(()=>{
      async function detailsMovie(){
        setLoading(true)
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=pt-BR`)
        const json = await response.json()
        const {title, poster_path, overview, release_date, runtime, budget, revenue} = json

        const detalhes = {
          id: id,
          titulo: title,
          sinopse: overview,
          imagem: `${image_path}${poster_path}`,
          dataLancamento: release_date.split('-').reverse().join('/'),
          duracao: runtime,
          orcamento: budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."),
          receita: revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
        setMovie(detalhes)
        setLoading(false)
      }
      detailsMovie()
    },[id])    
    
    if (loading) return <Loading/>
    if (movie !== undefined)



  return (
    <main className={styles.main + ' animeLeft'}>
        <section className={styles.section}>
          <img src={movie.imagem} alt={movie.titulo} className={styles.imagem} />
            <div className={styles.descricao}>
              <h1 className={styles.titulo}>{movie.titulo}</h1>
              <p><span className={styles.icons}><Sinopse/>Sinopse:</span> {movie.sinopse}</p>
              <p><span className={styles.icons}><Calendario/>Data de lançamento:</span> {movie.dataLancamento}</p>
              <p><span className={styles.icons}><Tempo/>Duração:</span> {movie.duracao} minutos</p>
              <p><span className={styles.icons}><Orcamento/>Orçamento:</span> ${movie.orcamento + ',00'}</p>
              <p><span className={styles.icons}><Receita/>Receita:</span> ${movie.receita + ',00'}</p>
              <div className={styles.links}>
                <a href={`https://www.youtube.com/results?search_query=${movie.titulo} trailer`} target='_blank'>Assista o trailer</a>
                <button onClick={()=> history.back()}>Voltar</button>
              </div>
            </div>
        </section>
        <Title title={`Movies On | Details`} description={`Exibindo detalhes de: ${movie.titulo}`}/>
    </main>
  )
}

export default Details
