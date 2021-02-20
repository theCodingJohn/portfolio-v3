import React from "react";

// components
import {Header, Hero, About, Projects, Services} from "../components"

const Home = () => {
  return (
    <>
      <Header />
      <main className="home overlay">
        <Hero />
        <About />
        <Projects />
        <Services />
      </main>
    </>  
  )
}

export default Home
