import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import style from "./projects.module.scss";
import { projects } from "../../utils/projectDetails";
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");

import ProjectCard from "../ProjectCard";

const Projects = () => {
  const [visible, setVisible] = useState(6);
  const header = useRef(null);
  const row1 = useRef(null);

  const cards = projects
    .slice(0, visible)
    .map((item) => <ProjectCard key={item.id} attribute={{ ...item }} />);

  const showMoreCard = () => {
    if (visible > projects.length) {
      setVisible(6);
    } else {
      setVisible((prev) => prev + 3);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(header.current, {
      duration: 0.6,
      scrollTrigger: {
        trigger: header.current,
        start: "top bottom-=150rem",
      },
      ease: "Power3.easeIn",
      opacity: 0,
      y: -30,
    });

    gsap.from(".projectCardWrapper", {
      scrollTrigger: {
        trigger: row1.current,
        start: "top bottom-=150rem",
      },
      opacity: 0,
      stagger: 0.1,
      y: -30,
    });
  }, [header]);

  return (
    <section id="projects" className={style.projects}>
      <div className={style.row1}>
        <div ref={row1} className={style.col1}>
          <h2 ref={header}>Projects</h2>
        </div>
      </div>
      <div className={style.row2}>
        <div className={style.col1}>{cards}</div>
      </div>
      {visible < projects.length && (
        <div className={style.row3}>
          <div className={style.col1}>
            <button onClick={showMoreCard}>Load More</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
