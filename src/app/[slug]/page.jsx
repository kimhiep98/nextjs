import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import React from "react";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" fill alt="" className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>No Name</span>
              <span className={styles.date}>10.09.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              soluta quia numquam maxime aliquam nulla harum ullam temporibus
              est. Vero, voluptas sequi officia dolores corrupti assumenda natus
              expedita tempore doloremque?
            </p>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              soluta quia numquam maxime aliquam nulla
            </p>
            <p>
              Vero, voluptas sequi officia dolores corrupti assumenda natus
              expedita tempore doloremque?
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
