import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      {/* Ambient atmosphere */}
      <div className={styles.grain} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      {/* Signature: layered gold chevrons + light streaks */}
      <div className={styles.chevrons} aria-hidden="true">
        <span className={styles.chev1} />
        <span className={styles.chev2} />
        <span className={styles.streak} />
        <span className={`${styles.streak} ${styles.streak2}`} />
      </div>

      <div className={`wrap ${styles.inner}`}>
        <div className={styles.left}>
          <p className={`eyebrow ${styles.eb}`}>Paid Social Ads · Bahrain</p>

          <h1 className={styles.title}>
            <span className={styles.line}>Ads that bring</span>
            <span className={styles.line}>
              you <span className="gold-text">customers.</span>
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

        {/* Big assembling X */}
        <div className={styles.mark} aria-hidden="true">
          <svg viewBox="0 0 100 100" className={styles.bigx}>
            <defs>
              <linearGradient id="hx-gold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f6dd9a" />
                <stop offset="42%" stopColor="#d4af5f" />
                <stop offset="78%" stopColor="#a9802f" />
                <stop offset="100%" stopColor="#e9c87a" />
              </linearGradient>
              <linearGradient id="hx-white" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#cfcfd4" />
              </linearGradient>
            </defs>
            <path
              className={styles.xGold}
              d="M8 6 H30 L58 50 L30 94 H8 L36 50 Z"
              fill="url(#hx-gold)"
            />
            <path
              className={styles.xWhite}
              d="M92 6 H70 L42 50 L70 94 H92 L64 50 Z"
              fill="url(#hx-white)"
            />
          </svg>
          <div className={styles.markRing} />
        </div>
      </div>

      <a href="#services" className={styles.scroll} aria-label="Scroll down">
        <span>Scroll</span>
        <span className={styles.scrollLine} />
      </a>
    </section>
  );
}
