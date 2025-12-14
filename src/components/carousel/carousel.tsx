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

interface CarouselProps {
  items: Array<{
    id: string;
    title: string;
    description: string;
    icon?: string;
  }>;
  autoplay?: boolean;
  autoplayDelay?: number;
}

const getResponsiveValues = () => {
  if (typeof window === "undefined") return { spacing: 25, cardWidth: 20 };

  const width = window.innerWidth;
  if (width < 576) return { spacing: 50, cardWidth: 40 };
  if (width < 1200) return { spacing: 35, cardWidth: 30 };
  if (width < 1400) return { spacing: 35, cardWidth: 40 };
  if (width < 1600) return { spacing: 30, cardWidth: 60 };
  return { spacing: 25, cardWidth: 40 };
};

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
  const rel = useTransform(progress, (p) => {
    let r = idx - p;
    const halfLength = itemsLength / 2;
    while (r > halfLength) r -= itemsLength;
    while (r < -halfLength) r += itemsLength;
    return r;
  });

  const { spacing } = getResponsiveValues();
  const x = useTransform(rel, (r) => `${r * spacing}vw`);

  const y = useTransform(
    rel,
    [-3, -2, -1, 0, 1, 2, 3],
    [30, 30, -20, 60, -20, 30, 30]
  );

  const scale = useTransform(rel, (r) => {
    const d = Math.abs(r);
    if (d < 1) {
      return 1 + 0.05 * (1 - d);
    }
    return 1;
  });

  const opacity = useTransform(rel, (r) => {
    return 1;
  });

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

export default function Carousel({
  items = [],
  autoplay = true,
  autoplayDelay = 3500,
}: CarouselProps) {
  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);

  const extendedItems = useMemo(() => {
    return [
      ...items.map((i) => ({ ...i, uniqueId: `${i.id}-prev` })),
      ...items.map((i) => ({ ...i, uniqueId: `${i.id}-curr` })),
      ...items.map((i) => ({ ...i, uniqueId: `${i.id}-next` })),
    ];
  }, [items]);

  const progress = useMotionValue(items.length);
  const autoplayRef = useRef<ReturnType<typeof animate> | null>(null);

  useEffect(() => {
    const handleResize = () => forceUpdate();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!autoplay || items.length === 0) return;

    let cancelled = false;
    const pauseMs = 50;
    const moveDurationSec = 5;

    const step = async () => {
      if (cancelled) return;

      const current = progress.get();
      const next = current + 1;

      await new Promise<void>((resolve) => {
        autoplayRef.current = animate(progress, next, {
          duration: moveDurationSec,
          ease: [0.25, 0.1, 0.25, 1],
          onComplete: () => resolve(),
        });
      });

      if (cancelled) return;

      if (next >= items.length * 2) {
        progress.set(items.length);
      }

      await new Promise((r) => setTimeout(r, pauseMs));

      if (!cancelled) step();
    };

    step();

    return () => {
      cancelled = true;
      autoplayRef.current?.stop();
    };
  }, [autoplay, autoplayDelay, items.length, progress]);

  if (!items.length) return null;

  return (
    <div className="carousel-container">
      <div className="carousel-inner">
        <div className="carousel-content">
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
