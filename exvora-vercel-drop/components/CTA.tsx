"use client";
import { useState } from "react";
import styles from "./CTA.module.css";

export default function CTA() {
  const [form, setForm] = useState({ name: "", email: "", company: "", msg: "" });

  const handle = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.MouseEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New project enquiry — ${form.name || "EXVORA"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.msg}`
    );
    window.location.href = `mailto:hello@exvoraagency.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className={`section ${styles.sec}`} id="contact">
      <div className={styles.glow} aria-hidden="true" />
      <div className={`wrap ${styles.inner}`}>
        <div className={`${styles.left} reveal`}>
          <p className="eyebrow">Let&apos;s talk</p>
          <h2 className={styles.title}>
            Ready to build a brand
            <br />
            that <span className="gold-text">grows?</span>
          </h2>
          <p className={styles.lead}>
            Tell us where you are and where you want to be. We&apos;ll come back
            with a clear, no-fluff plan for getting there.
          </p>

          <div className={styles.contacts}>
            <a href="mailto:hello@exvoraagency.com" className={styles.contactItem}>
              <span className={styles.cLabel}>Email</span>
              hello@exvoraagency.com
            </a>
            <a href="https://exvoraagency.com" className={styles.contactItem}>
              <span className={styles.cLabel}>Web</span>
              exvoraagency.com
            </a>
          </div>
        </div>

        <div className={`${styles.formCard} reveal`}>
          <div className={styles.field}>
            <label htmlFor="name">Your name</label>
            <input
              id="name"
              type="text"
              placeholder="Jane Doe"
              value={form.name}
              onChange={(e) => handle("name", e.target.value)}
            />
          </div>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="jane@brand.com"
                value={form.email}
                onChange={(e) => handle("email", e.target.value)}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="company">Company</label>
              <input
                id="company"
                type="text"
                placeholder="Brand Co."
                value={form.company}
                onChange={(e) => handle("company", e.target.value)}
              />
            </div>
          </div>
          <div className={styles.field}>
            <label htmlFor="msg">What do you need?</label>
            <textarea
              id="msg"
              rows={4}
              placeholder="A quick line on your goals…"
              value={form.msg}
              onChange={(e) => handle("msg", e.target.value)}
            />
          </div>
          <button className={styles.submit} onClick={submit}>
            Send enquiry
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
