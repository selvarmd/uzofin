import React from "react";
import "./button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className,
}) => {
  return (
    <button className={`btn ${variant} ${className}`}>
      <span className="btn-text">{children}</span>
      <div className="btn-icon"></div>
      <span className="border-span"></span>
    </button>
  );
};

export default Button;
