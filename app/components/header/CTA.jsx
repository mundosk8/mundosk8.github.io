import React from "react";
import styles from './Header.module.css';

const CTA = () => {
  return (
    <div className={styles.cta}>
      <a href="/edmundo_freitas_cv.pdf" target="_blank" className="btn">Download CV</a>
      <a href="#contact" className="btn btn-primary">Lets talk</a>
    </div>
  );
};

export default CTA;
