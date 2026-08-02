"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "HOME" },
  { href: "/work", label: "WORK" },
  { href: "/reels", label: "REELS" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

export default function Nav({ transparent = false }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className={`nav${transparent && !open ? "" : " dark-bg"}`}>
      <Link href="/" className="brand">STEPHY</Link>

      <button
        className="nav-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={`nav-toggle-bar${open ? " open" : ""}`}></span>
        <span className={`nav-toggle-bar${open ? " open" : ""}`}></span>
      </button>

      <div className={`nav-links${open ? " open" : ""}`}>
        {LINKS.flatMap((link, i) => {
          const isActive =
            link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
          const item = (
            <Link key={link.href} href={link.href} className={isActive ? "active" : ""}>
              {link.label}
            </Link>
          );
          if (i === LINKS.length - 1) return [item];
          return [item, <span key={`${link.href}-sep`} className="sep">/</span>];
        })}
      </div>

      <div
        className={`nav-overlay${open ? " open" : ""}`}
        onClick={() => setOpen(false)}
      ></div>
    </nav>
  );
}
