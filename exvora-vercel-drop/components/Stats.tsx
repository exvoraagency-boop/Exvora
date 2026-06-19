import styles from "./Stats.module.css";

const points = [
  { v: "Bahrain-based", l: "Local team, local market knowledge" },
  { v: "Paid social", l: "Facebook, Instagram & TikTok ads" },
  { v: "Founding clients", l: "Now onboarding our first partners" },
  { v: "Results-focused", l: "We optimise for leads, not vanity metrics" },
];

export default function Stats() {
  return (
    <section className={styles.band}>
      <div className={styles.chev} aria-hidden="true" />
      <div className={`wrap ${styles.inner}`}>
        {points.map((s, i) => (
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
