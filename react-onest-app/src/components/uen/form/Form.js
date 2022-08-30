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
          <h1 className={styles.validation}>UEN Validation</h1>
        </div>
        <div>
          <label className={styles.uen}>UEN</label>
          <input
            className={styles.input}
            placeholder="Enter UEN"
            {...register("uen", {
              required: true,
              pattern:
                /(^[TSR]\d{2}(LP|LL|FC|PF|RF|MQ|MM|NB|CC|CS|MB|FM|GS|DP|CP|NR|CM|CD|MD|HS|VH|CH|MH|CL|XL|CX|HC|RP|TU|TC|FB|FN|PA|PB|SS|MC|SM|GA|GB)\d{4}[A-Z]$)|(^\d{8}[A-Z]$)|(^(18|19|20)\d{7}[A-Z]$)/i,
            })}
          />
          <p className={styles.error}>
            {errors.uen?.type === "required" && "UEN is required"}
            {errors.uen?.type === "pattern" &&
              "Entered UEN is in wrong format. UEN should be in nnnnnnnnX (Businesses registered with ACRA before 2009) or yyyynnnnnX (Local companies registered with ACRA before 2009) or TyyPQnnnnX (new UEN) format, where 'Tyy' / 'Syy' / 'yyyy'= year of issuance, T' represents '20', 'S' represents '19' and 'R' represents '18'. E.g. T08 means year 2008, S99 means year 1999 and R00 means year 1800; 'PQ' = Entity-type where 'P'= a alphabetical letter, 'Q' = an alpha-numeric digit, E.g. 'LL'= 'Limited Liability Partnership'; 'n' = a number; 'X' = a check alphabet; For example, the UEN for a limited liability partnership (LLP) formed on 1 January 2009 could be 'T09LL0001B'."}
          </p>
        </div>
        <div>
          <input className={styles.button} type="submit"></input>
        </div>
        {valid ? <p>{uen} is a valid UEN</p> : <p></p>}
      </form>
    </div>
  );
};

export default Form;
