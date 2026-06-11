import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Instagram } from "lucide-react";
import img1 from "../../assets/1.jpeg";
import img2 from "../../assets/2.jpeg";
import img3 from "../../assets/3.jpeg";
import img4 from "../../assets/4.jpeg";
import img5 from "../../assets/5.jpeg";
import img6 from "../../assets/6.jpeg";
import img7 from "../../assets/7.jpeg";
import img8 from "../../assets/8.jpeg";
import img9 from "../../assets/9.jpeg";


const posts = [
  { url: img1, alt: "img1" },
  { url: img2, alt: "img2" },
  { url: img3, alt: "img3" },
  { url: img4, alt: "img4" },
  { url: img5, alt: "img5" },
  { url: img6, alt: "img6" },
  { url: img7, alt: "img7" },
  { url: img8, alt: "img8" },
  { url: img9, alt: "img9" },

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
