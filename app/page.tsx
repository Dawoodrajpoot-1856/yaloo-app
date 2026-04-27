import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/hero";
import Adventures from "./components/adventures";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import Travels from "./components/Travels";
import App from "./components/App";
import Faqs from "./components/Faqs";
import Crousel from "./components/Crousel";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Adventures />
      <Cards />
      <Travels />
      <Crousel />
      <App />
      <Faqs />
      <Footer />
    </div>
  );
}
