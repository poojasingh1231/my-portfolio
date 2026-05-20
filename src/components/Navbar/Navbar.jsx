import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          <span className="text-gradient">Pooja Singh</span>
        </a>
        <div className={styles.navLinks}>
          <a href="#about" className={styles.link}>About</a>
          <a href="#projects" className={styles.link}>Projects</a>
          <a href="#skills" className={styles.link}>Skills</a>
          <a href="#experience" className={styles.link}>Experience</a>
          <a href="#contact" className={styles.link}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
