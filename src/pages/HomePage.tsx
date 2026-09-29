import { Link } from "react-router-dom";
import { HOME } from "@copy/home";
import { SERVICE_BUCKETS } from "@copy/services";
import { WORK, WORK_DISCLAIMER } from "@copy/work";
import { AskTheModel } from "../components/AskTheModel";

export function HomePage() {
  return (
    <>
      <section className="hero">
        <p className="kicker">{HOME.kicker}</p>
        <h1>{HOME.headline}</h1>
        <p className="dek">{HOME.subhead}</p>
        <div className="row">
          <Link className="btn" to={HOME.ctaPrimaryHref}>{HOME.ctaPrimary}</Link>
          <Link className="btn ghost" to={HOME.ctaSecondaryHref}>{HOME.ctaSecondary}</Link>
        </div>
      </section>
      <AskTheModel />
      <section>
        <p className="kicker">{HOME.servicesKicker}</p>
        <h2>{HOME.servicesTitle}</h2>
        <div className="cards">
          {SERVICE_BUCKETS.map((s) => (
            <Link key={s.slug} className="card" to={s.href}>
              <p className="kicker">{s.kicker}</p>
              <h3>{s.title}</h3>
              <p>{s.dek}</p>
            </Link>
          ))}
        </div>
        <Link to="/services">{HOME.servicesAll}</Link>
      </section>
      <section>
        <p className="kicker">{HOME.workKicker}</p>
        <h2>{HOME.workTitle}</h2>
        <p className="note">{WORK_DISCLAIMER}</p>
        <div className="cards">
          {WORK.map((w) => (
            <Link key={w.slug} className="card" to={`/work/${w.slug}`}>
              <p className="kicker">{w.sector} · {w.year}</p>
              <h3>{w.name}</h3>
              <p>{w.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
      <section>
        <p className="kicker">{HOME.whyKicker}</p>
        <h2>{HOME.whyTitle}</h2>
        {HOME.whyBody.map((p) => <p key={p}>{p}</p>)}
      </section>
      <section className="card">
        <p className="kicker">{HOME.offerKicker}</p>
        <h2>{HOME.offerTitle}</h2>
        <p>{HOME.offerDek}</p>
        <Link className="btn" to="/audit">{HOME.offerCta}</Link>
      </section>
      <section>
        <h2>{HOME.faqTitle}</h2>
        {HOME.faqs.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </section>
    </>
  );
}
