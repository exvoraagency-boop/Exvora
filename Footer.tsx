/* Primary service block */
.primary {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 0;
  background: linear-gradient(160deg, var(--panel), var(--ink));
  border: 1px solid var(--line);
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 56px;
}
.primaryLeft {
  background: linear-gradient(160deg, rgba(212, 175, 95, 0.10), transparent);
  border-right: 1px solid var(--line-soft);
  padding: 44px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
}
.primaryIcon {
  width: 64px;
  height: 64px;
  display: grid;
  place-items: center;
  color: var(--gold);
  border: 1px solid var(--line);
  border-radius: 6px;
  background: rgba(212, 175, 95, 0.05);
}
.primaryIcon svg {
  width: 34px;
  height: 34px;
}
.primaryLabel {
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
}
.primaryBody {
  padding: 44px 44px 44px 40px;
}
.primaryBody h3 {
  font-family: var(--font-display);
  font-size: 1.9rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 16px;
  letter-spacing: -0.01em;
}
.primaryBody > p {
  font-size: 1.04rem;
  color: var(--muted);
  line-height: 1.7;
  margin-bottom: 26px;
  max-width: 580px;
}
.primaryBody ul {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.primaryBody li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.94rem;
  color: var(--mist);
}
.primaryBody li::before {
  content: "";
  width: 7px;
  height: 7px;
  background: var(--gold);
  transform: rotate(45deg);
  flex-shrink: 0;
}

.supportingIntro {
  font-family: var(--font-display);
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--faint);
  margin-bottom: 24px;
}

/* Supporting cards */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.card {
  padding: 32px 30px;
  background: var(--ink);
  border: 1px solid var(--line-soft);
  border-radius: 4px;
  transition: transform 0.5s var(--ease), border-color 0.5s var(--ease);
}
.card:hover {
  transform: translateY(-5px);
  border-color: var(--line);
}
.card h4 {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 12px;
}
.card p {
  font-size: 0.93rem;
  color: var(--muted);
  line-height: 1.6;
}

@media (max-width: 820px) {
  .primary {
    grid-template-columns: 1fr;
  }
  .primaryLeft {
    flex-direction: row;
    align-items: center;
    border-right: 0;
    border-bottom: 1px solid var(--line-soft);
    padding: 28px 30px;
  }
  .primaryBody {
    padding: 32px 30px;
  }
  .primaryBody ul {
    grid-template-columns: 1fr;
  }
  .grid {
    grid-template-columns: 1fr;
  }
}
