import React from 'react'

import resume from '../assets/utils/JohnCunananResume.pdf'

const About = () => {

  return (
    <section className="about">
      <div className="row row1">
        <div className="col col1">
          <h2>about</h2>
        </div>
      </div>
      <div className="row row2">
        <div className="col col1">
          <p>I am a front-end developer from San Pedro, producing mobile-responsive, interactive and neat looking websites. </p>
          <p>I have been teaching myself web development and found it to be a fascinating way to create and bring my ideas to life.</p>
          <p>I very much enjoy playing with APIs, UI effects and animations. Let's build something great.</p>
        </div>
        <div className="col col2">
          <div className="col2row">
            <div className="col2col col2col1">
              <SkillCard name="JavaScript"/>
              <SkillCard name="ReactJS" />
              <SkillCard name="Git"/>
              <SkillCard name="SCSS"/>
              <SkillCard name="TypeScript"/>
              <SkillCard name="GSAP"/>
              <SkillCard name="HTML5"/>
              <SkillCard name="Figma"/>
              <SkillCard name="Yarn" />
              <SkillCard name="CSS3"/>
            </div>
            <div className="col2col col2col2">
              <ResumeButton name="Download Resume"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const SkillCard = ({name}) => {
  return (
    <div className="skill-card">
      <span>{ name }</span>
    </div>
  )
}

const ResumeButton = ({ name }) => {
  return (
    <a className="resume-button" href={resume} download>
      <span>{name}</span>
    </a>
  )
}

export default About
