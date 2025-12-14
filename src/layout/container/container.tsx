import React from "react";
import "./container.scss";

/**
 * Props interface for Container component
 */
interface ContainerProps {
  children: React.ReactNode; // Content to be wrapped
  className?: string; // Additional CSS classes
}

/**
 * Container component that provides consistent max-width and centering
 * Used throughout the application for consistent layout structure
 * @param children - Content to be contained
 * @param className - Additional CSS classes for customization
 * @returns Centered container div with consistent styling
 */
function Container({ children, className }: ContainerProps) {
  return <div className={`container ${className || ''}`}>{children}</div>;
}

export default Container;
