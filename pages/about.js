import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h3>Hello, My name is Dani</h3>
        <Link href="/">
          <a>Go to home</a>
        </Link>
      </main>
    </div>
  );
}
