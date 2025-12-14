"use client";

import React, { useEffect, useMemo, useRef } from "react";
import {
  animate,
  motion,
  MotionValue,
  useMotionValue,
  useTransform,
} from "framer-motion";
import CarouselItem from "./carouselItem";
import "./carousel.scss";

/**
 * Carousel component props interface
 */
interface CarouselProps {
  items: Array<{
    id: string;
    title: string;
    description: string;
    icon?: string;
  }>; // Array of carousel items to display
  autoplay?: boolean; // Enable automatic sliding
  autoplayDelay?: number; // Delay between auto slides
}

/**
 * Get responsive spacing and card width values based on screen size
 * Adjusts carousel layout for different viewport widths
 * @returns Object with spacing and cardWidth values
 */
const getResponsiveValues = () => {
  // Server-side rendering fallback
  if (typeof window === "undefined") return { spacing: 25, cardWidth: 20 };

  const width = window.innerWidth;
  // Mobile devices
  if (width < 576) return { spacing: 50, cardWidth: 40 };
  // Tablet devices
  if (width < 1200) return { spacing: 35, cardWidth: 30 };
  // Small desktop
  if (width < 1400) return { spacing: 35, cardWidth: 40 };
  // Medium desktop
  if (width < 1600) return { spacing: 30, cardWidth: 60 };
  // Large desktop
  return { spacing: 25, cardWidth: 40 };
};

/**
 * Individual carousel card component with 3D positioning and animations
 * Handles the positioning, scaling, and visual effects for each carousel item
 * @param item - Carousel item data
 * @param idx - Item index in the carousel
 * @param itemsLength - Total number of items
 * @param progress - Motion value for carousel progress
 * @returns Animated carousel card with 3D effects
 */
function CarouselCard({
  item,
  idx,
  itemsLength,
  progress,
}: {
  item: { id: string; title: string; description: string; icon?: string };
  idx: number;
  itemsLength: number;
  progress: MotionValue<number>;
}) {
  // Calculate relative position of this card in the carousel
  const rel = useTransform(progress, (p) => {
    let r = idx - p;
    const halfLength = itemsLength / 2;
    // Wrap around logic for infinite scroll effect
    while (r > halfLength) r -= itemsLength;
    while (r < -halfLength) r += itemsLength;
    return r;
  });

  const { spacing } = getResponsiveValues();
  // Horizontal positioning based on relative position
  const x = useTransform(rel, (r) => `${r * spacing}vw`);

  // Vertical positioning with curved path effect
  const y = useTransform(
    rel,
    [-3, -2, -1, 0, 1, 2, 3],
    [30, 30, -20, 60, -20, 30, 30]
  );

  // Scale effect - center card is slightly larger
  const scale = useTransform(rel, (r) => {
    const d = Math.abs(r);
    if (d < 1) {
      return 1 + 0.05 * (1 - d);
    }
    return 1;
  });

  // Opacity - all cards remain visible
  const opacity = useTransform(rel, () => {
    return 1;
  });

  // Z-index for proper layering - center cards appear on top
  const zIndex = useTransform(rel, (r) => {
    const d = Math.abs(r);
    return Math.round(10 - d);
  });

  return (
    <motion.div
      className="carousel-card"
      style={{
        x,
        y,
        scale,
        opacity,
        zIndex,
        width: `${getResponsiveValues().cardWidth}vw`,
        maxWidth: "350px",
      }}
    >
      <CarouselItem item={item} isActive={false} />
    </motion.div>
  );
}

/**
 * Main Carousel component with infinite scroll and autoplay functionality
 * Creates a 3D carousel effect with smooth animations and responsive design
 * @param items - Array of carousel items to display
 * @param autoplay - Enable automatic progression
 * @param autoplayDelay - Delay between automatic slides (unused in current implementation)
 * @returns Animated carousel with infinite scroll
 */
export default function Carousel({
  items = [],
  autoplay = true,
  autoplayDelay = 3500,
}: CarouselProps) {
  // Force re-render on window resize for responsive updates
  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);

  // Create extended items array for infinite scroll effect
  // Triples the items (prev, current, next) to enable seamless looping
  const extendedItems = useMemo(() => {
    return [
      ...items.map((i) => ({ ...i, uniqueId: `${i.id}-prev` })),
      ...items.map((i) => ({ ...i, uniqueId: `${i.id}-curr` })),
      ...items.map((i) => ({ ...i, uniqueId: `${i.id}-next` })),
    ];
  }, [items]);

  // Motion value to track carousel progress
  const progress = useMotionValue(items.length);
  // Reference to current animation for cleanup
  const autoplayRef = useRef<ReturnType<typeof animate> | null>(null);

  // Handle window resize to update responsive values
  useEffect(() => {
    const handleResize = () => forceUpdate();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay effect - continuously moves carousel forward
  useEffect(() => {
    if (!autoplay || items.length === 0) return;

    let cancelled = false;
    const pauseMs = 50; // Brief pause between animations
    const moveDurationSec = 5; // Duration of each slide animation

    // Recursive function to handle continuous autoplay
    const step = async () => {
      if (cancelled) return;

      const current = progress.get();
      const next = current + 1;

      // Animate to next position
      await new Promise<void>((resolve) => {
        autoplayRef.current = animate(progress, next, {
          duration: moveDurationSec,
          ease: [0.25, 0.1, 0.25, 1], // Smooth easing curve
          onComplete: () => resolve(),
        });
      });

      if (cancelled) return;

      // Reset position when reaching the end for infinite loop
      if (next >= items.length * 2) {
        progress.set(items.length);
      }

      // Brief pause before next animation
      await new Promise((r) => setTimeout(r, pauseMs));

      // Continue the loop
      if (!cancelled) step();
    };

    step();

    // Cleanup function to stop animations
    return () => {
      cancelled = true;
      autoplayRef.current?.stop();
    };
  }, [autoplay, autoplayDelay, items.length, progress]);

  // Don't render if no items provided
  if (!items.length) return null;

  return (
    <div className="carousel-container">
      <div className="carousel-inner">
        <div className="carousel-content">
          {/* Render all extended items as carousel cards */}
          {extendedItems.map((item, idx) => (
            <CarouselCard
              key={item.uniqueId}
              item={item}
              idx={idx}
              itemsLength={extendedItems.length}
              progress={progress}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
