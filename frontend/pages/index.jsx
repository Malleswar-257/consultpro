import Head from "next/head";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <Head>
        <title>Consulting Agency</title>
      </Head>
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;