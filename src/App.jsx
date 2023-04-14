import React from "react"
import './styles/App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from "./components/Header"
import Search from "./components/Search"
import Index from "./components/Index"
import Details from "./components/Details"
import { MovieFavoriteStorage } from "./components/FavoritesMovies"
import LocalStorage from "./components/LocalStorage"
import ListFavorites from "./components/ListFavorites"
import Footer from "./components/Footer"

function App() {

  return (
    <div>
      <BrowserRouter>
      <MovieFavoriteStorage>
        <Header/>
          <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="search" element={<Search/>}/>
          <Route path="details/:id" element={<Details/>}/>
          <Route path="/favoritos" element={<ListFavorites/>}/>
          </Routes>
          <Footer/>
          <LocalStorage/>
      </MovieFavoriteStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
