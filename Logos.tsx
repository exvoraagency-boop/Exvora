.sec {
  background: var(--black);
}
.head {
  max-width: 760px;
}

.brandShowcase {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 24px;
}

.brandCard {
  border: 1px solid var(--line-soft);
  border-radius: 6px;
  overflow: hidden;
  background: var(--panel);
  transition: transform 0.5s var(--ease), border-color 0.5s var(--ease);
}
.brandCard:hover {
  transform: translateY(-6px);
  border-color: var(--line);
}
.media {
  position: relative;
  aspect-ratio: 1942 / 809;
  overflow: hidden;
  background: var(--black);
}
.media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s var(--ease);
}
.brandCard:hover .media img {
  transform: scale(1.04);
}
.meta {
  padding: 28px 30px 30px;
}
.tag {
  display: inline-block;
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--black);
  background: var(--gold-grad);
  padding: 6px 13px;
  border-radius: 2px;
  margin-bottom: 16px;
}
.meta h3 {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 12px;
}
.meta p {
  font-size: 0.96rem;
  color: var(--muted);
  line-height: 1.65;
  max-width: 460px;
}

.soon {
  border: 1px solid var(--line-soft);
  border-radius: 6px;
  background: linear-gradient(160deg, var(--panel-2), var(--ink));
  display: flex;
  align-items: center;
}
.soonInner {
  padding: 38px 34px;
}
.soonLabel {
  display: inline-block;
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
  border: 1px solid var(--line);
  padding: 6px 13px;
  border-radius: 2px;
  margin-bottom: 20px;
}
.soonInner h3 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 14px;
}
.soonInner p {
  font-size: 0.96rem;
  color: var(--muted);
  line-height: 1.65;
  margin-bottom: 26px;
}
.soonCta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--gold);
  transition: gap 0.3s var(--ease);
}
.soonCta:hover {
  gap: 16px;
}

@media (max-width: 820px) {
  .brandShowcase {
    grid-template-columns: 1fr;
  }
}
