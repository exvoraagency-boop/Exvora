import XMark from "./XMark";
import styles from "./Footer.module.css";

const social = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "X / Twitter", href: "#" },
  { label: "TikTok", href: "#" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.brandCol}>
          <a href="#top" className={styles.brand} aria-label="EXVORA home">
            <XMark size={34} />
            <span>EXVORA</span>
          </a>
          <p className={styles.tagline}>Marketing Agency</p>
          <p className={styles.blurb}>
            Strategy. Creativity. Results.
            <br />
            We build brands that grow.
          </p>
        </div>

        <div className={styles.linksCol}>
          <span className={styles.colHead}>Navigate</span>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>

        <div className={styles.linksCol}>
          <span className={styles.colHead}>Social</span>
          {social.map((s) => (
            <a key={s.label} href={s.href}>
              {s.label}
            </a>
          ))}
        </div>

        <div className={styles.linksCol}>
          <span className={styles.colHead}>Get in touch</span>
          <a href="mailto:hello@exvoraagency.com">hello@exvoraagency.com</a>
          <a href="https://exvoraagency.com">exvoraagency.com</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`wrap ${styles.bottomInner}`}>
          <span>© {new Date().getFullYear()} EXVORA Agency. All rights reserved.</span>
          <span className={styles.motto}>Your vision. Our strategy. Extraordinary results.</span>
        </div>
      </div>
    </footer>
  );
}
