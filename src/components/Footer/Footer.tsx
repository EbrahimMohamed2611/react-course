import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div>
      <ul className={[styles.listGroup, styles.fontcolor].join(" ")}>
        <li>By: Ebrahim Mohamed</li>
        <li>01024261189</li>
        <li>0566012843</li>
      </ul>
    </div>
  );
};
