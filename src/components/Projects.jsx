import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// components 
import RocketHeading from "./RocketHeading"

const Projects = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.projects .rocket-heading-mobile', {
      duration: 1.5,
      scrollTrigger: {
        trigger: ".projects .rocket-heading-mobile",
        start: "top center"
      },
      ease: "bounce",
      y: -142
    });

    gsap.from(".projects .rocket-heading-desktop", {
      duration: 1,
      scrollTrigger: {
        trigger: ".projects .rocket-heading-mobile",
        start: "top center"
      },
      ease: "Power3.easeIn",
      x: -350
    })
  }, [])

  return (
    <section className="projects">
      <div className="row row1">
        <div className="col col1">
          <RocketHeading title="projects"/>
        </div>
      </div>
      <div className="row row2">
        <div className="col col1"></div>
      </div>
      <div className="row row3">
        <div className="col col1"></div>
      </div>
    </section>
  )
}

export default Projects
