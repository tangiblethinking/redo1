import { Link } from "react-router-dom";
import { ARTICLES } from "@copy/resources";

export function ResourcesPage() {
  return (
    <section>
      <p className="kicker">Resources</p>
      <h1>Writing</h1>
      <div className="cards">
        {ARTICLES.map((a) => (
          <Link key={a.slug} className="card" to={`/resources/${a.slug}`}>
            <p className="kicker">{a.kicker} · {a.readMinutes} min</p>
            <h2>{a.title}</h2>
            <p>{a.dek}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
