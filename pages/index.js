import Head from "next/head";
import styled from "styled-components";
import style from "./index.module.scss";

import { Header, Hero } from "../components";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Main className={style.home}>
        <Hero />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding-top: 3.75rem;
`;

export default HomePage;
