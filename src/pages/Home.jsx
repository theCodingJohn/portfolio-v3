import React from "react";

// components
import {Header, Hero} from "../components"

const Home = () => {
  return (
    <>
      <Header />
      <main className="home overlay">
        <Hero />
      </main>
    </>  
  )
}

export default Home
