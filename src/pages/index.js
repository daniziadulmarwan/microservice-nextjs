import Head from "next/head";
import Link from "next/link";

import axios from "../configs/axios/index";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import Clients from "../parts/Clients";
import ListCourses from "../parts/ListCourses/index";

function Home({ data }) {
  return (
    <div>
      <Head>
        <title>BWAMicro</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <section className="header-clipping pt-10">
          <div className="absolute left-0 bottom-0">
            <img src="/images/circle-accent-1.svg" alt="circle" />
          </div>
          <div className="sunshine"></div>
          <div className="container mx-auto">
            <Header></Header>
            <Hero></Hero>
          </div>
        </section>
        <section className="container mx-auto pt-24">
          <Clients></Clients>
        </section>
        <section className="container mx-auto pt-24">
          <ListCourses data={data}></ListCourses>
        </section>
      </main>
    </div>
  );
}

Home.getInitialProps = async () => {
  try {
    const data = axios.get(`/courses`);
    return { data: data.data };
  } catch (error) {
    return error;
  }
};

export default Home;
