import Header from "../../layout/header/header";
import Hero from "./hero/hero";
import Stats from "./stats/stats";
import BuildSection from "./build-section/build-section";
import Features from "./features/features";
import Support from "./support/support";
import Demo from "./demo/demo";
import Footer from "../../layout/footer/footer";

/**
 * Home page component that renders the complete landing page
 * Combines all sections in a structured layout with header and footer
 * @returns JSX element containing the full home page structure
 */
const Home: React.FC = () => {
  return (
    <>
      {/* Site navigation header */}
      <Header />
      <main>
        {/* Hero section with main value proposition */}
        <Hero />
        {/* Statistics and metrics section */}
        <Stats />
        {/* API building section */}
        <BuildSection />
        {/* Features showcase with marquee */}
        <Features />
        {/* Support and carousel section */}
        <Support />
        {/* Demo and CTA section */}
        <Demo />
      </main>
      {/* Site footer with links and info */}
      <Footer />
    </>
  );
};

export default Home;
