import React from "react";
import styles from "./cardList.module.css";
import Paginantion from "../pagination/Paginantion";
import Card from "../card/Card";

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Recent Posts</h1>
      <div className={styles.posts}>
        <div className={styles.post}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Paginantion />
    </div>
  );
};

export default CardList;
