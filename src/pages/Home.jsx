import React from "react";

// components
import {Header, Hero, About, Projects} from "../components"

const Home = () => {
  return (
    <>
      <Header />
      <main className="home overlay">
        <Hero />
        <About />
        <Projects />
      </main>
    </>  
  )
}

export default Home
