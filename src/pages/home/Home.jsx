import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import "./home.scss"
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import MailList from '../../components/mailList/MailList'

const Home = () => {
  return (
    <header>
    <Navbar/>
    <Header/>
    <div className="homeContainer">
      <Featured/>
      <h1 className="homeTitle">Browse by Property Type</h1>
      <PropertyList/>
      <h1 className="homeTitle">Homes guests love</h1>
      <FeaturedProperties/>
      <MailList/>
    </div>
    </header>
  )
}

export default Home