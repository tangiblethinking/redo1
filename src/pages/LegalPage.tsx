import { PRIVACY, TERMS } from "@copy/legal";

export function LegalPage({ kind }: { kind: "privacy" | "terms" }) {
  const page = kind === "privacy" ? PRIVACY : TERMS;
  return (
    <section>
      <p className="kicker">{page.kicker}</p>
      <h1>{page.headline}</h1>
      {page.body.map((p) => <p key={p}>{p}</p>)}
    </section>
  );
}
