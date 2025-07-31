import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import InstaFeed from './components/InstaFeed'
import ImageSliderWithModal from './components/slider'
import Fillsection from './components/fillsection'

export default function page() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      
      <InstaFeed/>
      <Fillsection/>
      <ImageSliderWithModal/>
      <Contact/>
      
    </div>
  )
}
