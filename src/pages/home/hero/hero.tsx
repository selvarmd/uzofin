import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import Container from "../../../layout/container/container";
import Button from "../../../components/button/button";
import "./hero.scss";

// Import company logos
import Brave from "../../../assets/images/logos/logo-brave.svg";
import Circle from "../../../assets/images/logos/logo-circle.svg";
import Discord from "../../../assets/images/logos/logo-discord.svg";
import Google from "../../../assets/images/logos/logo-google.svg";
import Jump from "../../../assets/images/logos/logo-jump.svg";
import Lollaplazza from "../../../assets/images/logos/logo-plazza.svg";
import MagicEden from "../../../assets/images/logos/logo-meden.svg";
import FrameLeft from "../../../assets/images/frame-left.svg";
import FrameRight from "../../../assets/images/frame-right.svg";

/**
 * Company logos configuration for the companies showcase
 */
const logos = [
  { src: Brave, name: "Brave" },
  { src: Circle, name: "Circle" },
  { src: Discord, name: "Discord" },
  { src: Google, name: "Google" },
  { src: Jump, name: "Jump" },
  { src: Lollaplazza, name: "Lollaplazza" },
  { src: MagicEden, name: "Magic Eden" },
];

/**
 * Hero section component with animated entrance and company showcase
 * Features GSAP animations for frame elements, content, and buttons
 * Includes main value proposition and call-to-action buttons
 * @returns Animated hero section with branding, messaging, and company logos
 */
const Hero: React.FC = () => {
  // Refs for GSAP animation targets
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const frameLeftRef = useRef<HTMLDivElement | null>(null);
  const frameRightRef = useRef<HTMLDivElement | null>(null);
  const heroWrapperRef = useRef<HTMLDivElement | null>(null);
  const heroBtnRef = useRef<HTMLDivElement | null>(null);

  // Set up entrance animations using GSAP
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 1.5,
        },
      });
      
      // Animate frame elements scaling in from corners
      tl.fromTo(
        [frameLeftRef.current, frameRightRef.current],
        { scale: 0 },
        {
          scale: 1,
          transformOrigin: (i) => (i === 0 ? "left top" : "right top"),
        }
      )
        // Animate hero content sliding up and fading in
        .fromTo(
          heroWrapperRef.current,
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1 },
          "+=0.3"
        )
        // Animate buttons sliding up and fading in
        .fromTo(
          heroBtnRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1 },
          "+=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section" ref={sectionRef}>
      {/* Decorative frame elements */}
      <div className="frame-left" ref={frameLeftRef}>
        <img alt="" src={FrameLeft} />
      </div>
      <div className="frame-right" ref={frameRightRef}>
        <img alt="" src={FrameRight} />
      </div>
      
      <Container className="hero-container">
        {/* Main hero content */}
        <div className="hero-wrapper" ref={heroWrapperRef}>
          {/* Primary headline with value proposition */}
          <h1 className="hero-title">
            AI-powered <span>Banking & Payment Solutions</span> built for Modern
            Businesses
          </h1>
          {/* Supporting description */}
          <p className="hero-description">
            UzOfin brings intelligent automation, real-time payments, and
            seamless financial operations together so you can scale without
            friction.
          </p>
        </div>
        
        {/* Call-to-action buttons */}
        <div className="hero-btn-wrapper" ref={heroBtnRef}>
          <Button variant="primary" className="start-btn">
            Start building
          </Button>
          <Button variant="secondary" className="start-btn">
            Read Docs
          </Button>
        </div>
        
        {/* Companies showcase section */}
        <div className="companies-block">
          <h5>Powering tools and integration for companies around the world</h5>
          <div className="conmpanies-grid">
            {/* Render company logos */}
            {logos.map((item, index) => (
              <div className="logo-item" key={index}>
                <img src={item.src} alt={item.name} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;