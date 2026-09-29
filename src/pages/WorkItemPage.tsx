import { useParams } from "react-router-dom";
import { workBySlug } from "@copy/work";

export function WorkItemPage() {
  const { slug } = useParams();
  const item = workBySlug(slug ?? "");
  if (!item) return <p>Not found.</p>;
  return (
    <section>
      <p className="kicker">{item.sector} · {item.year}</p>
      <h1>{item.name}</h1>
      <p className="dek">{item.excerpt}</p>
      <h2>Challenge</h2>
      <p>{item.challenge}</p>
      <h2>Approach</h2>
      <ul>{item.approach.map((a) => <li key={a}>{a}</li>)}</ul>
      <h2>Results</h2>
      <div className="cards">
        {item.results.map((r) => (
          <article key={r.label} className="card">
            <p className="kicker">{r.label}</p>
            <h3>{r.value}</h3>
            <p>{r.detail}</p>
          </article>
        ))}
      </div>
      <blockquote>
        <p>{item.quote.text}</p>
        <footer>{item.quote.by}, {item.quote.role}</footer>
      </blockquote>
    </section>
  );
}
