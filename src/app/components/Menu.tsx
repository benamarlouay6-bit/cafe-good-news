import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import passionAnanas from "@/assets/bubbletea/passion-ananas.png";
import peche from "@/assets/bubbletea/peche.png";
import fruitsRouges from "@/assets/bubbletea/fruits-rouges.png";
import cocoAnanas from "@/assets/bubbletea/coco-ananas.png";
import pastequeCitron from "@/assets/bubbletea/pasteque-citron.png";
import matchaLatte from "@/assets/bubbletea/matcha.png";
import brownSugarLatte from "@/assets/bubbletea/brown-sugar.png";
import roseFramboiseLatte from "@/assets/bubbletea/rose-framboise.png";
import oreoLatte from "@/assets/bubbletea/oreo.png";
import taroLatte from "@/assets/bubbletea/taro.png";
import matchaImage from "@/assets/matcha/matcha.png";
import matchaLatteImage from "@/assets/matcha/matcha-latte.png";
import iceMangoMatchaImage from "@/assets/matcha/ice-mango-matcha.png";
import iceStrawberryMatchaImage from "@/assets/matcha/ice-strawberry-matcha.png";
import icePassionMatchaImage from "@/assets/matcha/ice-passion-matcha.png";
import smoothieBottles from "@/assets/smoothies/smoothie-bottles.png";
import icedSmoothie from "@/assets/smoothies/iced-smoothie.jpeg";
import detoxBottles from "@/assets/jus-detox/detox-bottles.png";
import detoxTable from "@/assets/jus-detox/detox-table.jpeg";
import iceTeaPeche from "@/assets/thes-glaces/ice-tea-peche.png";
import iceTeaFruitsRouges from "@/assets/thes-glaces/ice-tea-fruits-rouges.png";
import iceTeaMangue from "@/assets/thes-glaces/ice-tea-mangue.png";
import mojitoBottles from "@/assets/mojitos/mojito-bottles.png";
import energyBottles from "@/assets/power-drinks/energy-bottles.png";
import powerShake from "@/assets/power-drinks/power-shake.jpeg";
import freshBottles from "@/assets/fresh-juices/fresh-bottles.png";
import freshFruits from "@/assets/fresh-juices/fresh-fruits.jpeg";
import flan from "@/assets/douceurs/flan.jpeg";
import cookieChocolat from "@/assets/douceurs/cookie-chocolat.jpeg";
import cookiePistache from "@/assets/douceurs/cookie-pistache.jpeg";
import brunchSweets from "@/assets/douceurs/brunch-sweets.jpeg";

type MenuItem = {
  name: string;
  description?: string;
  price?: string;
  prices?: { size: string; price: string }[];
  image?: string;
  tag?: string;
};

type MenuCategory = {
  key: MenuCategoryKey;
  id: string;
  label: string;
  icon: string;
  color: string;
  bgColor: string;
  textColor: string;
  note?: string;
};

type CafeMenuSection = {
  title: string;
  items: { name: string; price: string }[];
  subtitle?: string;
};

const menuData = {
  bubbletea: [
      { name: "Passion & Ananas", description: "Perles de fruits, sirop passion, the.", price: "14–16 DT", image: passionAnanas, tag: "Perles de Fruits" },
      { name: "Pêche", description: "Perles de pêche, sirop fruité, the.", price: "14–16 DT", image: peche, tag: "Perles de Fruits" },
      { name: "Fruits Rouges", description: "Sirop framboise, perles de fruits rouges.", price: "14–16 DT", image: fruitsRouges, tag: "Perles de Fruits" },
      { name: "Coco & Ananas", description: "Coco de coco, sirop ananas, the.", price: "14–16 DT", image: cocoAnanas, tag: "Perles de Fruits" },
      { name: "Pastèque & Citron", description: "Sirop pastèque, zeste citron, perles.", price: "14–16 DT", image: pastequeCitron, tag: "Perles de Fruits" },
      { name: "Matcha", description: "Poudre de Matcha, Perles de Tapioca, Thé, Lait, Glaçons.", prices: [{ size: "330 ml", price: "14 DT" }, { size: "400 ml", price: "16 DT" }], image: matchaLatte, tag: "Latte" },
      { name: "Brown Sugar", description: "Poudre de milk tea thé noir, Perles de tapioca, Thé, Lait, sirop de brown sugar, Glaçons.", prices: [{ size: "330 ml", price: "14 DT" }, { size: "400 ml", price: "16 DT" }], image: brownSugarLatte, tag: "Latte" },
      { name: "Rose & Framboise", description: "Sirop de rose, Perles de fraise, Confiture de framboise, Thé, Lait, Glaçons.", prices: [{ size: "330 ml", price: "14 DT" }, { size: "400 ml", price: "16 DT" }], image: roseFramboiseLatte, tag: "Latte" },
      { name: "Oréo", description: "Sirop de vanille, Perles de tapioca, Coulis de chocolat, Brisures d'Oréo, Thé, Lait, Chantilly, Glaçons.", prices: [{ size: "330 ml", price: "14 DT" }, { size: "400 ml", price: "16 DT" }], image: oreoLatte, tag: "Latte" },
      { name: "Taro", description: "Poudre de taro, Perles de tapioca, Thé, Lait, Glaçons.", prices: [{ size: "330 ml", price: "14 DT" }, { size: "400 ml", price: "16 DT" }], image: taroLatte, tag: "Latte" },
  ],
  matcha: [
      { name: "Matcha", price: "12 DT", image: matchaImage },
      { name: "Matcha Latte", price: "12 DT", image: matchaLatteImage },
      { name: "Ice Mango Matcha", price: "14 DT", image: iceMangoMatchaImage },
      { name: "Ice Strawberry Matcha", price: "13 DT", image: iceStrawberryMatchaImage },
      { name: "Ice Passion Matcha", price: "16 DT", image: icePassionMatchaImage },
  ],
  smoothies: [
      { name: "Passionata", description: "Mangue · Passion · Ananas", price: "7–9 DT", image: icedSmoothie },
      { name: "Marabella", description: "Fraise · Framboise · Myrtille", price: "7–9 DT", image: smoothieBottles },
      { name: "Avocado Drink", description: "Avocat · Banane", price: "7–9 DT", image: icedSmoothie },
      { name: "Coco Loco", description: "Coco · Passion · Melon", price: "7–9 DT", image: smoothieBottles },
      { name: "Kiwi Sun", description: "Ananas · Banane · Kiwi", price: "7–9 DT", image: icedSmoothie },
      { name: "Dominico", description: "Ananas · Banane", price: "7–9 DT", image: smoothieBottles },
      { name: "Miami", description: "Mangue Prima · Banane", price: "7–9 DT", image: icedSmoothie },
      { name: "Soleil de Fruits", description: "Mangue Prima · Palma", price: "7–9 DT", image: smoothieBottles },
  ],
  jusDetox: [
      { name: "GOOD Hydration", description: "Pastèque · Concombre · Citron · Menthe", price: "10–16 DT", image: detoxBottles, tag: "Détox" },
      { name: "GOOD Detox", description: "Concombre · Pomme · Épinard · Citron", price: "10–16 DT", image: detoxTable, tag: "Détox" },
      { name: "GOOD Juice Miles", description: "Kiwi · Ananas · Avocat · Citron", price: "10–16 DT", image: detoxBottles, tag: "Détox" },
      { name: "GOOD Tonic", description: "Gingembre · Ananas · Carotte · Pomme · Curcuma", price: "10–16 DT", image: detoxTable, tag: "Détox" },
  ],
  cafes: [],
  thesGlaces: [
      { name: "Ice Tea Pêche", description: "Thé glacé aromatisé à la pêche.", price: "Sur demande", image: iceTeaPeche },
      { name: "Ice Tea Fruits Rouges", description: "Thé glacé aux fruits rouges.", price: "Sur demande", image: iceTeaFruitsRouges },
      { name: "Ice Tea Mangue", description: "Thé glacé à la mangue fraîche.", price: "Sur demande", image: iceTeaMangue },
  ],
  mojitos: [
      { name: "Pastèque", price: "12 DT", image: mojitoBottles },
      { name: "Passion", price: "12 DT", image: mojitoBottles },
      { name: "Mangue", price: "12 DT", image: mojitoBottles },
      { name: "Virgin", price: "12 DT", image: mojitoBottles },
      { name: "Melon", price: "12 DT", image: mojitoBottles },
      { name: "Litchi", price: "12 DT", image: mojitoBottles },
      { name: "Cassis", price: "12 DT", image: mojitoBottles },
      { name: "Mûre", price: "12 DT", image: mojitoBottles },
      { name: "Pomme Verte", price: "12 DT", image: mojitoBottles },
      { name: "Pina Colada", price: "12 DT", image: mojitoBottles },
      { name: "Framboise", price: "12 DT", image: mojitoBottles },
      { name: "Limonade", price: "12 DT", image: mojitoBottles },
      { name: "Myrtille", price: "12 DT", image: mojitoBottles },
      { name: "Red Bull", price: "12 DT", image: mojitoBottles },
      { name: "Fraise", price: "12 DT", image: mojitoBottles },
      { name: "Blue", price: "12 DT", image: mojitoBottles },
  ],
  powerDrinks: [
      { name: "Energy Drink", description: "Boisson énergisante premium.", price: "Sur demande", image: energyBottles },
      { name: "Power Shake", description: "Protéines, fruits, énergie.", price: "Sur demande", image: powerShake },
      { name: "Avocat Pineapple", description: "Avocat frais, ananas, boost naturel.", price: "Sur demande", image: energyBottles },
      { name: "Avocat Power", description: "Avocat, épinard, citron, miel.", price: "Sur demande", image: powerShake },
  ],
  freshJuices: [
      { name: "Jus Citron", description: "Citron pressé frais.", price: "7–9 DT", image: freshBottles },
      { name: "Jus Fraise", description: "Fraises fraîches mixées.", price: "7–9 DT", image: freshFruits },
      { name: "Jus Mangue", description: "Mangue fraîche.", price: "7–9 DT", image: freshBottles },
      { name: "Jus Ananas", description: "Ananas frais pressé.", price: "7–9 DT", image: freshFruits },
      { name: "Jus Pêche", description: "Pêche fraîche mixée.", price: "7–9 DT", image: freshBottles },
      { name: "Jus Kiwi", description: "Kiwi frais pressé.", price: "7–9 DT", image: freshFruits },
  ],
  douceurs: [
      { name: "Yaourts Glacés", description: "Yaourt onctueux aux saveurs variées.", price: "Sur demande", image: brunchSweets, tag: "Glacées" },
      { name: "Granité Fruits", description: "Granité rafraîchissant aux fruits frais.", price: "Sur demande", image: flan, tag: "Glacées" },
      { name: "Cookies", description: "Cookies maison croustillants.", price: "Sur demande", image: cookieChocolat, tag: "Sucrées" },
      { name: "Cheesecakes", description: "Cheesecakes au fromage crémeux.", price: "Sur demande", image: cookiePistache, tag: "Sucrées" },
      { name: "Tiramisu", description: "Tiramisu classique maison.", price: "Sur demande", image: flan, tag: "Sucrées" },
      { name: "Cakes", description: "Cakes moelleux variés.", price: "Sur demande", image: brunchSweets, tag: "Sucrées" },
      { name: "Fondants", description: "Fondants au chocolat coulant.", price: "Sur demande", image: cookieChocolat, tag: "Sucrées" },
      { name: "Crêpes Sucrées", description: "Crêpes garnies de toppings au choix.", price: "Sur demande", image: cookiePistache, tag: "Sucrées" },
      { name: "Pancakes", description: "Pancakes moelleux maison.", price: "Sur demande", image: flan, tag: "Sucrées" },
      { name: "Gaufres", description: "Gaufres croustillantes garnies.", price: "Sur demande", image: brunchSweets, tag: "Sucrées" },
  ],
} satisfies Record<string, MenuItem[]>;

type MenuCategoryKey = keyof typeof menuData;

const bubbleTeaTags = Array.from(new Set(menuData.bubbletea.map((item) => item.tag).filter(Boolean))) as string[];

const cafeMenuSections: CafeMenuSection[] = [
  {
    title: "CAFÉS CLASSIQUES",
    items: [
      { name: "EXPRESSO", price: "4 DT" },
      { name: "AMERICAIN", price: "5 DT" },
      { name: "CAPPUCIN", price: "4 DT" },
      { name: "GRAND CRÈME", price: "5 DT" },
      { name: "CAPSULE NESPRESSO", price: "6 DT" },
      { name: "THÉ KYUFI", price: "5 DT" },
      { name: "THÉ INFUSION", price: "5 DT" },
      { name: "THÉ JASMIN", price: "6 DT" },
      { name: "SUPPLÉMENT AMANDE", price: "6 DT" },
      { name: "SUPPLÉMENT FRUITS SECS", price: "8 DT" },
      { name: "EAU PLATE 1 L", price: "3 DT" },
      { name: "EAU PLATE 0.5 L", price: "1.5 DT" },
      { name: "EAU GAZEUSE 1 L", price: "3 DT" },
    ],
  },
  {
    title: "PAUSE GOURMANDE",
    items: [
      { name: "CAFÉ GOURMAND", price: "12 DT" },
      { name: "THÉ GOURMAND", price: "12 DT" },
      { name: "SAN SEBASTIAN", price: "14 DT" },
    ],
    subtitle: "SAUCE PISTACHE OU SAUCE NUTELLA",
  },
  {
    title: "CAFÉS SPÉCIAUX",
    items: [
      { name: "LATTE CARAMEL", price: "12 DT" },
      { name: "LATTE NOISETTE", price: "12 DT" },
      { name: "LATTE PISTACHE", price: "14 DT" },
      { name: "LATTE VANILLE", price: "11 DT" },
      { name: "LATTE CHOCOLAT", price: "11 DT" },
      { name: "SPANISH LATTE", price: "11 DT" },
      { name: "CAPPUCCINO", price: "6 DT" },
      { name: "NESCAFÉ", price: "4 DT" },
    ],
    subtitle: "CAFÉS GLACÉ OU CHAUD",
  },
];

const cafeMenuItemCount = cafeMenuSections.reduce((count, section) => count + section.items.length, 0);

const categories: MenuCategory[] = [
  {
    key: "bubbletea",
    id: "bubble-tea",
    label: "Bubble Tea",
    icon: "🧋",
    color: "#c4b5fd",
    bgColor: "#f5f3ff",
    textColor: "#5b21b6",
  },
  {
    key: "matcha",
    id: "matcha",
    label: "Matcha",
    icon: "🍵",
    color: "#8FA192",
    bgColor: "#eef4ec",
    textColor: "#425447",
  },
  {
    key: "smoothies",
    id: "smoothies",
    label: "Smoothies",
    icon: "🍹",
    color: "#fdba74",
    bgColor: "#fff7ed",
    textColor: "#c2410c",
    note: "🌿 Composez votre smoothie parmi : Banane, Fraise, Kiwi, Mangue, Ananas, Avocat, Framboise, Myrtille, Melon, Fruit du Dragon, Passion, Papaye, Goyave.",
  },
  {
    key: "jusDetox",
    id: "jus-detox",
    label: "Jus Détox",
    icon: "🌿",
    color: "#6ee7b7",
    bgColor: "#ecfdf5",
    textColor: "#065f46",
  },
  {
    key: "cafes",
    id: "cafes",
    label: "Cafés",
    icon: "☕",
    color: "#d97706",
    bgColor: "#fffbeb",
    textColor: "#78350f",
  },
  {
    key: "thesGlaces",
    id: "the-glace",
    label: "Thés Glacés",
    icon: "🍵",
    color: "#93c5fd",
    bgColor: "#eff6ff",
    textColor: "#1e40af",
  },
  {
    key: "mojitos",
    id: "mojitos",
    label: "Mojitos",
    icon: "🍃",
    color: "#86efac",
    bgColor: "#f0fdf4",
    textColor: "#14532d",
    note: "🌿 Tous nos mojitos sont sans alcool. Demandez nos tailles disponibles.",
  },
  {
    key: "powerDrinks",
    id: "power",
    label: "Power Drinks",
    icon: "⚡",
    color: "#fca5a5",
    bgColor: "#fff1f2",
    textColor: "#9f1239",
    note: "💪 Supplément protéine disponible : +4 DT",
  },
  {
    key: "freshJuices",
    id: "fresh-juices",
    label: "Fresh Juices",
    icon: "🍊",
    color: "#fde68a",
    bgColor: "#fffbeb",
    textColor: "#92400e",
    note: "📏 Tailles disponibles : 330ml / 470ml",
  },
  {
    key: "douceurs",
    id: "douceurs",
    label: "Douceurs",
    icon: "🍰",
    color: "#f9a8d4",
    bgColor: "#fdf2f8",
    textColor: "#831843",
  },
];

function MenuCard({ item, color, textColor }: { item: MenuItem; color: string; textColor: string }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -16, scale: 0.96 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl overflow-hidden flex flex-col group"
      style={{ background: "#F7F6F2", boxShadow: "0 2px 16px rgba(44,44,44,0.06)" }}
    >
      <div className="relative overflow-hidden" style={{ height: 180 }}>
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
        />
        {item.tag && (
          <span
            className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold"
            style={{ background: color, color: textColor, fontFamily: "'Nunito', sans-serif" }}
          >
            {item.tag}
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col gap-1 flex-1">
        <h4
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 17,
            color: "#2C2C2C",
            fontWeight: 600,
          }}
        >
          {item.name}
        </h4>
        {item.description && (
          <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 13, color: "#6b6b5e", lineHeight: 1.5 }}>
            {item.description}
          </p>
        )}
        {item.prices && (
          <div className="mt-auto pt-3 flex flex-wrap gap-2">
            {item.prices.map((option) => (
              <span
                key={option.size}
                className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-extrabold"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  background: color,
                  color: textColor,
                }}
              >
                <span>{option.size}</span>
                <span>{option.price}</span>
              </span>
            ))}
          </div>
        )}
        {item.price && !item.prices && (
          <p
            className="mt-auto pt-2"
            style={{ fontFamily: "'Nunito', sans-serif", fontSize: 15, fontWeight: 800, color: textColor }}
          >
            {item.price}
          </p>
        )}
      </div>
    </motion.div>
  );
}

function CafeMenuSections({ color, textColor }: { color: string; textColor: string }) {
  return (
    <motion.div
      key="cafes-text-menu"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 lg:grid-cols-3 gap-5"
    >
      {cafeMenuSections.map((section) => (
        <section
          key={section.title}
          className="rounded-2xl overflow-hidden"
          style={{
            background: "#fffaf2",
            border: `2px solid ${color}`,
            boxShadow: "0 2px 16px rgba(44,44,44,0.06)",
          }}
        >
          <div
            className="px-5 py-3 text-center"
            style={{
              background: color,
              color: textColor,
              fontFamily: "'Nunito', sans-serif",
              fontSize: 15,
              fontWeight: 900,
              letterSpacing: 1,
            }}
          >
            {section.title}
          </div>
          <div className="p-5">
            <div className="space-y-3">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-baseline gap-2"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    color: "#2C2C2C",
                    fontSize: 14,
                    fontWeight: 800,
                  }}
                >
                  <span className="shrink-0">{item.name}</span>
                  <span
                    className="min-w-4 flex-1 border-b"
                    style={{ borderColor: "rgba(44,44,44,0.35)", borderBottomStyle: "dotted" }}
                  />
                  <span className="shrink-0" style={{ color: textColor }}>
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
            {section.subtitle && (
              <p
                className="mt-5 rounded-full px-4 py-2 text-center"
                style={{
                  background: "#F7F6F2",
                  color: textColor,
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: 12,
                  fontWeight: 900,
                  letterSpacing: 0.8,
                }}
              >
                {section.subtitle}
              </p>
            )}
          </div>
        </section>
      ))}
    </motion.div>
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

export function Menu() {
  const [active, setActive] = useState<MenuCategoryKey>(categories[0].key);
  const [activeBubbleTeaTag, setActiveBubbleTeaTag] = useState(bubbleTeaTags[0]);

  const current = categories.find((c) => c.key === active)!;
  const currentItems =
    active === "bubbletea"
      ? menuData.bubbletea.filter((item) => item.tag === activeBubbleTeaTag)
      : menuData[active];
  const currentItemCount = active === "cafes" ? cafeMenuItemCount : currentItems.length;

  return (
    <section id="menu" style={{ background: "#F7F6F2", padding: "96px 0" }}>
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
              ☺ Notre menu ☺
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
              Une carte pour<br />
              <em>tous les plaisirs.</em>
            </h2>
          </div>
        </FadeIn>

        {/* Category tabs */}
        <FadeIn delay={0.1}>
          <div
            className="flex flex-wrap gap-3 justify-center mb-10"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActive(cat.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-300"
                style={{
                  background: active === cat.key ? cat.color : "#EFE8DE",
                  color: active === cat.key ? cat.textColor : "#6b6b5e",
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  boxShadow: active === cat.key ? `0 4px 16px ${cat.color}80` : "none",
                  border: `2px solid ${active === cat.key ? cat.color : "transparent"}`,
                }}
              >
                <span style={{ fontSize: 18 }}>{cat.icon}</span>
                {cat.label}
              </motion.button>
            ))}
          </div>
        </FadeIn>

        {/* Category header */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active + "-header"}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.35 }}
            className="mb-8 flex items-center gap-3"
          >
            <span style={{ fontSize: 36 }}>{current.icon}</span>
            <div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 28,
                  color: "#2C2C2C",
                }}
              >
                {current.label}
              </h3>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 13, color: "#7B8478", fontWeight: 600 }}>
                {currentItemCount} création{currentItemCount > 1 ? "s" : ""}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {active === "bubbletea" && (
          <FadeIn delay={0.05}>
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {bubbleTeaTags.map((tag) => (
                <motion.button
                  key={tag}
                  onClick={() => setActiveBubbleTeaTag(tag)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-4 py-2 rounded-full transition-all duration-300"
                  style={{
                    background: activeBubbleTeaTag === tag ? current.color : "#EFE8DE",
                    color: activeBubbleTeaTag === tag ? current.textColor : "#6b6b5e",
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: 13,
                    fontWeight: 800,
                    boxShadow: activeBubbleTeaTag === tag ? `0 4px 16px ${current.color}80` : "none",
                    border: `2px solid ${activeBubbleTeaTag === tag ? current.color : "transparent"}`,
                  }}
                >
                  {tag}
                </motion.button>
              ))}
            </div>
          </FadeIn>
        )}

        {/* Items grid */}
        <AnimatePresence mode="wait">
          {active === "cafes" ? (
            <CafeMenuSections color={current.color} textColor={current.textColor} />
          ) : (
            <motion.div
              key={active === "bubbletea" ? `${active}-${activeBubbleTeaTag}` : active}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            >
              {currentItems.map((item, i) => (
                <MenuCard
                  key={item.name + i}
                  item={item}
                  color={current.color}
                  textColor={current.textColor}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category note */}
        <AnimatePresence>
          {current.note && (
            <motion.div
              key={active + "-note"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-8 p-5 rounded-2xl"
              style={{ background: current.bgColor, border: `1px solid ${current.color}` }}
            >
              <p
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: 14,
                  color: current.textColor,
                  lineHeight: 1.6,
                }}
              >
                {current.note}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
