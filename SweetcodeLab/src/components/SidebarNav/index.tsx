import React from "react";
import styles from "./SidebarNav.module.scss";
import cx from "classnames";

interface SidebarNavProps {
  items: {
    isActive?: boolean;
    link: string;
    label: string;
  }[];
}

const SidebarNav: React.FC<SidebarNavProps> = (props) => {
  return (
    <ul className={styles.sidebarNav}>
      {props.items.map((item) => (
        <li
          className={cx(styles.item, {
            [styles.item_active]: Boolean(item.isActive)
          })}
          key={item.label}
        >
          <a className={styles.link} href={item.link}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SidebarNav;
