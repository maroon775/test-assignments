import React from "react";
import styles from "./Logotype.module.scss";
import logotype from "../../assets/logo.svg";

const Logotype: React.FC = () => {
    return (
        <a href="#" className={styles.logotype}>
            <img src={logotype} alt="Sitename" />
        </a>
    );
};

export default Logotype;
