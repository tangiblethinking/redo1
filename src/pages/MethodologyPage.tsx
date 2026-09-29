import { Link } from "react-router-dom";
import { METHODOLOGY } from "@copy/methodology";

export function MethodologyPage() {
  return (
    <section>
      <p className="kicker">{METHODOLOGY.kicker}</p>
      <h1>{METHODOLOGY.headline}</h1>
      <p className="dek">{METHODOLOGY.dek}</p>
      {METHODOLOGY.steps.map((s) => (
        <article key={s.n} className="card">
          <p className="kicker">{s.n}</p>
          <h2>{s.title}</h2>
          <p>{s.copy}</p>
        </article>
      ))}
      <Link className="btn" to="/audit">{METHODOLOGY.cta}</Link>
    </section>
  );
}
