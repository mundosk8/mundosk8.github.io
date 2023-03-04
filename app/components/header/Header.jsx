import React from 'react';
import Image from 'next/image';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={[styles.container, styles.headerContainer]}>
        <h5>Hello Im</h5>
        <h1>Edmundo Freitas</h1>
        <h5 className="text-light">Frontend developer</h5>
        <CTA />
        <HeaderSocials />

        <div className={styles.me}>
          <Image src="/assets/mario.png" alt="me" width={240} height={300} />
        </div>

        <a href='#contact' className={styles.scrollDown}>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header