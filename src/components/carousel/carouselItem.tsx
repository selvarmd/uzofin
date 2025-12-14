"use client";
import { motion } from "framer-motion";

import "./carousel.scss";

import TaskIcon from "../../assets/icons/task-icon.svg";

/**
 * Props interface for CarouselItem component
 */
interface CarouselItemProps {
  item: {
    id: string;
    title: string;
    description: string;
    icon?: string;
  }; // Carousel item data
  isActive: boolean; // Whether this item is currently active (unused in current implementation)
}

/**
 * Individual carousel item component that displays content within each carousel card
 * Renders the title, description, and icon for each carousel item
 * @param item - The carousel item data to display
 * @returns Animated carousel item with title, description, and icon
 */
export default function CarouselItem({ item }: CarouselItemProps) {
  return (
    <motion.div className="carousel-item">
      <div className="carousel-item-content">
        <div className="carousel-item-inner">
          {/* Item title with data attribute for potential CSS effects */}
          <motion.h2 className="carousel-item-title" data-text={item.title}>
            {item.title}
          </motion.h2>

          {/* Item description with HTML content support */}
          <motion.p
            className="carousel-item-description"
            dangerouslySetInnerHTML={{ __html: item.description }}
          />

          {/* Static task icon for all items */}
          <div className="carousel-icon">
            <img alt="" src={TaskIcon} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
