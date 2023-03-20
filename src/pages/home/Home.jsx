import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import "./home.scss"
import Featured from '../../components/featured/Featured'

const Home = () => {
  return (
    <header>
    <Navbar/>
    <Header/>
    <div className="homeContainer">
      <Featured/>
    </div>
    </header>
  )
}

export default Home