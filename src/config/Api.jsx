import { APIKey } from '../config/Key'

export function POPULAR_MOVIES(page){
    return{
        url: `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=pt-BR&page=${page}`,
        options: {
            method: 'GET'
        }
    }
}