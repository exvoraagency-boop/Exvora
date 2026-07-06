import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      {/* Ambient atmosphere */}
      <div className={styles.grain} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      {/* Signature: giant foil-stamped X bleeding off the right edge.
          Gold half is real foil — a sheen crosses it once on load. */}
      <div className={styles.stamp} aria-hidden="true">
        <span className={`${styles.stampHalf} ${styles.stampGold}`} />
        <span className={`${styles.stampHalf} ${styles.stampGhost}`} />
      </div>

      <div className={`wrap ${styles.inner}`}>
        <div className={styles.left}>
          <p className={`eyebrow ${styles.eb}`}>Paid Social Ads · Bahrain</p>

          <h1 className={styles.title}>
            <span className={styles.line}>Ads that bring</span>
            <span className={styles.line}>
              you <em className={`foil ${styles.foilHero}`}>customers.</em>
            </span>
          </h1>

          <p className={styles.sub}>
            EXVORA is a Bahrain-based agency focused on one thing: running
            Facebook, Instagram &amp; TikTok ad campaigns that put your business
            in front of the right people — and turn them into paying customers.
          </p>

          <div className={styles.actions}>
            <a href="#contact" className={styles.primary}>
              Start a project
            </a>
            <a href="#work" className={styles.secondary}>
              See our work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className={styles.tag}>
            <span>Your vision.</span>
            <span>Our strategy.</span>
            <span className="gold-text">Extraordinary results.</span>
          </div>
        </div>
      </div>

      <a href="#services" className={styles.scroll} aria-label="Scroll down">
        <span>Scroll</span>
        <span className={styles.scrollLine} />
      </a>
    </section>
  );
}
