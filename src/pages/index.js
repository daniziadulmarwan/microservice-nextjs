import Head from "next/head";
import Link from "next/link";

function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h3>Homepage</h3>
        <Link href="/contact">
          <a className=""> Go to contact page</a>
        </Link>
      </main>
    </div>
  );
}

export default Home;
