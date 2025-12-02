import Head from "next/head";
import About from "../components/About";

function AboutPage() {
  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      <About />
    </div>
  );
}

export default AboutPage;