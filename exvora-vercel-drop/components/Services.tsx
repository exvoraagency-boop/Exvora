import styles from "./Services.module.css";

const services = [
  {
    n: "01",
    title: "Strategy & Planning",
    desc: "We map the terrain before the first dollar is spent — audience research, positioning, and a campaign roadmap built to hit defined goals.",
    points: ["Market & audience research", "Brand positioning", "Channel strategy"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="2.5" fill="currentColor" />
        <path d="M24 6v6M24 36v6M6 24h6M36 24h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Branding & Design",
    desc: "Identities that look the part and earn trust — logo systems, visual language, and assets engineered for consistency across every touchpoint.",
    points: ["Visual identity", "Brand guidelines", "Creative direction"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 6c-9.94 0-18 8.06-18 18 0 5 4 8 9 8 3 0 4-2 4-4 0-1.5-1-2.5-1-4 0-1.66 1.34-3 3-3h3c5.52 0 10-4.48 10-10C34 9.5 29 6 24 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="16" cy="20" r="2" fill="currentColor" />
        <circle cx="24" cy="15" r="2" fill="currentColor" />
        <circle cx="31" cy="20" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Digital Marketing",
    desc: "Full-funnel campaigns across paid social, search, and content — creative that stops the scroll and copy that converts attention into action.",
    points: ["Paid social & search", "Content & creative", "Email & funnels"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M8 19v10l22 9V10L8 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M30 16c4 1 6 4 6 8s-2 7-6 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 29v6a2 2 0 0 0 2 2h3v-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Performance & Growth",
    desc: "We treat every campaign as a system to optimise — tracking, testing, and scaling the channels that return, cutting the ones that don't.",
    points: ["Conversion tracking", "A/B testing", "Scaling & reporting"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M8 40h32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="11" y="26" width="6" height="11" stroke="currentColor" strokeWidth="1.5" />
        <rect x="21" y="19" width="6" height="18" stroke="currentColor" strokeWidth="1.5" />
        <rect x="31" y="12" width="6" height="25" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 18l8-6 6 4 12-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M31 7h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">What we do</p>
          <h2>
            Four pillars,
            <br />
            one growth engine.
          </h2>
          <p>
            EXVORA is built like a system. Each service stands on its own — but
            together they compound into momentum your competitors can&apos;t
            buy back.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <article
              key={s.n}
              className={`${styles.card} reveal`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className={styles.top}>
                <span className={styles.icon}>{s.icon}</span>
                <span className={styles.num}>{s.n}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul>
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
