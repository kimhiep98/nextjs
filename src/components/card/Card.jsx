import Image from "next/image";
import styles from "./card.module.css";
import React from "react";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.iamge} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
          eveniet, ullam, iste porro distinctio similique natus beatae maiores,
          laborum expedita suscipit harum facere sunt aliquid quo commodi
          molestiae molestias officiis.
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
