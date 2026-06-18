import styles from "./Process.module.css";

const steps = [
  {
    n: "01",
    title: "Discover",
    desc: "We dig into your market, audience and numbers. No assumptions — just a clear read on where the opportunity actually is.",
  },
  {
    n: "02",
    title: "Design",
    desc: "Brand, message and creative come together into a positioning that's unmistakably yours and built to convert.",
  },
  {
    n: "03",
    title: "Deploy",
    desc: "Campaigns go live across the right channels, with tracking wired in from day one so every result is measurable.",
  },
  {
    n: "04",
    title: "Scale",
    desc: "We double down on what works, cut what doesn't, and compound the wins into predictable, repeatable growth.",
  },
];

export default function Process() {
  return (
    <section className={`section ${styles.sec}`} id="process">
      <div className="wrap">
        <div className={`section-head reveal ${styles.head}`}>
          <p className="eyebrow">How we work</p>
          <h2>A process built to compound.</h2>
          <p>
            Four phases, run on repeat. Each cycle sharpens the last — that&apos;s
            how short campaigns turn into long-term growth.
          </p>
        </div>

        <div className={styles.steps}>
          <div className={styles.rail} aria-hidden="true" />
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={`${styles.step} reveal`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={styles.node}>
                <span>{s.n}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
