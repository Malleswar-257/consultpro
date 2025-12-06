import styles from './TestimonialSection.module.css';

export default function TestimonialSection() {
  return (
    <section className={styles.testimonialSection}>
      <h2>Testimonials</h2>
      <ul>
        <li>Testimonial 1</li>
        <li>Testimonial 2</li>
        <li>Testimonial 3</li>
      </ul>
    </section>
  );
}