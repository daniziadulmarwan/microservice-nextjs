import Head from "next/head";
import Link from "next/link";

function About({ data }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mt-12 mx-auto">
        <h1 className="text-6xl">Fetch random words</h1>
        <ul>
          {data.map((todo) => {
            return (
              <li key={todo.id} className="border border-indigo-700 p-4">
                {todo?.title ?? "-"}{" "}
                <Link href="/about/[id]" as={`/about/${todo.id}`}>
                  <a className="bg-indigo-900 p-1 text-white rounded">Launch</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

About.getInitialProps = async () => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => json);
    return { data };
  } catch (error) {
    console.log(error.message);
  }
};

export default About;
