import { Link } from "react-router-dom";
import { SERVICE_BUCKETS } from "@copy/services";

export function ServicesPage() {
  return (
    <section>
      <p className="kicker">Services</p>
      <h1>Discovery, engineered.</h1>
      <div className="cards">
        {SERVICE_BUCKETS.map((s) => (
          <Link key={s.slug} className="card" to={s.href}>
            <p className="kicker">{s.kicker}</p>
            <h2>{s.title}</h2>
            <p>{s.dek}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
