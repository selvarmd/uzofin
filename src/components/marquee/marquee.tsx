/**
 * Marquee component that creates horizontal scrolling text animations
 * Uses GSAP for smooth infinite scrolling with customizable direction and speed
 */
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import "./marquee.scss";

import Arrow from "../../assets/icons/mdi-arrow-up.svg";

/**
 * Interface for individual marquee items
 */
export interface MarqueeItem {
  id: string; // Unique identifier
  heading: string; // Main heading text
  text: string; // Description text
}

/**
 * Props interface for MarqueeRow component
 */
interface MarqueeRowProps {
  items: MarqueeItem[]; // Array of items to display
  direction?: "left" | "right"; // Scroll direction
  speed?: number; // Animation duration in seconds
}

/**
 * MarqueeRow component that creates infinite horizontal scrolling animation
 * Duplicates items to create seamless looping effect
 * @param items - Array of marquee items to display
 * @param direction - Scroll direction (left or right)
 * @param speed - Animation speed in seconds
 * @returns Animated marquee row with infinite scroll
 */
const MarqueeRow: React.FC<MarqueeRowProps> = ({
  items,
  direction = "left",
  speed = 15,
}) => {
  const rowRef = useRef<HTMLDivElement>(null);

  // Duplicate items array to create seamless infinite loop effect
  const loopItems = [...items, ...items];

  // Set up GSAP animation for infinite scrolling
  useLayoutEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const track = row.querySelector(".marquee-track") as HTMLElement;
    if (!track) return;

    // Calculate half width for seamless loop (since items are duplicated)
    const trackWidth = track.scrollWidth / 2;

    // Set initial position based on direction
    gsap.set(track, {
      x: direction === "right" ? -trackWidth : 0,
    });

    // Create infinite scrolling animation
    gsap.to(track, {
      x: direction === "right" ? 0 : -trackWidth,
      duration: speed,
      ease: "none", // Linear movement for consistent speed
      repeat: -1, // Infinite repeat
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
        {/* Render duplicated items for seamless loop */}
        {loopItems.map((item, index) => (
          <div className={`marquee-item marquee-${item.id}`} key={index}>
            {/* Item content wrapper */}
            <div className="item-wrapper">
              <p className="heading">{item.heading}</p>
              <p className="desc">{item.text}</p>
            </div>
            {/* Arrow icon for visual consistency */}
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
