import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <nav className="container mx-auto mt-12">
          <div className="flex justify-between items-center">
            <Link href="/">
              <a>
                <h3 className="text-xl">Marwan.</h3>
              </a>
            </Link>
            <ul className="flex">
              <li>
                <a href="" className="px-4 py-2">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="px-4 py-2">
                  About
                </a>
              </li>
              <li>
                <a href="" className="px-4 py-2">
                  Service
                </a>
              </li>
              <li>
                <a href="" className="px-4 py-2">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </main>
    </div>
  );
}
