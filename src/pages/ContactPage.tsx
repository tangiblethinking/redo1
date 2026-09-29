import { CONTACT } from "@copy/contact";

export function ContactPage() {
  return (
    <section>
      <p className="kicker">{CONTACT.kicker}</p>
      <h1>{CONTACT.headline}</h1>
      <p className="dek">{CONTACT.dek}</p>
      <p><a className="btn" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
    </section>
  );
}
