import Head from "next/head";
import Post from "../components/post";
import Landing from "./landing/Landing";

export async function getStaticProps() {
  // fetch list of posts
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_page=1"
  );
  const postList = await response.json();
  return {
    props: {
      postList,
    },
  };
}

export default function IndexPage({ postList }) {
  return (
    <main>
      <Head>
        <title>Home page</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Righteous&text=surajck"
          rel="stylesheet"
        />
      </Head>

      <Landing />
    </main>
  );
}
