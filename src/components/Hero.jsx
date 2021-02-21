import React, { useEffect } from 'react'
import gsap from 'gsap'

const Hero = () => {
  useEffect(() => {
    gsap.from(".hero h1", { duration: 1, delay: 1, y: "5rem", opacity: 0 });
  }, [])

  return (
    <section className="hero">
      <div className="row">
        <div className="col">
          <h1>Let's<br/>Bring Ideas<br/>In Digital World</h1>
        </div>
      </div>
    </section>
  )
}

export default Hero
