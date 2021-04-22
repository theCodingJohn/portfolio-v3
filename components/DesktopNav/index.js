import Link from "next/link";
import style from "./desktop-nav.module.scss";
import { GithubIcon, CodepenIcon, LinkedinIcon } from "../../utils/svgs";
import gsap from "gsap";
import BurgerMenu from "../BurgerMenu";
import { useEffect, useState } from "react";

const DesktopNav = ({ links }) => {
  const [menuTl] = useState(gsap.timeline({ paused: true, duration: 0.2 }));
  const [menuLinksDesktopTl] = useState(
    gsap.timeline({ paused: true, duration: 0.2 })
  );

  useEffect(() => {
    menuLinksDesktopTl
      .to(".desktopNav .menu", {
        x: "20.88rem",
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
    <nav className={`${style.desktopNav} desktopNav`}>
      <div className={`${style.row} ${style.row1}`}>{/* logo here */}</div>
      <div className={`${style.row} ${style.row2}`}>
        <h2 className={style.name}>
          <span>John</span> Cunanan
        </h2>
      </div>
      <div className={`${style.row} ${style.row3}`}>
        <div className="burger-container">
          <BurgerMenu menuTl={menuTl} menuLinksTl={menuLinksDesktopTl} />
        </div>
      </div>
      <div className={`${style.menu} menu`}>
        <div className={`${style.col} ${style.col1}`}></div>
        <div className={`${style.col} ${style.col2}`}>
          <div></div>
          {navLinks}
          <li>
            <Link href="mailto:codingjohn@outlook,com">
              <a>Contact</a>
            </Link>
          </li>
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

export default DesktopNav;
