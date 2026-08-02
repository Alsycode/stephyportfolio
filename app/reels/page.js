"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Nav from "@/components/Nav";
import { REELS } from "@/data/reels";

export default function Reels() {
  const rowRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const row = rowRef.current;
    if (!row || !row.firstElementChild) return;
    const cardWidth = row.firstElementChild.getBoundingClientRect().width + 26;
    const index = Math.round(row.scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  return (
    <>
      <Nav />

      <main className="reels-page">
        <div className="reels-header">
          <h1 className="reels-title">Reels.</h1>
          <p className="reels-subtitle">SHORT-FORM STORIES, ONE FRAME AT A TIME.</p>
        </div>

        <div className="reels-row" ref={rowRef} onScroll={handleScroll}>
          {REELS.map((reel, i) => (
            <a
              key={i}
              href={reel.watchUrl}
              target="_blank"
              rel="noopener"
              className="reel-card"
            >
              <Image
                src={reel.image}
                alt={reel.caption}
                fill
                sizes="(max-width: 900px) 42vw, 260px"
                style={{ objectFit: "cover" }}
              />
              <div className="reel-card-overlay"></div>
              <div className="reel-play-btn">
                <svg width="18" height="18" viewBox="0 0 20 20">
                  <polygon points="4,2 18,10 4,18" />
                </svg>
              </div>
              <div className="reel-caption">{reel.caption}</div>
              <div className="reel-duration">{reel.duration}</div>
            </a>
          ))}
        </div>

        <div className="reels-dots">
          {REELS.map((_, i) => (
            <span key={i} className={`dot${i === activeIndex ? " active" : ""}`}></span>
          ))}
        </div>
      </main>
    </>
  );
}
