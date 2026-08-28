import XMark from "./XMark";
import styles from "./Footer.module.css";

// Add your real profile URLs here. Leave a value as "" and that link
// simply won't appear — so there are never any dead links.
const social = [
  { label: "Instagram", href: "https://instagram.com/exvora.agency" },
  { label: "TikTok", href: "https://tiktok.com/@exvora.agency" },
  { label: "X / Twitter", href: "https://x.com/exvoraagency" },
].filter((s) => s.href);

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.brandCol}>
          <a href="#top" className={styles.brand} aria-label="EXVORA home">
            <XMark size={34} />
            <span>EXVORA</span>
          </a>
          <p className={styles.tagline}>Patient Acquisition · Bahrain</p>
          <p className={styles.blurb}>
            Strategic, data-driven ad campaigns
            <br />
            that bring you patients.
          </p>
        </div>

        <div className={styles.linksCol}>
          <span className={styles.colHead}>Navigate</span>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>

        {social.length > 0 && (
          <div className={styles.linksCol}>
            <span className={styles.colHead}>Social</span>
            {social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        )}

        <div className={styles.linksCol}>
          <span className={styles.colHead}>Get in touch</span>
          <a href="mailto:contact@exvoraagency.com">contact@exvoraagency.com</a>
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
