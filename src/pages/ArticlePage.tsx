import { useParams } from "react-router-dom";
import { articleBySlug } from "@copy/resources";

export function ArticlePage() {
  const { slug } = useParams();
  const article = articleBySlug(slug ?? "");
  if (!article) return <p>Not found.</p>;
  return (
    <article>
      <p className="kicker">{article.kicker}</p>
      <h1>{article.title}</h1>
      <p className="dek">{article.dek}</p>
      <p>{article.answer}</p>
      {article.sections.map((s) => (
        <section key={s.heading}>
          <h2>{s.heading}</h2>
          {s.paragraphs.map((p) => <p key={p}>{p}</p>)}
        </section>
      ))}
      {article.faqs.map((f) => (
        <details key={f.q}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </article>
  );
}
