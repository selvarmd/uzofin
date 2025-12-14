import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import Container from "../../../layout/container/container";
import Button from "../../../components/button/button";
import "./hero.scss";

import Brave from "../../../assets/images/logos/logo-brave.svg";
import Circle from "../../../assets/images/logos/logo-circle.svg";
import Discord from "../../../assets/images/logos/logo-discord.svg";
import Google from "../../../assets/images/logos/logo-google.svg";
import Jump from "../../../assets/images/logos/logo-jump.svg";
import Lollaplazza from "../../../assets/images/logos/logo-plazza.svg";
import MagicEden from "../../../assets/images/logos/logo-meden.svg";
import FrameLeft from "../../../assets/images/frame-left.svg";
import FrameRight from "../../../assets/images/frame-right.svg";

const logos = [
  { src: Brave, name: "Brave" },
  { src: Circle, name: "Circle" },
  { src: Discord, name: "Discord" },
  { src: Google, name: "Google" },
  { src: Jump, name: "Jump" },
  { src: Lollaplazza, name: "Lollaplazza" },
  { src: MagicEden, name: "Magic Eden" },
];

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const frameLeftRef = useRef<HTMLDivElement | null>(null);
  const frameRightRef = useRef<HTMLDivElement | null>(null);
  const heroWrapperRef = useRef<HTMLDivElement | null>(null);
  const heroBtnRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 1.5,
        },
      });
      tl.fromTo(
        [frameLeftRef.current, frameRightRef.current],
        { scale: 0 },
        {
          scale: 1,
          transformOrigin: (i) => (i === 0 ? "left top" : "right top"),
        }
      )
        .fromTo(
          heroWrapperRef.current,
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1 },
          "+=0.3"
        )
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
      <div className="frame-left" ref={frameLeftRef}>
        <img alt="" src={FrameLeft} />
      </div>
      <div className="frame-right" ref={frameRightRef}>
        <img alt="" src={FrameRight} />
      </div>
      <Container className="hero-container">
        <div className="hero-wrapper" ref={heroWrapperRef}>
          <h1 className="hero-title">
            AI-powered <span>Banking & Payment Solutions</span> built for Modern
            Businesses
          </h1>
          <p className="hero-description">
            UzOfin brings intelligent automation, real-time payments, and
            seamless financial operations together so you can scale without
            friction.
          </p>
        </div>
        <div className="hero-btn-wrapper" ref={heroBtnRef}>
          <Button variant="primary" className="start-btn">
            Start building
          </Button>
          <Button variant="secondary" className="start-btn">
            Read Docs
          </Button>
        </div>
        <div className="companies-block">
          <h5>Powering tools and integration for companies around the world</h5>
          <div className="conmpanies-grid">
            {logos.map((item, index) => (
              <div className="logo-item">
                <img key={index} src={item.src} alt={item.name} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
