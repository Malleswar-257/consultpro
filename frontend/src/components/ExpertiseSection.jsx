import styles from './ExpertiseSection.module.css';

export default function ExpertiseSection() {
  return (
    <section className={styles.expertiseSection}>
      <h2>Our Expertise</h2>
      <ul>
        <li>Expertise 1</li>
        <li>Expertise 2</li>
        <li>Expertise 3</li>
      </ul>
    </section>
  );
}