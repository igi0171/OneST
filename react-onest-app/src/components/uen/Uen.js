import React from "react";
import Form from "./form/Form";

import styles from "./Uen.module.css";

const Uen = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.card}>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Uen;
