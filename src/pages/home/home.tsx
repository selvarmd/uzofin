import Header from "../../layout/header/header";
import Hero from "./hero/hero";
import Stats from "./stats/stats";
import Features from "./features/features";
import Build from "./build/build";
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
        <Features />
        <Build />
        <Support />
        <Demo />
      </main>
      <Footer />
    </>
  );
};

export default Home;
