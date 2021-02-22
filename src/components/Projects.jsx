import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// components 
import RocketHeading from "./RocketHeading"
import ProjectCard from "./ProjectCard"

// images 
import photosnap from "../assets/desktop/photosnap.png"
import creativeAgency from "../assets/desktop/creative-agency.png"
import clockApp from "../assets/desktop/clock-app.png"
import ipTracker from "../assets/desktop/ip-tracker.png"
import traktTv from "../assets/desktop/trakt-tv.png"
import restApi from "../assets/desktop/rest-api.png"

const cardDetails = [
  { id: 1, image: `${photosnap}`, link: "https://photosnap-omega.vercel.app/" },
  { id: 2, image: `${creativeAgency}`, link: "https://creativeagencyv1.netlify.app/" },
  { id: 3, image: `${clockApp}`, link: "https://clock-app.thecodingjohn.vercel.app/" },
  { id: 4, image: `${ipTracker}`, link: "https://ip-address-tracker-alpha.netlify.app/" },
  { id: 5, image: `${traktTv}`, link: "https://thecodingjohn.github.io/traktTv-page-clone/" },
  { id: 6, image: `${restApi}`, link: "https://restcountries-api-jc.netlify.app/" },
]

const Projects = () => {
  const [visible, setVisible] = useState(6);

  const cards = cardDetails.slice(0, visible).map(item => <ProjectCard key={item.id} attribute={{ ...item }} />);

  const showMoreCard = () => {
    if (visible > cardDetails.length) {
      setVisible(6);
    } else {
      setVisible(prev => prev + 3);
    }
  }

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
      duration: 0.6,
      scrollTrigger: {
        trigger: ".projects .rocket-heading-mobile",
        start: "top bottom-=150rem",
      },
      ease: "Power3.easeIn",
      x: -350
    })

    gsap.from(".projects .project-card-wrapper", {
      scrollTrigger: {
        trigger: ".projects .row1 .col1",
        start: "top bottom-=150rem"
      },
      opacity: 0,
      stagger: 0.1,
      y: -30
    })
  }, [])

  return (
    <section id="projects" className="projects">
      <div className="row row1">
        <div className="col col1">
          <RocketHeading title="projects"/>
        </div>
      </div>
      <div className="row row2">
        <div className="col col1">
          {cards}
        </div>
      </div>
      {
        visible < cardDetails.length
        &&
      <div className="row row3">
        <div className="col col1">
          <button onClick={showMoreCard}>Load More</button>
        </div>
      </div>
      }
    </section>
  )
}

export default Projects
