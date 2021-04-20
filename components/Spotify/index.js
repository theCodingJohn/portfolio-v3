import style from "./spotifyStyled.module.scss";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
const { Draggable } = require("gsap/dist/Draggable");

const SpotifyPlayer = ({ data }) => {
  const close = () => {
    const tl = gsap.timeline();
    tl.to(".spotify", { duration: 0.5, opacity: 0 }).to(".spotify", {
      duration: 0,
      scaleX: 0,
      delay: 0.5,
    });
  };

  const openLargeArtwork = () => {
    gsap.to(".spotify__image", { duration: 1, scale: 0 });
    gsap.to(".spotify__desc", {
      duration: 1,
      x: -50,
      width: "calc(100% + 50px)",
    });
    gsap.to(".spotify__equalizer", { duration: 1, x: -40 });
    gsap.to(".spotify__largeImage", { duration: 0, scaleY: 1 });
    gsap.to(".spotify__largeImage", { duration: 0.5, opacity: 1 });
  };

  const closeLargeArtwork = () => {
    gsap.to(".spotify__image", { duration: 1, scale: 1 });
    gsap.to(".spotify__desc", { duration: 1, x: -0, width: "100%" });
    gsap.to(".spotify__equalizer", { duration: 1, x: 0 });
    gsap.to(".spotify__largeImage", { duration: 0, scaleY: 0, delay: 0.5 });
    gsap.to(".spotify__largeImage", { duration: 0.5, opacity: 0 });
  };

  useEffect(() => {
    gsap.registerPlugin(Draggable);
    Draggable.create(".spotify", {
      bounds: document.getElementsByTagName("body"),
    });
  }, []);

  return (
    <div className={`${style.spotify} spotify`}>
      <div
        onClick={closeLargeArtwork}
        className={`${style.largeImage} spotify__largeImage`}
        style={{
          background: `url(${data.album.images[1].url}) no-repeat center`,
          backgroundSize: "cover",
        }}
      ></div>
      <div
        onClick={openLargeArtwork}
        className={`${style.image} spotify__image`}
        style={{
          background: `url(${data.album.images[2].url}) no-repeat center`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className={`${style.desc} spotify__desc`}>
        <p title={data.name} className={`${style.title} spotify__title`}>
          {data.name}
        </p>
        <p
          title={data.artists[0].name}
          className={`${style.artist} spotify__artist`}
        >
          {data.artists[0].name}
        </p>
      </div>
      <Image
        className={`${style.equalizer} spotify__equalizer`}
        src="/assets/desktop/spotify-gif.gif"
        alt="equalizer icon"
        height={18}
        width={18}
      />
      <svg
        onClick={close}
        className={style.closeButton}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
      </svg>
    </div>
  );
};

export default SpotifyPlayer;
