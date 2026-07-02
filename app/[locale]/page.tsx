import Adventures from "@/components/adventures";
import Header from "@/components/header";
import Hero from "@/components/hero"; // Adjust path based on your folder structure
import Footer from "@/components/Footer";
import Cards from "@/components/Cards";
import Travels from "@/components/Travels";
import App from "@/components/App";
import Faqs from "@/components/Faqs";
import Crousel from "@/components/Crousel";

export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Header />
      <Hero />
      <Adventures />
      <Cards />
      <Travels />
      <Crousel />
      <App />
      <Faqs />
      <Footer />
    </main>
  );
}
