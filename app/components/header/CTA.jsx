import React from "react";
import styles from './Header.module.css';

const CTA = () => {
  return (
    <div className={styles.cta}>
      <a href='/assets/tmpcvfile.pdf' download className="btn">Download CV</a>
      <a href="#contact" className="btn btn-primary">Lets talk</a>
    </div>
  );
};

export default CTA;
