import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import logoImg from "../../imports/715989917_17867839254684775_2438347341017307755_n.jpg";

const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "Notre Univers", href: "#univers" },
  { label: "Le Menu", href: "#menu" },
  { label: "Instagram", href: "#instagram" },
  { label: "Avis", href: "#avis" },
  { label: "Nous Trouver", href: "#trouver" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(247,246,242,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(123,132,120,0.15)" : "none",
          boxShadow: scrolled ? "0 2px 20px rgba(44,44,44,0.06)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
          <button onClick={() => scrollTo("#accueil")} className="flex items-center gap-3">
            <img src={logoImg} alt="Good News Tunisia" className="h-10 w-10 rounded-full object-cover" />
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#2C2C2C",
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: 0.5,
              }}
              className="hidden sm:block"
            >
              Good News Tunisia
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="px-3 py-2 rounded-lg transition-all duration-200 hover:bg-primary/10"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#2C2C2C",
                  letterSpacing: 0.3,
                }}
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
            style={{ color: "#2C2C2C" }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 shadow-lg"
            style={{ background: "rgba(247,246,242,0.98)", backdropFilter: "blur(12px)" }}
          >
            <div className="flex flex-col p-4 gap-1">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className="text-left px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#2C2C2C",
                  }}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
