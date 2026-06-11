import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1747016804753-866c3ed6b3b7?w=1600&h=900&fit=crop&auto=format",
    alt: "Quatre bubble teas colorés",
  },
  {
    url: "https://images.unsplash.com/photo-1741243038487-1d835e67bcbf?w=1600&h=900&fit=crop&auto=format",
    alt: "Tiger sugar drinks",
  },
  {
    url: "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?w=1600&h=900&fit=crop&auto=format",
    alt: "Latte art coffee",
  },
  {
    url: "https://images.unsplash.com/photo-1514995428455-447d4443fa7f?w=1600&h=900&fit=crop&auto=format",
    alt: "Smoothie fruits frais",
  },
  {
    url: "https://images.unsplash.com/photo-1759303380841-55c09244fd2b?w=1600&h=900&fit=crop&auto=format",
    alt: "San Sebastian cheesecake",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, []);

  const scrollToMenu = () => {
    document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="accueil"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <img
            src={slides[current].url}
            alt={slides[current].alt}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(44,44,44,0.35) 0%, rgba(44,44,44,0.55) 60%, rgba(44,44,44,0.75) 100%)",
            }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-4 flex items-center justify-center gap-2"
        >
          <span style={{ color: "#EFE8DE", fontFamily: "'Nunito',sans-serif", fontSize: 14, letterSpacing: 4, fontWeight: 700 }}>
            ☺ SFAX, TUNISIE ☺
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#F7F6F2",
            fontSize: "clamp(2.4rem, 7vw, 5.5rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            textShadow: "0 2px 20px rgba(0,0,0,0.3)",
          }}
        >
          Chaque gorgée est<br />une bonne nouvelle.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{
            fontFamily: "'Nunito', sans-serif",
            color: "#EFE8DE",
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            fontWeight: 400,
            lineHeight: 1.6,
            marginTop: 16,
            marginBottom: 40,
            maxWidth: 640,
            margin: "16px auto 40px",
          }}
        >
          Découvrez l'expérience GOOD NEWS : bubble tea, cafés signature, smoothies, desserts gourmands et boissons fraîches au cœur de Sfax.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToMenu}
            className="px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: "#7B8478",
              color: "#F7F6F2",
              fontFamily: "'Nunito', sans-serif",
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: 1,
              boxShadow: "0 4px 20px rgba(123,132,120,0.4)",
            }}
          >
            Découvrir le menu
          </button>
          <a
            href="https://www.instagram.com/good.news.tunisia/?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border-2 transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-white/10"
            style={{
              borderColor: "#F7F6F2",
              color: "#F7F6F2",
              fontFamily: "'Nunito', sans-serif",
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            Voir l'Instagram
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === current ? 24 : 8,
              height: 8,
              background: i === current ? "#F7F6F2" : "rgba(247,246,242,0.4)",
            }}
          />
        ))}
      </div>

      <motion.button
        onClick={() => document.querySelector("#univers")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        style={{ color: "rgba(247,246,242,0.7)" }}
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
}
