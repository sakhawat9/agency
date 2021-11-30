import Head from "next/head";
import Intro from "../components/intro";

export default function Home() {
  return (
    <div>
      <Head>
        <title>AGENCY APP</title>
        <meta
          name="description"
          content="The best intermediate web developer"
        />
      </Head>

      <Intro />
    </div>
  );
}
