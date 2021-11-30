import Head from "next/head";
import styles from "../styles/Home.module.css";

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

      <h1 className={styles.title}>This is Home Page</h1>
    </div>
  );
}
