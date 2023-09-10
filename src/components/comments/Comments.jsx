import Link from "next/link";
import styles from "./comments.module.css";
import React from "react";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <div className={styles.title}>Comments</div>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Write a comment ..."
            className={styles.input}
          />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}> No Name</span>
              <span className={styles.date}> 10.09.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
            optio esse perspiciatis, saepe sed cumque eaque nam cum a eveniet
            explicabo ratione dolorum expedita totam veniam aliquid voluptatum
            vel laudantium?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
