import styles from "./Process.module.css";

const steps = [
  {
    n: "01",
    title: "Discover",
    desc: "We learn your business, your offer and your ideal customer — so the ads speak to the people most likely to buy.",
  },
  {
    n: "02",
    title: "Create",
    desc: "We build the ad creative and copy and set up your campaigns properly, with tracking wired in from day one.",
  },
  {
    n: "03",
    title: "Launch",
    desc: "Your ads go live on Meta and TikTok. We watch the numbers closely in the first days and adjust fast.",
  },
  {
    n: "04",
    title: "Optimise",
    desc: "We double down on what's working, cut what isn't, and keep improving cost-per-result as the campaign matures.",
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
