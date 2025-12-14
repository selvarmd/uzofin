import Button from "../../../components/button/button";
import Container from "../../../layout/container/container";

import "./demo.scss";

/**
 * Demo section component that serves as the final call-to-action
 * Encourages users to book a demo or start building with AI
 * Features two action buttons for different user intents
 * @returns Section with future-focused messaging and dual CTAs
 */
const Demo: React.FC = () => {
  return (
    <section className="demo-section">
      <Container>
        <div className="title-block">
          {/* Future-focused headline */}
          <div className="title">
            The future of your industry <span>starts here</span>
          </div>
          {/* Dual call-to-action buttons */}
          <div className="demo-btn-wrapper">
            {/* Primary CTA for demo booking */}
            <Button variant="primary" className="start-btn">
              Book a Demo
            </Button>
            {/* Secondary CTA for AI building */}
            <Button variant="secondary" className="start-btn">
              Build AI
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Demo;