import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

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

export function NousTrouver() {
  return (
    <section id="trouver" style={{ background: "#F7F6F2", padding: "96px 0" }}>
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
              ☺ Localisation ☺
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
              Venez nous<br />
              <em>rendre visite.</em>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <FadeIn delay={0.1}>
            <div className="flex flex-col gap-6">
              <div
                className="flex items-start gap-4 p-6 rounded-2xl"
                style={{ background: "#EFE8DE" }}
              >
                <MapPin size={24} color="#7B8478" className="flex-shrink-0 mt-1" />
                <div>
                  <p
                    style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 16, color: "#2C2C2C", marginBottom: 4 }}
                  >
                    Adresse
                  </p>
                  <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 15, color: "#6b6b5e", lineHeight: 1.6 }}>
                    QPCV+34R, Route Bouzayyen<br />
                    Sfax, Tunisie
                  </p>
                </div>
              </div>

              <div
                className="flex items-start gap-4 p-6 rounded-2xl"
                style={{ background: "#EFE8DE" }}
              >
                <Phone size={24} color="#7B8478" className="flex-shrink-0 mt-1" />
                <div>
                  <p
                    style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 16, color: "#2C2C2C", marginBottom: 4 }}
                  >
                    Téléphone
                  </p>
                  <a
                    href="tel:+21626444800"
                    style={{ fontFamily: "'Nunito', sans-serif", fontSize: 18, fontWeight: 800, color: "#7B8478" }}
                  >
                    26 444 800
                  </a>
                </div>
              </div>

              <div
                className="flex items-start gap-4 p-6 rounded-2xl"
                style={{ background: "#EFE8DE" }}
              >
                <Clock size={24} color="#7B8478" className="flex-shrink-0 mt-1" />
                <div>
                  <p
                    style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 16, color: "#2C2C2C", marginBottom: 4 }}
                  >
                    Horaires d'ouverture
                  </p>
                  <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 15, color: "#6b6b5e", lineHeight: 1.6 }}>
                    Ouvert tous les jours<br />
                    <strong style={{ color: "#2C2C2C" }}>jusqu'à minuit 🌙</strong>
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://maps.app.goo.gl/H7M47VGeq9sYoXWV7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 flex-1"
                  style={{
                    background: "#7B8478",
                    color: "#F7F6F2",
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: 14,
                    fontWeight: 700,
                    boxShadow: "0 4px 16px rgba(123,132,120,0.3)",
                  }}
                >
                  <Navigation size={16} />
                  Itinéraire
                </a>
                <a
                  href="tel:+21626444800"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 transition-all duration-300 hover:scale-105 flex-1"
                  style={{
                    borderColor: "#7B8478",
                    color: "#7B8478",
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: 14,
                    fontWeight: 700,
                  }}
                >
                  <Phone size={16} />
                  Appeler
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="overflow-hidden rounded-2xl shadow-xl" style={{ height: 420 }}>
              <iframe
                title="Good News Sfax - Carte"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=QPCV%2B34R,+Route+Bouzayyen,+Sfax,+Tunisie&output=embed&z=15"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
