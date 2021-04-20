import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import style from "./hero.module.scss";

const Hero = () => {
  const h1 = useRef(null);

  useEffect(() => {
    gsap.from(h1.current, { duration: 1, delay: 1, y: "5rem", opacity: 0 });
  }, [h1]);

  return (
    <section
      className={`${style.hero} ${style.bg} ${
        style[`mainBg0${Math.floor(Math.random() * 7) + 1}`]
      }`}
    >
      <div className={style.overlay}></div>
      <div className={style.row}>
        <div className="col">
          <h1 ref={h1}>
            Let's
            <br />
            Bring Ideas
            <br />
            In Digital World
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
