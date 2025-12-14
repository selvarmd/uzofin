// src/components/Marquee/MarqueeRow.tsx
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import "./marquee.scss";

import Arrow from "../../assets/icons/mdi-arrow-up.svg";

export interface MarqueeItem {
  id: string;
  heading: string;
  text: string;
}

interface MarqueeRowProps {
  items: MarqueeItem[];
  direction?: "left" | "right";
  speed?: number;
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({
  items,
  direction = "left",
  speed = 15,
}) => {
  const rowRef = useRef<HTMLDivElement>(null);

  // Duplicate list to create seamless loop
  const loopItems = [...items, ...items];

  useLayoutEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const track = row.querySelector(".marquee-track") as HTMLElement;
    if (!track) return;

    const trackWidth = track.scrollWidth / 2;

    gsap.set(track, {
      x: direction === "right" ? -trackWidth : 0,
    });

    gsap.to(track, {
      x: direction === "right" ? 0 : -trackWidth,
      duration: speed,
      ease: "none",
      repeat: -1,
    });
  }, [direction, speed]);

  return (
    <div
      className="marquee-row"
      ref={rowRef}
      data-direction={direction}
      data-speed={speed}
    >
      <div className="marquee-track">
        {loopItems.map((item, index) => (
          <div className={`marquee-item marquee-${item.id}`} key={index}>
            <div className="item-wrapper">
              <p className="heading">{item.heading}</p>
              <p className="desc">{item.text}</p>
            </div>
            <div className="icon-wrapper">
              <img alt=" " src={Arrow} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeRow;
