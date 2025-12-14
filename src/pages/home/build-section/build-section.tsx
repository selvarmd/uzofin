import React from "react";
import Button from "../../../components/button/button";
import Container from "../../../layout/container/container";

import "./build-section.scss";

/**
 * BuildSection component that promotes the API development platform
 * Highlights the speed and ease of building with UzOFin's APIs
 * Features a call-to-action for developers to start building
 * @returns Section with API promotion content and CTA button
 */
const BuildSection: React.FC = () => {
  return (
    <section className="build-section">
      <Container>
        <div className="title-block">
          {/* Main heading emphasizing API power */}
          <h2 className="section-title">
            Build Faster with Our <span>Powerful API's</span>
          </h2>
          {/* Description of API benefits */}
          <p className="section-desc">
            Plug into secure, developer-friendly financial API's and launch in
            days, not months
          </p>
          {/* Call-to-action button */}
          <div className="btn-wrapper">
            <Button variant="primary" className="start-btn">
              Start building
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BuildSection;