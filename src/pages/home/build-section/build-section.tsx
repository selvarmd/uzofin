import React from "react";
import Button from "../../../components/button/button";
import Container from "../../../layout/container/container";

import "./build-section.scss";

const BuildSection: React.FC = () => {
  return (
    <section className="build-section">
      <Container>
        <div className="title-block">
          <h2 className="section-title">
            Build Faster with Our <span>Powerful API’s</span>
          </h2>
          <p className="section-desc">
            Plug into secure, developer-friendly financial API’s and launch in
            days, not months
          </p>
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
