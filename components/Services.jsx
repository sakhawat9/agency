/* eslint-disable @next/next/link-passhref */
import Image from "next/Image";
import Link from "next/link";
import styles from "../styles/Services.module.css";

const Services = ({ services }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>What we can do?</h1>
      <h1 className={styles.subtitle}>Services we can help you with</h1>
      <div className={styles.services}>
        {services.map((service) => (
          <Link key={service.id} href={`/products/${service.name}`}>
            <div className={styles.service}>
              <div className={styles.desc}>{service.desc}</div>
              <span className={styles.cat}>{service.title}</span>
              <div className={styles.media}>
                {service.video ? (
                  <video
                    src={`/img/${service.video}`}
                    autoPlay
                    muted
                    loop
                    className={styles.video}
                  ></video>
                ) : (
                  <Image
                    src={`/img/${service.photo}`}
                    alt={service.name}
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
                  />
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
