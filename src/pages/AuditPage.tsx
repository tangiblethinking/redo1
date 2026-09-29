import { AUDIT } from "@copy/audit";
import { SITE } from "@copy/site";

export function AuditPage() {
  return (
    <section>
      <p className="kicker">{AUDIT.kicker}</p>
      <h1>{AUDIT.headline}</h1>
      <p className="dek">{AUDIT.dek}</p>
      <ol>{AUDIT.steps.map((s) => <li key={s}>{s}</li>)}</ol>
      <a className="btn" href={`mailto:${SITE.email}`}>{AUDIT.cta}</a>
    </section>
  );
}
