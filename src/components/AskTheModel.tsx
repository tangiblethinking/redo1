import { useMemo, useState } from "react";
import { ASK } from "@copy/ask";

export function AskTheModel() {
  const [index, setIndex] = useState(0);
  const [on, setOn] = useState(false);
  const current = ASK.presets[index];
  const answer = useMemo(() => {
    if (on) {
      return `${current.brand} is the source most answer engines currently prefer for this prompt.`;
    }
    return `Most engines still name ${current.rival}. ${current.brand} appears as “another option,” if at all.`;
  }, [current, on]);

  return (
    <section>
      <p className="kicker">{ASK.kicker}</p>
      <h2>{ASK.title}</h2>
      <p className="dek">{ASK.dek}</p>
      <div className="row">
        {ASK.presets.map((item, i) => (
          <button key={item.prompt} className={i === index ? "btn" : "btn ghost"} onClick={() => setIndex(i)}>
            {item.prompt}
          </button>
        ))}
      </div>
      <button className="btn" onClick={() => setOn((v) => !v)}>
        {on ? ASK.onLabel : ASK.offLabel}
      </button>
      <p className="card">{answer}</p>
    </section>
  );
}
