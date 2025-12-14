import React, { useState, useEffect } from "react";
import Button from "../../components/button/button";
import Container from "../container/container";

import "./header.scss";

import Logo from "../../assets/icons/logo.svg";

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

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hidePosition, setHidePosition] = useState<number | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const companiesBlock = document.querySelector(".companies-block");

      if (companiesBlock) {
        const rect = companiesBlock.getBoundingClientRect();

        if (rect.top <= 0 && hidePosition === null) {
          setHidePosition(currentScrollY);
          setIsVisible(false);
        } else if (hidePosition !== null && currentScrollY <= hidePosition) {
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
        <a href="/" className="logo">
          <img alt="Logo" src={Logo} />
        </a>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? (
            <span className="material-symbols-outlined">close</span>
          ) : (
            <span className="material-symbols-outlined">dehaze</span>
          )}
        </button>

        <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
          {navItems.map((item) => {
            const hasChildren = item.children && item.children.length > 0;

            return (
              <a
                key={item.name}
                href={item.href}
                className="nav-item"
                onClick={() => setIsOpen(false)}
              >
                {item.name}

                {hasChildren && (
                  <span className={`material-symbols-outlined chevron`}>
                    keyboard_arrow_down
                  </span>
                )}
              </a>
            );
          })}
        </nav>

        <Button variant="primary" className="start-btn">
          Start building
        </Button>
      </Container>
    </header>
  );
};

export default Header;
