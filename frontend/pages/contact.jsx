import Head from "next/head";
import Contact from "../components/Contact";

function ContactPage() {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Contact />
    </div>
  );
}

export default ContactPage;