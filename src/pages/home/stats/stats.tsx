import Container from "../../../layout/container/container";
import SpiralImg from "../../../assets/images/spiral-line.svg";

import "./stats.scss";

/**
 * Stats section component that displays key metrics and financial suite information
 * Features two main sections: business payment stats and intelligent financial suite
 * Uses dynamic data rendering for statistics and financial service items
 * @returns Section with animated statistics and financial services showcase
 */
const Stats: React.FC = () => {
  // Key business statistics data
  const stats = [
    {
      number: "11.5M+",
      label: "Transactions processed monthly",
      class: "transaction",
    },
    {
      number: "99.9%",
      label: "Platform uptime and reliability",
      class: "platform",
    },
    {
      number: (
        <>
          70% <span>Faster</span>
        </>
      ),
      label: "Merchant onboarding with AI automation",
      class: "onboarding",
    },
  ];

  // Financial suite services data with metrics
  const finItems = [
    {
      title: "AI Banking",
      desc: `Smart, automated digital banking for businesses. Instant
      onboarding, intelligent insights, and real-time account
      operations.`,
      value: "3,969",
      label: "Transactions per second",
      side: "left",
      dot: true,
    },
    {
      title: "Payouts",
      desc: `Bulk, automated payouts built for high-volume businesses.
      Reliable, trackable, and lightning-fast disbursements.`,
      value: "163,077,581,394",
      label: "Total transactions",
      side: "left",
      dot: true,
    },
    {
      title: "Payments",
      desc: `Fast, secure, and scalable payment infrastructure.
      Send and receive money globally with ease.`,
      value: "1,675",
      label: "Validator nodes",
      side: "right",
      dot: true,
    },
    {
      title: "Merchant Onboarding",
      desc: `Frictionless onboarding for merchants at any scale. Automated KYC,
      verification, and risk assessments—done in minutes.`,
      value: "100%",
      label: "On-time merchant\\nOnboard",
      side: "right",
      dot: false,
    },
  ];

  /**
   * Utility function to create URL-friendly slugs from titles
   * Converts titles to lowercase, replaces spaces with hyphens, removes special chars
   * @param str - String to convert to slug
   * @returns URL-friendly slug string
   */
  const slugify = (str: string): string =>
    str
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

  return (
    <section className="stats-section">
      <Container>
        {/* Top section with business payment stats */}
        <div className="stats-img-wrapper">
          <div className="stats-left">
            {/* Section heading */}
            <h4 className="img-title">
              Your Business Pays Are Now Faster and Secure
            </h4>
            {/* Decorative spiral image */}
            <div className="spiral-img">
              <img alt="" src={SpiralImg} />
            </div>
          </div>
          
          {/* Statistics display */}
          <div className="stats-right">
            {stats.map((s, i) => (
              <div key={i} className="stat-item">
                {/* Statistic number with custom styling class */}
                <h3 className={`stat-title ${s.class}`}>{s.number}</h3>
                {/* Statistic description */}
                <p className="stat-label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Financial suite section */}
        <div className="financial-wrapper">
          <div className="financial-left">
            {/* Financial suite heading */}
            <h4 className="financial-title">Our Intelligent Financial Suite</h4>
            {/* Financial suite description with indicator dot */}
            <p className="financial-desc">
              <span className="indicator-dot"></span>
              Tools That Accelerate Every Step Of Your Financial Workflow.
            </p>
          </div>
          
          {/* Financial services grid */}
          <div className="financial-right">
            {/* Left column services */}
            <div className="fin-left">
              {finItems
                .filter((i) => i.side === "left")
                .map((item, idx) => (
                  <div className="fin-item" key={idx}>
                    {/* Service title with dynamic CSS class */}
                    <h5 className={`fin-title ${slugify(item.title)}`}>
                      {item.title}
                    </h5>
                    {/* Service description */}
                    <p className="fin-desc">{item.desc}</p>

                    {/* Service metric value with optional indicator dot */}
                    <div className="value">
                      {item.dot && <span className="indicator-dot"></span>}
                      {item.value}
                    </div>

                    {/* Service metric label with line break support */}
                    <p
                      className="fin-label"
                      dangerouslySetInnerHTML={{
                        __html: item.label.replace(/\\n/g, "<br/>"),
                      }}
                    />
                  </div>
                ))}
            </div>

            {/* Right column services */}
            <div className="fin-right">
              {finItems
                .filter((i) => i.side === "right")
                .map((item, idx) => (
                  <div className="fin-item" key={idx}>
                    {/* Service title with dynamic CSS class */}
                    <h5 className={`fin-title ${slugify(item.title)}`}>
                      {item.title}
                    </h5>
                    {/* Service description */}
                    <p className="fin-desc">{item.desc}</p>

                    {/* Service metric value with optional indicator dot */}
                    <div className="value">
                      {item.dot && <span className="indicator-dot"></span>}
                      {item.value}
                    </div>

                    {/* Service metric label with line break support */}
                    <p
                      className="fin-label"
                      dangerouslySetInnerHTML={{
                        __html: item.label.replace(/\\n/g, "<br/>"),
                      }}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Stats;