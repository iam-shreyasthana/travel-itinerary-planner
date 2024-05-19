import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/itinerary">Itinerary</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
