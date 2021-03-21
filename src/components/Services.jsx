import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// components
import RocketHeading from "./RocketHeading"

// images
import laptop from '../assets/desktop/laptop.jpg'

const Services = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.services .rocket-heading-mobile', {
      duration: 1.5,
      scrollTrigger: {
        trigger: ".services .rocket-heading-mobile",
        start: "top center"
      },
      ease: "bounce",
      y: -142
    });

    gsap.from(".services .rocket-heading-desktop", {
      duration: 0.6,
      scrollTrigger: {
        trigger: ".services .rocket-heading-mobile",
        start: "top bottom-=150rem",
      },
      ease: "Power3.easeIn",
      x: -350
    })

    gsap.from(".services .row2", {
      scrollTrigger: {
        trigger: ".services .row2",
        start: "top bottom-=150rem"
      },
      y: 50
    })
  }, [])

  return (
    <section id="services" className="services">
      <div className="row row1">
        <div className="col col1">
          <RocketHeading title="services"/>
        </div>
      </div>
      <div className="row row2">
        <div className="col col1">
          <img src={ laptop } alt="A laptop showing a website on a wooden table"/>
        </div>
        <div className="col col2">
          <h3>web development</h3>
          <p>I pretty much enjoy building websites with complex design. So, if you have a design layout (PSD/PDF/AI/XD/Figma/Sketch) and need someone to build and bring it on the web, then don’t hesitate to get in touch with me.</p>
          <a href="mailto:thecodingjohn@outlook.com" type="button">
            <span>Contact</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
