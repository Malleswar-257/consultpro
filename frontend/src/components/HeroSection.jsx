import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <h1>Welcome to ConsultPro</h1>
      <p>We provide professional business consulting services</p>
      <button>Get Started</button>
    </section>
  );
}