import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import InstaFeed from './components/InstaFeed'

export default function page() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <InstaFeed/>
      <Contact/>
    </div>
  )
}
