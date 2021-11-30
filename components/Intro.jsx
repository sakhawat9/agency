import Image from "next/image";
import React from "react";
import styles from "../styles/Intro.module.css";

const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>AVOCADO</span> DIGITAL PRODUCT AGENCY
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugiat
          alias, possimus modi vitae aliquid?
        </p>
        <button className={styles.button}>DISCOVER</button>
      </div>
      <div className={styles.card}>
        <Image
          src="/img/Avocado.png"
          width="100%"
          height="100%"
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro;
