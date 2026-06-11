import { useRef } from "react";
import { motion, useInView } from "motion/react";

const vibes = [
  { icon: "🤝", title: "Partager", desc: "Un espace convivial pour se retrouver entre amis et famille." },
  { icon: "💻", title: "Travailler", desc: "Wi-Fi rapide, ambiance studieuse et calme pour être productif." },
  { icon: "🌿", title: "Se détendre", desc: "Un cocon chaleureux pour décompresser loin de l'agitation." },
  { icon: "📸", title: "Immortaliser", desc: "Chaque recoin est instagrammable, chaque boisson est une œuvre." },
  { icon: "✨", title: "Savourer", desc: "Des créations originales qui surprennent les papilles à chaque gorgée." },
];

const photos = [
  {
    url: "https://images.unsplash.com/photo-1779442563698-11fad08a733e?w=600&h=700&fit=crop&auto=format",
    alt: "Terrasse Good News",
    className: "row-span-2",
  },
  {
    url: "https://images.unsplash.com/photo-1671659420749-d56efede6df4?w=600&h=400&fit=crop&auto=format",
    alt: "Ambiance bubble tea",
  },
  {
    url: "https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?w=600&h=400&fit=crop&auto=format",
    alt: "Café latte art",
  },
];

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

export function NotreUnivers() {
  return (
    <section id="univers" style={{ background: "#EFE8DE", padding: "96px 0" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="text-center mb-16">
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
              ☺ Notre univers ☺
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
              Plus qu'un café,<br />
              <em>une expérience.</em>
            </h2>
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: 17,
                color: "#5a5a4e",
                marginTop: 16,
                maxWidth: 560,
                margin: "16px auto 0",
                lineHeight: 1.7,
              }}
            >
              GOOD NEWS, c'est l'endroit où chaque moment devient mémorable. Un lieu où la qualité rime avec bonne humeur, et où chaque boisson raconte une histoire.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4" style={{ gridAutoRows: "200px" }}>
            {photos.map((p, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div
                  className={`overflow-hidden rounded-2xl h-full ${p.className ?? ""}`}
                  style={{ gridRow: p.className ? "span 2" : undefined }}
                >
                  <img
                    src={p.url}
                    alt={p.alt}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    style={{ minHeight: 200 }}
                  />
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            {vibes.map((v, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                  style={{ background: "rgba(247,246,242,0.7)" }}
                >
                  <span style={{ fontSize: 32, lineHeight: 1 }}>{v.icon}</span>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 20,
                        color: "#2C2C2C",
                        marginBottom: 4,
                      }}
                    >
                      {v.title}
                    </h3>
                    <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 15, color: "#6b6b5e", lineHeight: 1.6 }}>
                      {v.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
