import { Link, useParams } from "react-router-dom";
import { SERVICE_BUCKETS, SERVICE_OFFERS } from "@copy/services";

export function ServicePage() {
  const { slug } = useParams();
  const service = SERVICE_BUCKETS.find((s) => s.slug === slug);
  if (!service) return <p>Not found.</p>;
  const offers = SERVICE_OFFERS.filter((o) => o.bucket === service.slug);
  return (
    <section>
      <p className="kicker">{service.kicker}</p>
      <h1>{service.title}</h1>
      <p className="dek">{service.dek}</p>
      <p>{service.answer}</p>
      <ul>{service.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
      {offers.length > 0 && (
        <div className="cards">
          {offers.map((o) => (
            <article key={o.id} className="card">
              <h3>{o.name}</h3>
              <p>{o.copy}</p>
            </article>
          ))}
        </div>
      )}
      <Link className="btn" to="/audit">Get Your Discovery Audit</Link>
    </section>
  );
}
