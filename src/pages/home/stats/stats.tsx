import Container from "../../../layout/container/container";
import SpiralImg from "../../../assets/images/spiral-line.svg";

import "./stats.scss";

const Stats: React.FC = () => {
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
      label: "On-time merchant\nOnboard",
      side: "right",
      dot: false,
    },
  ];

  const slugify = (str: string): string =>
    str
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

  return (
    <section className="stats-section">
      <Container>
        <div className="stats-img-wrapper">
          <div className="stats-left">
            <h4 className="img-title">
              Your Business Pays Are Now Faster and Secure
            </h4>
            <div className="spiral-img">
              <img alt="" src={SpiralImg} />
            </div>
          </div>
          <div className="stats-right">
            {stats.map((s, i) => (
              <div key={i} className="stat-item">
                <h3 className={`stat-title ${s.class}`}>{s.number}</h3>
                <p className="stat-label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="financial-wrapper">
          <div className="financial-left">
            <h4 className="financial-title">Our Intelligent Financial Suite</h4>
            <p className="financial-desc">
              <span className="indicator-dot"></span>
              Tools That Accelerate Every Step Of Your Financial Workflow.
            </p>
          </div>
          <div className="financial-right">
            <div className="fin-left">
              {finItems
                .filter((i) => i.side === "left")
                .map((item, idx) => (
                  <div className="fin-item" key={idx}>
                    <h5 className={`fin-title ${slugify(item.title)}`}>
                      {item.title}
                    </h5>
                    <p className="fin-desc">{item.desc}</p>

                    <div className="value">
                      {item.dot && <span className="indicator-dot"></span>}
                      {item.value}
                    </div>

                    <p
                      className="fin-label"
                      dangerouslySetInnerHTML={{
                        __html: item.label.replace(/\n/g, "<br/>"),
                      }}
                    />
                  </div>
                ))}
            </div>

            <div className="fin-right">
              {finItems
                .filter((i) => i.side === "right")
                .map((item, idx) => (
                  <div className="fin-item" key={idx}>
                    <h5 className={`fin-title ${slugify(item.title)}`}>
                      {item.title}
                    </h5>
                    <p className="fin-desc">{item.desc}</p>

                    <div className="value">
                      {item.dot && <span className="indicator-dot"></span>}
                      {item.value}
                    </div>

                    <p
                      className="fin-label"
                      dangerouslySetInnerHTML={{
                        __html: item.label.replace(/\n/g, "<br/>"),
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
