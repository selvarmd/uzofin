import Header from "../../layout/header/header";
import Hero from "./hero/hero";
import Stats from "./stats/stats";
import BuildSection from "./build-section/build-section";
import Features from "./features/features";
import Support from "./support/support";
import Demo from "./demo/demo";
import Footer from "../../layout/footer/footer";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <BuildSection />
        <Features />
        <Support />
        <Demo />
      </main>
      <Footer />
    </>
  );
};

export default Home;
