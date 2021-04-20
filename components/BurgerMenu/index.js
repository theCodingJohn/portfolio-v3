import { useEffect } from "react";
import style from "./burger-menu.module.scss";

const BurgerMenu = ({ menuLinksTl, menuTl }) => {
  useEffect(() => {
    menuTl
      .fromTo(
        ".burger-line",
        {
          background: "#fff",
        },
        {
          background: "#f7a344",
        }
      )
      .to(
        ".center",
        {
          opacity: 0,
        },
        0
      )
      .to(
        ".top",
        {
          y: "0.515625rem", // 8.25px
        },
        0
      )
      .to(
        ".bottom",
        {
          y: "-0.515625rem", // 8.25px
        },
        0
      )
      .to(
        ".top",
        {
          rotate: 45,
          scaleX: 0.8,
        },
        0.2
      )
      .to(
        ".bottom",
        {
          rotate: -45,
          scaleX: 0.8,
        },
        0.2
      )
      .reverse();
    // eslint-disable-next-line
  }, []);

  const handleClick = () => {
    menuTl.reversed(!menuTl.reversed());
    menuLinksTl.reversed(!menuLinksTl.reversed());
  };

  return (
    <button onClick={handleClick} className={`${style.burgerMenu}`}>
      <div className={`${style.burgerLine} ${style.top} burger-line top`}></div>
      <div
        className={`${style.burgerLine} ${style.center} burger-line center`}
      ></div>
      <div
        className={`${style.burgerLine} ${style.bottom} burger-line  bottom`}
      ></div>
    </button>
  );
};

export default BurgerMenu;
