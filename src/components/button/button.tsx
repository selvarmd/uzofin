import React from "react";
import "./button.scss";

/**
 * Button component props interface
 * Extends native HTML button attributes with custom styling options
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"; // Button style variant
  children: React.ReactNode; // Button content/text
  endIcon?: React.ReactNode; // Optional icon at the end
  className?: string; // Additional CSS classes
}

/**
 * Reusable Button component with customizable variants
 * Supports primary and secondary styling with icon support
 * @param variant - Button style (primary/secondary)
 * @param children - Button content
 * @param className - Additional CSS classes
 * @returns Styled button element with consistent design
 */
const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className,
}) => {
  return (
    <button className={`btn ${variant} ${className}`}>
      {/* Button text content */}
      <span className="btn-text">{children}</span>
      {/* Icon container for styling */}
      <div className="btn-icon"></div>
      {/* Border styling element */}
      <span className="border-span"></span>
    </button>
  );
};

export default Button;
