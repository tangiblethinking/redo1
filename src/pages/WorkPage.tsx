import { Link } from "react-router-dom";
import { WORK, WORK_DISCLAIMER } from "@copy/work";

export function WorkPage() {
  return (
    <section>
      <p className="kicker">Case studies</p>
      <h1>Work</h1>
      <p className="note">{WORK_DISCLAIMER}</p>
      <div className="cards">
        {WORK.map((w) => (
          <Link key={w.slug} className="card" to={`/work/${w.slug}`}>
            <p className="kicker">{w.sector} · {w.year}</p>
            <h2>{w.name}</h2>
            <p>{w.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
