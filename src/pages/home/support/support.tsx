import React from "react";
import Container from "../../../layout/container/container";

import "./support.scss";
import Carousel from "../../../components/carousel/carousel";

const Support: React.FC = () => {
  const carouselItems = [
    {
      id: "1",
      title: "Easy to customize",
      description:
        "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed. <a href='#'>Know more</a>",
    },
    {
      id: "2",
      title: "Scalability & Integration",
      description:
        "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed. <a href='#'>Know more</a>",
    },
    {
      id: "3",
      title: "Step-by-step guide",
      description:
        "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed. <a href='#'>Know more</a>",
    },
    {
      id: "4",
      title: "SaaS based solution",
      description:
        "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed. <a href='#'>Know more</a>",
    },
    {
      id: "5",
      title: "Modern & clean design",
      description:
        "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed. <a href='#'>Know more</a>",
    },
  ];

  return (
    <section className="support-section">
      <Container>
        <div className="title-block">
          <h4 className="tag">24/7 support</h4>
          <h2 className="section-title">
            Industry <span>Standard</span>
          </h2>
        </div>
      </Container>
      <div className="standard-carousel">
        <Carousel items={carouselItems} autoplay={true} autoplayDelay={50} />
      </div>
    </section>
  );
};

export default Support;
