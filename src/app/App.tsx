import "../styles/fonts.css";
import { Loader } from "./components/Loader";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { NotreUnivers } from "./components/NotreUnivers";
import { Menu } from "./components/Menu";
import { InstagramSection } from "./components/Instagram";
import { Avis } from "./components/Avis";
import { NousTrouver } from "./components/NousTrouver";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsApp";

export default function App() {
  return (
    <div className="relative" style={{ overflowX: "hidden" }}>
      <Loader />
      <Navbar />
      <Hero />
      <NotreUnivers />
      <Menu />
      <InstagramSection />
      <Avis />
      <NousTrouver />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
