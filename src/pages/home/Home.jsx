import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import "./home.scss"

const Home = () => {
  return (
    <header>
    <Navbar/>
    <Header/>
    <div className="homeContainer">
      
    </div>
    </header>
  )
}

export default Home