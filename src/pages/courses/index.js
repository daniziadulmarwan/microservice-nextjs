import Head from "next/head";
import Link from "next/link";
import courses from "src/constants/api/courses";
import Header from "src/parts/Header";

function About({ data }) {
  return (
    <>
      <Head>
        <title>Micro</title>
      </Head>
      <div className="w-full mx-auto bg-indigo-600 px-4 py-4">
        <Header></Header>
      </div>
      <section
        className="pt-10 relative overflow-hidden container text-center"
        style={{ height: 660 }}
      >
        <h3 className="text-teal-500 text-6xl">About Page</h3>
      </section>
    </>
  );
}

// About.getInitialProps = async (props) => {
//   const { id } = props.query;
//   try {
//     const data = await courses.details(id);
//     return { data };
//   } catch (error) {
//     console.log(error.message);
//   }
// };

export default About;
