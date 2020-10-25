import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h3>Homepage</h3>
        <Link href="/about">
          <a className=""> Go to about page</a>
        </Link>
      </main>
    </div>
  );
}
