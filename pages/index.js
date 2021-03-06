import Head from "next/head";
import Intro from "../components/intro";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import { data } from "../data";

export default function Home({services}) {

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
      <Services services={services} />
      <Testimonials />
    </div>
  );
}

export const getStaticProps = async () => {
  const services = data;
  return {
    props: { services },
  };
};
