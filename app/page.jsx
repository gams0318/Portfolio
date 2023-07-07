import React from 'react'
import Divider from './components/Divider'
import Info from './components/Info'
import Nav from './components/Nav'
import { Project } from './components/Project'
import Contact from './components/Contact'
import { About } from './components/About'
import { Footer } from './components/Footer'
const Home = () => {
  return (
    <>
      <Nav />
      <Info />
      <Divider />
      <Project />
      <Contact />
      <About />
      <Footer />
    </>
  )
}

export default Home