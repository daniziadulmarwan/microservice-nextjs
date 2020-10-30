import Head from "next/head";
import Link from "next/link";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import Clients from "../parts/Clients";
import ListCourses from "../parts/ListCourses/index";
import ListCategories from "src/parts/ListCategories";
import Footer from "src/parts/Footer";
import courses from "src/constants/api/courses";

function Home({ data }) {
  console.log(data);
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
        <section className="container mx-auto pt-24">
          <ListCategories></ListCategories>
        </section>
        <section className="mt-24 bg-indigo-1000 py-12">
          <Footer></Footer>
        </section>
      </main>
    </div>
  );
}

Home.getInitialProps = async () => {
  try {
    const res = await courses.all();
    return { data: res.data.data };
  } catch (error) {
    return error;
  }
};

export default Home;
