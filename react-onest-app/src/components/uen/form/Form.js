import React, { useState } from "react";
import { useForm } from "react-hook-form";

import styles from "./Form.module.css";

const Form = () => {
  const [valid, setValid] = useState(false);
  const [uen, setUen] = useState();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    setValid(true);
    setUen(data.uen);
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1 className={styles.validation}>Validation</h1>
        </div>
        <div>
          <label className={styles.uen}>UEN</label>
          <input
            className={styles.input}
            placeholder="Enter UEN"
            {...register("uen", {
              required: true,
              pattern:
                /^[TSR]\d{2}(LP|LL|FC|PF|RF|MQ|MM|NB|CC|CS|MB|FM|GS|DP|CP|NR|CM|CD|MD|HS|VH|CH|MH|CL|XL|CX|HC|RP|TU|TC|FB|FN|PA|PB|SS|MC|SM|GA|GB)\d{4}[A-Z]$/i,
            })}
          />
          <p className={styles.error}>
            {errors.uen?.type === "required" && "UEN is required"}
            {errors.uen?.type === "pattern" && "Entered UEN is in wrong format"}
          </p>
        </div>
        <div>
          <input className={styles.button} type="submit" value="Check"></input>
        </div>
        {valid ? <p>{uen} is valid</p> : <p></p>}
      </form>
    </div>
  );
};

export default Form;
