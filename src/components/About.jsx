import React, {useEffect} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import resume from '../assets/utils/JohnCunananResume.pdf'

const About = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.rocket-heading-mobile', {
      duration: 1.5,
      scrollTrigger: {
        trigger: ".rocket-heading-mobile",
        start: "top center",
        markers: true
      },
      ease: "bounce",
      y: -142
    });

    gsap.from(".about .row2", {
      scrollTrigger: {
        trigger: ".about .row2",
        start: "top bottom",
        markers: true
      },
      opacity: 0,
      y: 50
    })
  }, [])
  
  return (
    <section className="about">
      <div className="row row1">
        <div className="col col1">
          <h2 className="rocket-heading rocket-heading-mobile">about
           <span>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 512.001 512.001" style={{ enableBackground: "new 0 0 512.001 512.001"}} xmlSpace="preserve">
                <g>
                  <g>
                    <path d="M368.78,142.473c-12.936-12.936-30.134-20.059-48.428-20.059c-18.294,0-35.492,7.125-48.428,20.059
                      c-12.936,12.937-20.059,30.134-20.059,48.428c0,18.295,7.124,35.492,20.059,48.429c12.936,12.936,30.134,20.059,48.428,20.059
                      c18.294,0,35.492-7.124,48.428-20.059s20.059-30.134,20.059-48.429C388.839,172.607,381.716,155.409,368.78,142.473z
                      M354.64,225.189c-9.158,9.159-21.336,14.202-34.288,14.202c-12.952,0-25.129-5.043-34.287-14.202
                      c-9.159-9.158-14.203-21.336-14.203-34.289c0-12.952,5.044-25.129,14.203-34.287c9.157-9.16,21.335-14.203,34.287-14.203
                      c12.953,0,25.129,5.044,34.288,14.203c9.159,9.158,14.203,21.336,14.203,34.287C368.843,203.853,363.799,216.031,354.64,225.189z"
                      />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M426.766,245.038c59.251-62.722,89.98-147.288,84.638-233.627c0.196-2.823-0.812-5.663-2.886-7.748l-0.095-0.096
                      c-2.09-2.1-4.948-3.126-7.788-2.922c-86.34-5.35-170.902,25.386-233.624,84.638l-14.288-2.933
                      C175.42,66.481,95.956,90.325,40.155,146.125c-1.875,1.876-2.928,4.418-2.928,7.07s1.054,5.194,2.928,7.07l88.551,88.551
                      l-21.916,21.917c-3.904,3.904-3.904,10.235,0,14.14l25.046,25.046c-0.531-0.011-1.059-0.039-1.592-0.039
                      c-19.238,0-37.323,7.491-50.92,21.088c-0.492,0.491-0.973,0.99-1.396,1.438c-23.542,24.483-32.099,58.074-35.133,81.941
                      c-1.731,13.619-1.867,25.347-1.675,32.786c0.42,16.348,1.761,17.687,3.983,19.91c2.311,2.31,3.47,3.468,19.803,3.861
                      c1.508,0.036,3.189,0.06,5.025,0.06c7.264,0,16.933-0.364,27.739-1.722c23.936-3.005,57.604-11.521,81.996-34.967
                      c0.505-0.478,1.007-0.961,1.502-1.456c14.451-14.452,21.445-33.568,21.021-52.547l25.078,25.078
                      c1.875,1.875,4.418,2.928,7.07,2.928s5.195-1.054,7.07-2.928l21.916-21.916l88.462,88.461c1.875,1.875,4.417,2.928,7.07,2.928
                      c2.653,0,5.195-1.054,7.07-2.928c55.8-55.801,79.641-135.265,63.775-212.568L426.766,245.038z M61.527,153.359
                      c50.533-46.072,119.751-65.261,187.176-51.42l1.217,0.25l-119.781,119.78L61.527,153.359z M136.878,345.559
                      c0.14-0.148,0.282-0.296,0.435-0.448c3.968-3.968,9.244-6.154,14.857-6.154c5.609,0,10.881,2.183,14.848,6.145
                      c0.003,0.003,0.007,0.006,0.01,0.009c0.004,0.004,0.007,0.008,0.011,0.011c3.96,3.968,6.142,9.238,6.142,14.846
                      c0,5.61-2.184,10.885-6.147,14.851c-0.151,0.15-0.305,0.298-0.515,0.497c-12.159,11.687-32.371,14.137-43.968,14.228
                      C122.645,378.229,125.003,357.908,136.878,345.559z M167.029,418.68c-0.001,0.002-0.002,0.003-0.004,0.004
                      c-0.36,0.361-0.726,0.712-1.154,1.117c-19.82,19.05-47.848,26.408-67.87,29.225c-15.409,2.169-28.859,2.135-36.739,1.755
                      c-0.406-7.827-0.462-21.382,1.793-37.038c2.862-19.865,10.268-47.698,29.339-67.533c0.348-0.368,0.7-0.734,1.065-1.099
                      c8.314-8.314,18.953-13.453,30.45-14.84c-0.242,0.231-0.49,0.455-0.728,0.693c-0.282,0.281-0.556,0.565-0.773,0.794
                      c-10.067,10.471-16.611,25.618-18.922,43.806c-0.905,7.122-0.976,13.258-0.876,17.152c0.2,7.755,0.702,10.608,3.465,13.372
                      c2.876,2.866,5.934,3.204,13.305,3.382c0.789,0.019,1.668,0.031,2.628,0.031c3.797,0,8.851-0.19,14.497-0.899
                      c18.24-2.291,33.41-8.814,43.815-18.815c0.282-0.268,0.562-0.537,0.839-0.813c0.003-0.003,0.005-0.006,0.008-0.008
                      c0.23-0.23,0.447-0.469,0.67-0.704C180.478,399.388,175.551,410.157,167.029,418.68z M234.337,384.14l-53.164-53.164
                      c-0.002-0.002-0.003-0.003-0.005-0.005c-0.002-0.002-0.003-0.003-0.005-0.005l-53.164-53.164l14.846-14.847l52.992,52.992
                      c0.028,0.028,0.056,0.057,0.084,0.085l53.261,53.261L234.337,384.14z M270.403,362.234
                      c-0.004-0.004-126.125-126.126-126.125-126.126l27.49-27.49l47.267,47.267c1.953,1.952,4.511,2.928,7.07,2.928
                      s5.118-0.977,7.07-2.928c3.904-3.904,3.904-10.235,0-14.14l-47.267-47.267l88.863-88.862
                      c57.452-57.451,136.117-88.289,217.047-85.383c1.372,38.226-4.793,75.944-17.726,111.162l-63.264-63.264
                      c-3.904-3.903-10.235-3.903-14.14,0c-3.904,3.904-3.904,10.235,0,14.14l69.188,69.188c-14.343,31.6-34.354,60.734-59.441,85.82
                      L275.941,367.772L270.403,362.234z M358.691,450.522l-68.611-68.61l119.78-119.78l0.25,1.216
                      C423.95,330.77,404.762,399.988,358.691,450.522z"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M67.924,298.322c-3.904-3.902-10.235-3.903-14.139,0L2.929,349.178c-3.904,3.904-3.905,10.235,0,14.14
                      c1.953,1.952,4.511,2.928,7.07,2.928s5.118-0.977,7.07-2.928l50.856-50.855C71.828,308.557,71.828,302.227,67.924,298.322z"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M195.842,462.01c-3.904-3.904-10.235-3.904-14.139,0l-32.874,32.874c-3.904,3.904-3.904,10.235,0,14.14
                      c1.953,1.952,4.511,2.928,7.07,2.928c2.559,0,5.118-0.977,7.07-2.928l32.874-32.874
                      C199.746,472.246,199.746,465.916,195.842,462.01z"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M223.808,434.047c-1.86-1.87-4.429-2.93-7.069-2.93c-2.63,0-5.209,1.061-7.069,2.93c-1.86,1.859-2.929,4.429-2.929,7.068
                      c0,2.631,1.07,5.199,2.929,7.069c1.86,1.86,4.439,2.919,7.069,2.919s5.209-1.06,7.069-2.919c1.87-1.87,2.929-4.438,2.929-7.069
                      C226.737,438.475,225.677,435.905,223.808,434.047z"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M260.121,268.687c-1.86-1.859-4.439-2.919-7.069-2.919s-5.209,1.061-7.069,2.919c-1.86,1.87-2.929,4.449-2.929,7.079
                      c0,2.63,1.07,5.209,2.929,7.069c1.86,1.86,4.439,2.929,7.069,2.929s5.209-1.069,7.069-2.929c1.86-1.861,2.929-4.439,2.929-7.069
                      S261.981,270.557,260.121,268.687z"/>
                  </g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
              </svg>
           </span>
          </h2>
        </div>
      </div>
      <div className="row row2">
        <div className="col col1">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, voluptates? Rerum maiores accusamus molestiae adipisci.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab natus molestias dolorem necessitatibus quidem ea pariatur aut ex. Officiis, rem.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, aliquam.</p>
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
