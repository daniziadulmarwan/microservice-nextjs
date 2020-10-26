import Head from "next/head";
import Link from "next/link";

function Todo({ data }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mt-12 mx-auto">
        <h1 className="text-6xl">Detail Data</h1>
        <div className="bg-indigo-300 ext-white p-3">
          <ul>
            <li>User Id: {data.userId}</li>
            <li>User Name: {data.title}</li>
          </ul>
        </div>
        <Link href="/about">
          <a>Back to About Page</a>
        </Link>
      </main>
    </div>
  );
}

Todo.getInitialProps = async (props) => {
  const { id } = props.query;
  try {
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((json) => json);
    return { data };
  } catch (error) {
    console.log(error.message);
  }
};

export default Todo;
