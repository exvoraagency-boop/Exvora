import styles from "./Work.module.css";

export default function Work() {
  return (
    <section className={`section ${styles.sec}`} id="work">
      <div className="wrap">
        <div className={`section-head reveal ${styles.head}`}>
          <p className="eyebrow">Our work</p>
          <h2>Built on a brand we believe in.</h2>
          <p>
            EXVORA started by building its own identity from the ground up — the
            same care we bring to every campaign. Client case studies are on the
            way as we onboard our first founding partners.
          </p>
        </div>

        <div className={styles.brandShowcase}>
          <article className={`${styles.brandCard} reveal`}>
            <div className={styles.media}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/banner2.png" alt="EXVORA brand identity" loading="lazy" />
            </div>
            <div className={styles.meta}>
              <span className={styles.tag}>Brand Identity</span>
              <h3>The EXVORA identity</h3>
              <p>
                Logo system, gold-on-black visual language, and brand
                guidelines — designed in-house to feel premium and unmistakable.
              </p>
            </div>
          </article>

          <div className={`${styles.soon} reveal`}>
            <div className={styles.soonInner}>
              <span className={styles.soonLabel}>Coming soon</span>
              <h3>Client case studies</h3>
              <p>
                We&apos;re currently onboarding our first founding clients. Real
                campaigns, real numbers, shared here as they roll in.
              </p>
              <a href="#contact" className={styles.soonCta}>
                Become a founding client
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
