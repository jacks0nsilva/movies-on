import React from 'react';
import styles from '../styles/Footer.module.css';


const Footer = () => {
  return (
    <footer className={styles.footer}>
        <p>Desenvolvido com 🤍 por <a className={styles.link} href="https://github.com/jacks0nsilva" target='_blank'>Jackson</a></p>
    </footer>
  )
}

export default Footer