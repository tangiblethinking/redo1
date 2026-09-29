import { Link } from "react-router-dom";
import { PRICING } from "@copy/pricing";

export function PricingPage() {
  return (
    <section>
      <p className="kicker">{PRICING.kicker}</p>
      <h1>{PRICING.headline}</h1>
      <p className="dek">{PRICING.dek}</p>
      <div className="cards">
        {PRICING.tiers.map((t) => (
          <article key={t.name} className="card">
            <h2>{t.name}</h2>
            <p className="kicker">{t.price} · {t.period}</p>
            <ul>{t.points.map((p) => <li key={p}>{p}</li>)}</ul>
            <Link className="btn" to={t.href}>{t.cta}</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
