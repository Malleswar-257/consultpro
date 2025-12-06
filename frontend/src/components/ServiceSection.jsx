import styles from './ServiceSection.module.css';

export default function ServiceSection() {
  return (
    <section className={styles.serviceSection}>
      <h2>Our Services</h2>
      <ul>
        <li>Service 1</li>
        <li>Service 2</li>
        <li>Service 3</li>
      </ul>
    </section>
  );
}