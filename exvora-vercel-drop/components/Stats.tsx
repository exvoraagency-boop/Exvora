import styles from "./Stats.module.css";

const stats = [
  { v: "120+", l: "Brands launched & scaled" },
  { v: "4.8x", l: "Average return on ad spend" },
  { v: "98%", l: "Client retention rate" },
  { v: "8M+", l: "Impressions driven monthly" },
];

export default function Stats() {
  return (
    <section className={styles.band}>
      <div className={styles.chev} aria-hidden="true" />
      <div className={`wrap ${styles.inner}`}>
        {stats.map((s, i) => (
          <div
            key={s.l}
            className={`${styles.stat} reveal`}
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <span className={`${styles.v} gold-text`}>{s.v}</span>
            <span className={styles.l}>{s.l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
