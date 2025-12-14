import React from "react";
import Container from "../../../layout/container/container";
import MarqueeRow from "../../../components/marquee/marquee";

import "./features.scss";

const itemsOne = [
  {
    id: "unified-dashboard",
    heading: "Unified Dashboard",
    text: "Manage banking, payments, and merchants in one place.",
  },
  {
    id: "ai-driven",
    heading: "AI-Driven Decisions",
    text: "Automate approvals, verification, and financial operations.",
  },
  {
    id: "unified-dashboard",
    heading: "Unified Dashboard",
    text: "Manage banking, payments, and merchants in one place.",
  },
  {
    id: "ai-driven",
    heading: "AI-Driven Decisions",
    text: "Automate approvals, verification, and financial operations.",
  },
];

const itemsTwo = [
  {
    id: "transparent-pricing",
    heading: "Transparent Pricing",
    text: "The flexibility to pay with various payment options like cards, wallets, etc.",
  },
  {
    id: "developer-friendly-api",
    heading: "Developer-Friendly APIs",
    text: "Build, integrate, and launch faster.",
  },
  {
    id: "enterprise-grade",
    heading: "Enterprise-Grade Security",
    text: "Bank-level encryption and compliance.",
  },
  {
    id: "developer-friendly-site",
    heading: "Developer-Friendly APIsite",
    text: "Build, integrate, and launch faster.",
  },
];

const itemsThree = [
  {
    id: "wai-driven",
    heading: "WAI-Driven Decisions",
    text: "Automate approvals, verification, and financial operations.",
  },
  {
    id: "scalable-infrastructure",
    heading: "Scalable Infrastructure",
    text: "Designed for startups to enterprises.",
  },
  {
    id: "enterprise-grade",
    heading: "Enterprise-Grade Security",
    text: "Bank-level encryption and compliance.",
  },
  {
    id: "developer-friendly-site",
    heading: "Developer-Friendly APIsite",
    text: "Build, integrate, and launch faster.",
  },
];

const Features: React.FC = () => {
  return (
    <section className="features-section">
      <Container>
        <div className="title-block">
          <h2 className="section-title">
            Why <span>UzOFin?</span>
          </h2>
          <p className="section-sub">
            Discover endless creativity with PromptVerse. Generate diverse
            content effortlessly using prompts. Stay updated with real-time
            trends, automate tasks, and extract insights from any document or
            URL. All within a sleek, futuristic design. Create more,
            effortlessly.
          </p>
        </div>
      </Container>
      <MarqueeRow items={itemsOne} direction="left" speed={12} />
      <MarqueeRow items={itemsTwo} direction="right" speed={10} />
      <MarqueeRow items={itemsThree} direction="left" speed={10} />
    </section>
  );
};

export default Features;
