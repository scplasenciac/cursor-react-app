import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">FitMatch</Link>
      </div>
      <div className={styles.links}>
        <Link href="/" className={styles.link}>
          Inicio
        </Link>
        <Link href="/booking" className={styles.link}>
          Reservar Cancha
        </Link>
        <Link href="/bmi" className={styles.link}>
          Calculadora IMC
        </Link>
      </div>
    </nav>
  );
} 