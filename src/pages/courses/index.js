import Head from "next/head";
import Link from "next/link";
import courses from "src/constants/api/courses";

function DetailCourse({ data }) {
  return (
    <>
      <Head>
        <title>Micro</title>
      </Head>
      <section
        className="pt-10 relative overflow-hidden"
        style={{ height: 660 }}
      ></section>
    </>
  );
}

DetailCourse.getInitialProps = async (props) => {
  const { id } = props.query;
  try {
    const data = await courses.details(id);
    return { data };
  } catch (error) {
    console.log(error.message);
  }
};

export default About;
