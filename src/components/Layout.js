import Navbar from './Navbar';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
} 