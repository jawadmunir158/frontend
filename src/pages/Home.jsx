import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OuPolicy from '../components/OuPolicy'
import NewsLetterBox from '../components/NewsLetterBox'
import Cards from '../components/cards'
import SpecialOffer from '../components/SpecialOffer'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <Cards />
      <BestSeller />
      <OuPolicy />
      <SpecialOffer />
      <NewsLetterBox />
    
    </div>
  )
}

export default Home
