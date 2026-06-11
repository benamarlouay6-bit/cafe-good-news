import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Fatma Ben Salah",
    text: "Service rapide, accueil chaleureux, bravo. Je recommande vivement à tous les amateurs de bubble tea à Sfax !",
    rating: 5,
    avatar: "FB",
    color: "#f9a8d4",
  },
  {
    name: "Zeineb Ayadi",
    text: "Le cadre est magnifique et le personnel chaleureux. Les boissons sont délicieuses et la présentation est soignée.",
    rating: 5,
    avatar: "ZA",
    color: "#6ee7b7",
  },
  {
    name: "Eya Bouaziz",
    text: "Cuisine : 5, Service : 5. Tout était parfait. Mon bubble tea matcha était exceptionnel. Un endroit à découvrir absolument.",
    rating: 5,
    avatar: "EB",
    color: "#93c5fd",
  },
  {
    name: "Sami Karray",
    text: "Un café tendance avec une ambiance super. Les smoothies sont frais et naturels. J'y reviens chaque semaine !",
    rating: 5,
    avatar: "SK",
    color: "#fdba74",
  },
  {
    name: "Mariem Trabelsi",
    text: "Le San Sebastian cheesecake est une merveille. L'endroit est instagrammable à souhait. Parfait pour un après-midi entre amies.",
    rating: 5,
    avatar: "MT",
    color: "#c4b5fd",
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
      ))}
    </div>
  );
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Avis() {
  return (
    <section id="avis" style={{ background: "#EFE8DE", padding: "96px 0" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <span
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 4,
                color: "#7B8478",
                textTransform: "uppercase",
              }}
            >
              ☺ Avis clients ☺
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#2C2C2C",
                marginTop: 12,
                lineHeight: 1.2,
              }}
            >
              Ils nous font<br />
              <em>confiance.</em>
            </h2>

            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="flex flex-col items-center">
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 56,
                    color: "#2C2C2C",
                    lineHeight: 1,
                  }}
                >
                  4.0
                </span>
                <Stars n={4} />
                <span
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: 13,
                    color: "#6b6b5e",
                    marginTop: 4,
                  }}
                >
                  Note Google
                </span>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(44,44,44,0.12)" }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-2xl flex flex-col gap-4"
                style={{ background: "#F7F6F2", boxShadow: "0 2px 16px rgba(44,44,44,0.06)" }}
              >
                <Stars n={r.rating} />
                <p
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: 15,
                    color: "#2C2C2C",
                    lineHeight: 1.65,
                    fontStyle: "italic",
                  }}
                >
                  "{r.text}"
                </p>
                <div className="flex items-center gap-3 mt-auto pt-2 border-t border-[#EFE8DE]">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: r.color,
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#2C2C2C",
                    }}
                  >
                    {r.avatar}
                  </div>
                  <span
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#2C2C2C",
                    }}
                  >
                    {r.name}
                  </span>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
