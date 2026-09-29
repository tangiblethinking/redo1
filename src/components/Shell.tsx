import type { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAV, SITE } from "@copy/site";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="site">
      <header className="header">
        <Link to="/" className="logo">{SITE.name}</Link>
        <nav>
          {NAV.map((item) => (
            <NavLink key={item.href} to={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <p>{SITE.name} · {SITE.tagline}</p>
        <p>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          {" · "}
          <Link to="/privacy">Privacy</Link>
          {" · "}
          <Link to="/terms">Terms</Link>
        </p>
      </footer>
    </div>
  );
}
