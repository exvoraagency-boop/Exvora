import styles from "./Services.module.css";

const supporting = [
  {
    title: "Creative & Ad Content",
    desc: "Scroll-stopping ad creative and copy built specifically to convert — the assets that make the ads actually work.",
  },
  {
    title: "Audience & Targeting",
    desc: "We find the people most likely to buy and put your offer in front of them, then refine as the data comes in.",
  },
  {
    title: "Tracking & Reporting",
    desc: "Proper conversion tracking and clear reporting, so you always know exactly what your ad spend is returning.",
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">What we do</p>
          <h2>
            One focus, done right:
            <br />
            paid social ads.
          </h2>
          <p>
            We&apos;re a specialist agency, not a do-everything shop. Right now
            we put all our energy into one thing — running paid ad campaigns on
            Meta and TikTok that bring local businesses real customers.
          </p>
        </div>

        {/* Primary service */}
        <article className={`${styles.primary} reveal`}>
          <div className={styles.primaryLeft}>
            <span className={styles.primaryIcon}>
              <svg viewBox="0 0 48 48" fill="none">
                <path d="M8 19v10l22 9V10L8 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M30 16c4 1 6 4 6 8s-2 7-6 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M12 29v6a2 2 0 0 0 2 2h3v-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </span>
            <span className={styles.primaryLabel}>Our core service</span>
          </div>
          <div className={styles.primaryBody}>
            <h3>Paid Social Advertising</h3>
            <p>
              Done-for-you Meta (Instagram &amp; Facebook) and TikTok ad
              campaigns. We handle the strategy, the creative, the targeting and
              the day-to-day optimisation — you focus on handling the new
              customers it brings in.
            </p>
            <ul>
              <li>Meta &amp; TikTok ad campaigns</li>
              <li>Campaign strategy &amp; setup</li>
              <li>Daily monitoring &amp; optimisation</li>
              <li>Clear, honest reporting</li>
            </ul>
          </div>
        </article>

        <p className={`${styles.supportingIntro} reveal`}>
          Everything that makes those campaigns perform:
        </p>

        <div className={styles.grid}>
          {supporting.map((s, i) => (
            <article
              key={s.title}
              className={`${styles.card} reveal`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
