import React, { useState, useEffect } from "react";
import Button from "../../components/button/button";
import Container from "../container/container";

import "./header.scss";

import Logo from "../../assets/icons/logo.svg";

/**
 * Navigation items configuration
 * Defines the main navigation structure with optional sub-menus
 */
const navItems = [
  { name: "AI Banking", href: "#aiBanking" },
  {
    name: "Payments",
    href: "#payments",
    children: [
      { name: "Payment Product", href: "#paymentProduct" },
      { name: "Payment Gateway", href: "#paymentGateway" },
    ],
  },
  {
    name: "Payouts",
    href: "#payouts",
    children: [
      { name: "Vendor Payment", href: "#vendorPayment" },
      { name: "Payout Links", href: "#payout-Links" },
    ],
  },
  { name: "Support", href: "#support" },
];

/**
 * Header component with responsive navigation and scroll-based visibility
 * Features mobile menu toggle and auto-hide functionality based on scroll position
 * Hides when companies block reaches top of viewport, shows when scrolling back up
 * @returns Responsive header with navigation and CTA button
 */
const Header: React.FC = () => {
  // State for mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);
  // State for header visibility based on scroll
  const [isVisible, setIsVisible] = useState(true);
  // Track scroll position where header was hidden
  const [hidePosition, setHidePosition] = useState<number | null>(null);

  // Toggle mobile menu open/closed
  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll-based header visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const companiesBlock = document.querySelector(".companies-block");

      if (companiesBlock) {
        const rect = companiesBlock.getBoundingClientRect();

        // Hide header when companies block reaches top of viewport
        if (rect.top <= 0 && hidePosition === null) {
          setHidePosition(currentScrollY);
          setIsVisible(false);
        } 
        // Show header when scrolling back up past hide position
        else if (hidePosition !== null && currentScrollY <= hidePosition) {
          setHidePosition(null);
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hidePosition]);

  return (
    <header className={`header ${!isVisible ? "hidden" : ""}`}>
      <Container className="header-container">
        {/* Brand logo linking to home */}
        <a href="/" className="logo">
          <img alt="Logo" src={Logo} />
        </a>

        {/* Mobile menu toggle button */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? (
            <span className="material-symbols-outlined">close</span>
          ) : (
            <span className="material-symbols-outlined">dehaze</span>
          )}
        </button>

        {/* Main navigation menu */}
        <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
          {navItems.map((item) => {
            // Check if navigation item has sub-menu items
            const hasChildren = item.children && item.children.length > 0;

            return (
              <a
                key={item.name}
                href={item.href}
                className="nav-item"
                onClick={() => setIsOpen(false)} // Close mobile menu on item click
              >
                {item.name}

                {/* Show dropdown arrow for items with children */}
                {hasChildren && (
                  <span className={`material-symbols-outlined chevron`}>
                    keyboard_arrow_down
                  </span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Call-to-action button */}
        <Button variant="primary" className="start-btn">
          Start building
        </Button>
      </Container>
    </header>
  );
};

export default Header;
