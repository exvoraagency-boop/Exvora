import styles from "./Work.module.css";

const cases = [
  {
    img: "/images/banner2.png",
    tag: "Brand System",
    title: "Identity built to scale",
    metric: "+212% brand recall",
  },
  {
    img: "/images/banner1.png",
    tag: "Campaign",
    title: "Full-funnel paid social",
    metric: "4.8x return on ad spend",
  },
];

export default function Work() {
  return (
    <section className={`section ${styles.sec}`} id="work">
      <div className="wrap">
        <div className={`section-head reveal ${styles.head}`}>
          <p className="eyebrow">Selected work</p>
          <h2>Brands we&apos;ve built momentum for.</h2>
          <p>
            A look at the kind of identity and campaign work EXVORA delivers —
            crafted to look premium and engineered to perform.
          </p>
        </div>

        <div className={styles.grid}>
          {cases.map((c, i) => (
            <article
              key={c.title}
              className={`${styles.case} reveal`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={styles.media}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt={c.title} loading="lazy" />
                <span className={styles.tag}>{c.tag}</span>
              </div>
              <div className={styles.meta}>
                <h3>{c.title}</h3>
                <span className={`${styles.metric} gold-text`}>{c.metric}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
