import { Instagram, Phone, MapPin } from "lucide-react";
import logoImg from "../../imports/715989917_17867839254684775_2438347341017307755_n.jpg";

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

export function Footer() {
  return (
    <footer style={{ background: "#1a1a1a", padding: "64px 0 32px" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="Good News Sfax" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 18,
                    color: "#F7F6F2",
                    fontWeight: 700,
                  }}
                >
                  Good News Sfax
                </p>
              </div>
            </div>
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: 14,
                color: "#EFE8DE",
                opacity: 0.7,
                lineHeight: 1.7,
              }}
            >
              Chaque gorgée est une bonne nouvelle. Bubble tea, smoothies, cafés et douceurs au cœur de Sfax.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                color: "#7B8478",
                letterSpacing: 3,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              {[
                ["Accueil", "#accueil"],
                ["Notre Univers", "#univers"],
                ["Le Menu", "#menu"],
                ["Instagram", "#instagram"],
                ["Avis", "#avis"],
              ].map(([label, href]) => (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className="text-left transition-colors duration-200 hover:text-[#7B8478]"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: 14,
                    color: "#EFE8DE",
                    opacity: 0.75,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                color: "#7B8478",
                letterSpacing: 3,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+21626444800"
                className="flex items-center gap-2"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: 14,
                  color: "#EFE8DE",
                  opacity: 0.75,
                  textDecoration: "none",
                }}
              >
                <Phone size={14} color="#7B8478" />
                26 444 800
              </a>
              <a
                href="https://www.instagram.com/good.news.tunisia/?hl=fr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: 14,
                  color: "#EFE8DE",
                  opacity: 0.75,
                  textDecoration: "none",
                }}
              >
                <Instagram size={14} color="#7B8478" />
                @good.news.tunisia
              </a>
              <div
                className="flex items-start gap-2"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: 14,
                  color: "#EFE8DE",
                  opacity: 0.75,
                }}
              >
                <MapPin size={14} color="#7B8478" className="mt-0.5 flex-shrink-0" />
                Route Bouzayyen, Sfax
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                color: "#7B8478",
                letterSpacing: 3,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Horaires
            </p>
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: 14,
                color: "#EFE8DE",
                opacity: 0.75,
                lineHeight: 1.7,
              }}
            >
              Tous les jours<br />
              <strong style={{ color: "#F7F6F2", opacity: 1 }}>Jusqu'à 00h00</strong>
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/good.news.tunisia/?hl=fr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: "rgba(247,246,242,0.1)" }}
              >
                <Instagram size={18} color="#EFE8DE" />
              </a>
              <a
                href="https://wa.me/21626444800"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: "rgba(247,246,242,0.1)" }}
              >
                <svg viewBox="0 0 24 24" width={18} height={18} fill="#EFE8DE">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.524 5.845L.057 23.25 5.6 21.8A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.853 0-3.596-.5-5.1-1.373l-.367-.217-3.847 1.007 1.028-3.74-.24-.39A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(247,246,242,0.1)" }}
        >
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: 13,
              color: "#EFE8DE",
              opacity: 0.5,
            }}
          >
            © 2025 GOOD NEWS SFAX™ — Tous droits réservés.
          </p>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: 13,
              color: "#EFE8DE",
              opacity: 0.5,
            }}
          >
            Chaque gorgée est une bonne nouvelle. ☺
          </p>
        </div>
      </div>
    </footer>
  );
}
