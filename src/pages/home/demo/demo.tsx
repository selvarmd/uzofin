import Button from "../../../components/button/button";
import Container from "../../../layout/container/container";

import "./demo.scss";

const Demo: React.FC = () => {
  return (
    <section className="demo-section">
      <Container>
        <div className="title-block">
          <div className="title">
            The future of your industry <span>starts here</span>
          </div>
          <div className="demo-btn-wrapper">
            <Button variant="primary" className="start-btn">
              Book a Demo
            </Button>
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
