import styles from "./Logos.module.css";

const items = [
  "STRATEGY",
  "BRANDING",
  "PAID SOCIAL",
  "CONTENT",
  "SEO",
  "WEB DESIGN",
  "PERFORMANCE",
  "ANALYTICS",
];

export default function Logos() {
  return (
    <section className={styles.strip} aria-label="Capabilities">
      <div className={styles.track}>
        {[...items, ...items].map((t, i) => (
          <span key={i} className={styles.item}>
            <i className={styles.dot} />
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
