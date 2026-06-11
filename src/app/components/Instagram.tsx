import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Instagram } from "lucide-react";

const posts = [
  { url: "https://images.unsplash.com/photo-1747016804753-866c3ed6b3b7?w=400&h=400&fit=crop&auto=format", alt: "Bubble teas colorés" },
  { url: "https://images.unsplash.com/photo-1741243038487-1d835e67bcbf?w=400&h=400&fit=crop&auto=format", alt: "Tiger sugar drinks" },
  { url: "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?w=400&h=400&fit=crop&auto=format", alt: "Latte art" },
  { url: "https://images.unsplash.com/photo-1759303380841-55c09244fd2b?w=400&h=400&fit=crop&auto=format", alt: "San Sebastian" },
  { url: "https://images.unsplash.com/photo-1779442563698-11fad08a733e?w=400&h=400&fit=crop&auto=format", alt: "Terrasse café" },
  { url: "https://images.unsplash.com/photo-1514995428455-447d4443fa7f?w=400&h=400&fit=crop&auto=format", alt: "Smoothie fraise" },
  { url: "https://images.unsplash.com/photo-1622597467821-df79dcb4f94d?w=400&h=400&fit=crop&auto=format", alt: "Jus detox" },
  { url: "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=400&h=400&fit=crop&auto=format", alt: "Cappuccino" },
  { url: "https://images.unsplash.com/photo-1773632996592-e150b9ed5059?w=400&h=400&fit=crop&auto=format", alt: "Cheesecake" },
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

export function InstagramSection() {
  return (
    <section id="instagram" style={{ background: "#2C2C2C", padding: "96px 0" }}>
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
              ☺ Galerie ☺
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
              Notre univers<br />
              <em>en images.</em>
            </h2>
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: 16,
                color: "#EFE8DE",
                marginTop: 12,
                opacity: 0.8,
              }}
            >
              Suivez-nous pour découvrir nos nouveautés chaque jour.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-10">
          {posts.map((post, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <a
                href="https://www.instagram.com/good.news.tunisia/?hl=fr"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden rounded-xl group"
                style={{ aspectRatio: "1/1" }}
              >
                <img
                  src={post.url}
                  alt={post.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(123,132,120,0.6)" }}
                >
                  <Instagram size={28} color="#F7F6F2" />
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="flex justify-center">
            <a
              href="https://www.instagram.com/good.news.tunisia/?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
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
              <Instagram size={20} />
              @good.news.tunisia
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
