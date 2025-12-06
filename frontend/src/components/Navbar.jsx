import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/services">Services</Link>
      <Link href="/expertise">Expertise</Link>
      <Link href="/testimonials">Testimonials</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}