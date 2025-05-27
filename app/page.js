import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'

export default function page() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Contact/>
    </div>
  )
}
