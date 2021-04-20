import { useState, useEffect } from "react";
import Link from "next/link";
import style from "./mobile-nav.module.scss";
import { GithubIcon, CodepenIcon, LinkedinIcon } from "../../utils/svgs";
import gsap from "gsap";
import BurgerMenu from "../BurgerMenu";

const MobileNav = ({ links }) => {
  const [menuTl] = useState(gsap.timeline({ paused: true, duration: 0.2 }));
  const [menuLinksMobileTl] = useState(
    gsap.timeline({ paused: true, duration: 0.2 })
  );

  useEffect(() => {
    menuLinksMobileTl
      .to(".mobileNav .menu", {
        x: "16.625rem",
      })
      .reverse();
    // eslint-disable-next-line
  }, []);

  const navLinks = links.map((navlink, i) => (
    <li key={i}>
      <Link href={`#${navlink}`}>
        <a>{navlink}</a>
      </Link>
    </li>
  ));

  return (
    <nav className={`${style.mobileNav} mobileNav`}>
      <div className={style.row}>
        <div className={`${style.col} ${style.col1}`}>{/* logo here */}</div>
        <div className={`${style.col} ${style.col2}`}>
          <BurgerMenu menuTl={menuTl} menuLinksTl={menuLinksMobileTl} />
        </div>
      </div>
      <div className={`${style.menu} menu`}>
        <div className={`${style.col} ${style.col1}`}></div>
        <div className={`${style.col} ${style.col2}`}>
          <div></div>
          {navLinks}
          <div className={style.socialLinksContainer}>
            <a
              href="https://github.com/theCodingJohn"
              target="_blank"
              rel="noreferrer noopener"
              className={style.socialLink}
            >
              <GithubIcon />
            </a>
            <a
              href="https://codepen.io/jccnnn"
              target="_blank"
              rel="noreferrer noopener"
              className={style.socialLink}
            >
              <CodepenIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/john-carlo-cunanan-11847a17a"
              target="_blank"
              rel="noreferrer noopener"
              className={style.socialLink}
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
        <div className={`${style.col} ${style.col3}`}></div>
      </div>
    </nav>
  );
};

export default MobileNav;
