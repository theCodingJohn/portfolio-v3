import React from "react";

// components
import {Header, Hero, About} from "../components"

const Home = () => {
  return (
    <>
      <Header />
      <main className="home overlay">
        <Hero />
        <About />
      </main>
    </>  
  )
}

export default Home
