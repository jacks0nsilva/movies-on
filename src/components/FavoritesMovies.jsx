import React from "react";

export const MovieContext = React.createContext();

export const MovieFavoriteStorage = ({children}) =>{
    const setLocalMovie = localStorage.getItem('movie')
    const getMovie = JSON.parse(setLocalMovie)
    const [favorito, setFavorito] = React.useState(getMovie ? [...getMovie]: [])

    return(
        <MovieContext.Provider value={{favorito, setFavorito}}>
            {children}
        </MovieContext.Provider>
    )
}


export const useFavoriteContext = () =>{
    const {favorito, setFavorito} = React.useContext(MovieContext)
    const adicionarFavorito = (novoFavorito) => {
        const favoritoRepetido = favorito.some(favorito => favorito.id === novoFavorito.id);
        let novaLista = [...favorito]
        if (!favoritoRepetido){
            novaLista.push(novoFavorito)
            return setFavorito(novaLista)
        }
        setFavorito(novaLista.filter(favorito => favorito.id !== novoFavorito.id))
    }
    return {
        adicionarFavorito
    }
    
}
