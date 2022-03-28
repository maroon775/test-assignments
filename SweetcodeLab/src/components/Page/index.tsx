import React from "react";
import styles from "./Page.module.scss";
import HintIcon from "../icons/HintIcon";
interface PageProps {
  title: string;
  hint?: string;
}

const Page: React.FC<PageProps> = (props) => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>{props.title}</h1>
        <i title="lorem ipsum dolor sit amet">
          <HintIcon />
        </i>
      </header>
    </div>
  );
};

export default Page;
