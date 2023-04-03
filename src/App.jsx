import React from "react"
import './styles/App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from "./components/Header"
import Search from "./components/Search"
import Index from "./components/Index"
import Details from "./components/Details"

function App() {

  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path="details/:id" element={<Details/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
