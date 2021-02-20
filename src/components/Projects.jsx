import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// components 
import RocketHeading from "./RocketHeading"
import ProjectCard from "./ProjectCard"

// images 
import photosnap from "../assets/desktop/photosnap.png"
import photo2 from "../assets/desktop/photo2.png"
import photo3 from "../assets/desktop/photo3.png"
import photo4 from "../assets/desktop/photo4.png"
import photo5 from "../assets/desktop/photo5.png"
import photo6 from "../assets/desktop/photo6.png"

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
        <div className="col col1">
          <ProjectCard attribute={{image: `${photosnap}`}}/>
          <ProjectCard attribute={{image: `${photo2}`}}/>
          <ProjectCard attribute={{image: `${photo3}`}}/>
          <ProjectCard attribute={{image: `${photo4}`}}/>
          <ProjectCard attribute={{image: `${photo5}`}}/>
          <ProjectCard attribute={{image: `${photo6}`}}/>
        </div>
      </div>
      <div className="row row3">
        <div className="col col1">
          <button>Load More</button>
        </div>
      </div>
    </section>
  )
}

export default Projects
