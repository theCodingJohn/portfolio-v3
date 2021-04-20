import Head from "next/head";
import styled from "styled-components";
import style from "../styles/Home.module.scss";

import Header from "../components/Header";
import Hero from "../components/Hero";

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
    </>
  );
};

export default HomePage;
