import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex h-96 flex-col items-center justify-center py-2  text-secondary">
      <Head>
        <title>Hello!</title>
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Righteous&text=surajck"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="flex w-full h-auto flex-1 flex-col items-center justify-center px-20 text-center font-body">
        <p className="mt-3 text-xl">hello i am</p>
        <h1 className="text-4xl text-primary font-title">suraj</h1>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <p className="mt-4 text-xl">
            find me on{" "}
            <a
              href="https://www.instagram.com/nareal_chutney/"
              className="text-seclight"
              target={"_blank"}
            >
              instagram
            </a>
            {", "}
            <a
              href="https://www.linkedin.com/in/surajck/"
              className="text-seclight"
              target={"_blank"}
            >
              linkedin
            </a>
            {", "}
            <a
              href="https://stackoverflow.com/users/3856259/surajck"
              className="text-seclight"
              target={"_blank"}
            >
              stackoverflow
            </a>
          </p>
        </div>
      </main>

      <footer className="fixed bottom-0 flex h-20 w-full items-center justify-center">
        <object
          type="image/svg+xml"
          data="/sign-logo.svg"
          width="80"
          height="80"
        ></object>
      </footer>
    </div>
  );
};

export default Home;
