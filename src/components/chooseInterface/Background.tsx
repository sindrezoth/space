import React from "react";
import styles from "./Background.module.css";

export async function Background({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}></div>
        <div className={styles.lefttop}></div>
      </div>
      {children}
    </>
  );
}
