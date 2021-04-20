import Head from "next/head";
import styled from "styled-components";
import style from "../styles/Home.module.scss";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <main className={style.home}>
        <Hero />
      </main>
      <Footer />
    </>
  );
};

// const getToken = async () => {
//   try {
//     const params = new URLSearchParams();
//     params.append("grant_type", "refresh_token");
//     params.append("refresh_token", `${process.env.REACT_APP_REFRESH_TOKEN}`);

//     const config = {
//       headers: {
//         authorization: `Basic ${process.env.REACT_APP_SPOTIFY_AUTHORIZATION}`,
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//     };
//     const res = await axios.post(
//       "https://accounts.spotify.com/api/token",
//       params,
//       config
//     );
//     return res.data.access_token;
//   } catch (e) {
//     console.log(e);
//   }
// };

// export const getStaticProps = async (context) => {
//   const token = await getToken();
//   const config = { headers: { authorization: `Bearer ${token}` } };
//   const res = await axios.get(
//     "https://api.spotify.com/v1/me/player/currently-playing",
//     config
//   );

//   return {
//     props: {
//       nowPlaying: res.data.item,
//     },
//   };
// };

export default HomePage;
