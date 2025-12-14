"use client";

import { motion } from "framer-motion";
import "./carousel.scss";

interface CarouselItemProps {
  item: {
    id: string;
    title: string;
    description: string;
    icon?: string;
  };
  isActive: boolean;
}

export default function CarouselItem({ item }: CarouselItemProps) {
  return (
    <motion.div className="carousel-item">
      <div className="carousel-item-content">
        <div className="carousel-item-inner">
          <motion.h2 className="carousel-item-title" data-text={item.title}>
            {item.title}
          </motion.h2>

          <motion.p 
            className="carousel-item-description"
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
        </div>
      </div>
    </motion.div>
  );
}
