import Head from "next/head";
import Link from "next/link";
import courses from "src/constants/api/courses";

function About({ data }) {
  return (
    <>
      <Head>
        <title>Micro</title>
      </Head>
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
