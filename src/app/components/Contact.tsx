import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Phone, Instagram, MapPin } from "lucide-react";

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

const contacts = [
  {
    icon: <Phone size={28} color="#F7F6F2" />,
    label: "Téléphone",
    value: "26 444 800",
    href: "tel:+21626444800",
    color: "#7B8478",
    bg: "#7B8478",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width={28} height={28} fill="#F7F6F2">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.524 5.845L.057 23.25 5.6 21.8A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.853 0-3.596-.5-5.1-1.373l-.367-.217-3.847 1.007 1.028-3.74-.24-.39A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "26 444 800",
    href: "https://wa.me/21626444800",
    color: "#25D366",
    bg: "#25D366",
  },
  {
    icon: <Instagram size={28} color="#F7F6F2" />,
    label: "Instagram",
    value: "@good.news.tunisia",
    href: "https://www.instagram.com/good.news.tunisia/?hl=fr",
    color: "#e1306c",
    bg: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
  },
  {
    icon: <MapPin size={28} color="#F7F6F2" />,
    label: "Google Maps",
    value: "Route Bouzayyen, Sfax",
    href: "https://maps.app.goo.gl/H7M47VGeq9sYoXWV7",
    color: "#4285F4",
    bg: "#4285F4",
  },
];

export function Contact() {
  return (
    <section id="contact" style={{ background: "#2C2C2C", padding: "96px 0" }}>
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
              ☺ Contact ☺
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#F7F6F2",
                marginTop: 12,
                lineHeight: 1.2,
              }}
            >
              Restez en<br />
              <em>contact avec nous.</em>
            </h2>
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: 16,
                color: "#EFE8DE",
                marginTop: 12,
                opacity: 0.75,
              }}
            >
              Pas de réservation en ligne — venez directement nous rendre visite !
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((c, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <motion.a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center gap-4 p-8 rounded-2xl text-center"
                style={{
                  background: "rgba(247,246,242,0.06)",
                  border: "1px solid rgba(247,246,242,0.1)",
                  textDecoration: "none",
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: c.bg }}
                >
                  {c.icon}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#EFE8DE",
                      letterSpacing: 2,
                      textTransform: "uppercase",
                      marginBottom: 4,
                    }}
                  >
                    {c.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: 15,
                      fontWeight: 600,
                      color: "#F7F6F2",
                    }}
                  >
                    {c.value}
                  </p>
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
