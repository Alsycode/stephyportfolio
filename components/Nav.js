"use client";

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

  return (
    <nav className={`nav${transparent ? "" : " dark-bg"}`}>
      <Link href="/" className="brand">STEPHY</Link>
      <div className="nav-links">
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
    </nav>
  );
}
