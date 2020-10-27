import Head from "next/head";
import Link from "next/link";

import axios from "configs/axios";

function Home(props) {
  console.log(props);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h3>Homepage</h3>
        <Link href="/about">
          <a className=""> Go to contact page</a>
        </Link>
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
