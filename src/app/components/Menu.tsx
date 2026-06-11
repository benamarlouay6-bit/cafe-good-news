import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import passionAnanas from "@/assets/bubbletea/passion-ananas.png";
import peche from "@/assets/bubbletea/peche.png";
import fruitsRouges from "@/assets/bubbletea/fruits-rouges.png";
import cocoAnanas from "@/assets/bubbletea/coco-ananas.png";
import pastequeCitron from "@/assets/bubbletea/pasteque-citron.png";

type MenuItem = {
  name: string;
  description?: string;
  price?: string;
  image?: string;
  tag?: string;
};

type MenuCategory = {
  id: string;
  label: string;
  icon: string;
  color: string;
  bgColor: string;
  textColor: string;
  items: MenuItem[];
  note?: string;
};

const bubbleTeaImg = "https://images.unsplash.com/photo-1747016804753-866c3ed6b3b7?w=400&h=400&fit=crop&auto=format";
const smoothieImg = "https://images.unsplash.com/photo-1514995428455-447d4443fa7f?w=400&h=400&fit=crop&auto=format";
const coffeeImg = "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?w=400&h=400&fit=crop&auto=format";
const coffeeImg2 = "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=400&h=400&fit=crop&auto=format";
const juiceImg = "https://images.unsplash.com/photo-1622597467821-df79dcb4f94d?w=400&h=400&fit=crop&auto=format";
const dessertImg = "https://images.unsplash.com/photo-1759303380841-55c09244fd2b?w=400&h=400&fit=crop&auto=format";
const dessertImg2 = "https://images.unsplash.com/photo-1773632996592-e150b9ed5059?w=400&h=400&fit=crop&auto=format";
const mojito = "https://images.unsplash.com/photo-1557454797-9f817f449cbf?w=400&h=400&fit=crop&auto=format";
const tigerSugar = "https://images.unsplash.com/photo-1741243038487-1d835e67bcbf?w=400&h=400&fit=crop&auto=format";

const categories: MenuCategory[] = [
  {
    id: "bubble-tea",
    label: "Bubble Tea",
    icon: "🧋",
    color: "#c4b5fd",
    bgColor: "#f5f3ff",
    textColor: "#5b21b6",
    items: [
      { name: "Passion & Ananas", description: "Perles de fruits, sirop passion, the.", price: "14–16 DT", image: passionAnanas, tag: "Perles de Fruits" },
      { name: "Pêche", description: "Perles de pêche, sirop fruité, the.", price: "14–16 DT", image: peche, tag: "Perles de Fruits" },
      { name: "Fruits Rouges", description: "Sirop framboise, perles de fruits rouges.", price: "14–16 DT", image: fruitsRouges, tag: "Perles de Fruits" },
      { name: "Coco & Ananas", description: "Coco de coco, sirop ananas, the.", price: "14–16 DT", image: cocoAnanas, tag: "Perles de Fruits" },
      { name: "Pastèque & Citron", description: "Sirop pastèque, zeste citron, perles.", price: "14–16 DT", image: pastequeCitron, tag: "Perles de Fruits" },
    ],
  },
  {
    id: "smoothies",
    label: "Smoothies",
    icon: "🍹",
    color: "#fdba74",
    bgColor: "#fff7ed",
    textColor: "#c2410c",
    items: [
      { name: "Passionata", description: "Mangue · Passion · Ananas", price: "7–9 DT", image: smoothieImg },
      { name: "Marabella", description: "Fraise · Framboise · Myrtille", price: "7–9 DT", image: juiceImg },
      { name: "Avocado Drink", description: "Avocat · Banane", price: "7–9 DT", image: smoothieImg },
      { name: "Coco Loco", description: "Coco · Passion · Melon", price: "7–9 DT", image: juiceImg },
      { name: "Kiwi Sun", description: "Ananas · Banane · Kiwi", price: "7–9 DT", image: smoothieImg },
      { name: "Dominico", description: "Ananas · Banane", price: "7–9 DT", image: juiceImg },
      { name: "Miami", description: "Mangue Prima · Banane", price: "7–9 DT", image: smoothieImg },
      { name: "Soleil de Fruits", description: "Mangue Prima · Palma", price: "7–9 DT", image: juiceImg },
    ],
    note: "🌿 Composez votre smoothie parmi : Banane, Fraise, Kiwi, Mangue, Ananas, Avocat, Framboise, Myrtille, Melon, Fruit du Dragon, Passion, Papaye, Goyave.",
  },
  {
    id: "jus-detox",
    label: "Jus Détox",
    icon: "🌿",
    color: "#6ee7b7",
    bgColor: "#ecfdf5",
    textColor: "#065f46",
    items: [
      { name: "GOOD Hydration", description: "Pastèque · Concombre · Citron · Menthe", price: "10–16 DT", image: juiceImg, tag: "Détox" },
      { name: "GOOD Detox", description: "Concombre · Pomme · Épinard · Citron", price: "10–16 DT", image: smoothieImg, tag: "Détox" },
      { name: "GOOD Juice Miles", description: "Kiwi · Ananas · Avocat · Citron", price: "10–16 DT", image: juiceImg, tag: "Détox" },
      { name: "GOOD Tonic", description: "Gingembre · Ananas · Carotte · Pomme · Curcuma", price: "10–16 DT", image: smoothieImg, tag: "Détox" },
    ],
  },
  {
    id: "cafes",
    label: "Cafés",
    icon: "☕",
    color: "#d97706",
    bgColor: "#fffbeb",
    textColor: "#78350f",
    items: [
      { name: "Expresso", price: "4 DT", image: coffeeImg, tag: "Classique" },
      { name: "Américain", price: "4 DT", image: coffeeImg2, tag: "Classique" },
      { name: "Cappuccino", price: "5 DT", image: coffeeImg, tag: "Classique" },
      { name: "Grand Crème", price: "5 DT", image: coffeeImg2, tag: "Classique" },
      { name: "Capsule Nespresso", price: "5 DT", image: coffeeImg, tag: "Classique" },
      { name: "The Kyufi", price: "5 DT", image: coffeeImg2, tag: "Classique" },
      { name: "The Infusion", price: "5 DT", image: coffeeImg, tag: "Classique" },
      { name: "The Jasmin", price: "5 DT", image: coffeeImg2, tag: "Classique" },
      { name: "Latte Caramel", description: "Espresso, lait vapeur, caramel.", price: "12 DT", image: coffeeImg, tag: "Spécial" },
      { name: "Latte Noisette", description: "Espresso, lait, sirop noisette.", price: "12 DT", image: coffeeImg2, tag: "Spécial" },
      { name: "Latte Pistache", description: "Espresso, lait, pâte pistache.", price: "13 DT", image: coffeeImg, tag: "Spécial" },
      { name: "Latte Vanille", description: "Espresso, lait vapeur, vanille.", price: "11 DT", image: coffeeImg2, tag: "Spécial" },
      { name: "Spanish Latte", description: "Espresso, lait concentré sucré.", price: "11 DT", image: coffeeImg, tag: "Spécial" },
      { name: "Latte Chocolat", description: "Espresso, lait, chocolat fondant.", price: "11 DT", image: coffeeImg2, tag: "Spécial" },
      { name: "Café Gourmand", description: "Café + mini desserts maison.", price: "12 DT", image: dessertImg, tag: "Pause" },
      { name: "Thé Gourmand", description: "Thé + mini desserts maison.", price: "12 DT", image: dessertImg2, tag: "Pause" },
      { name: "San Sebastian", description: "Cheesecake basque + boisson au choix.", price: "14 DT", image: dessertImg, tag: "Pause" },
    ],
  },
  {
    id: "the-glace",
    label: "Thés Glacés",
    icon: "🍵",
    color: "#93c5fd",
    bgColor: "#eff6ff",
    textColor: "#1e40af",
    items: [
      { name: "Ice Tea Pêche", description: "Thé glacé aromatisé à la pêche.", price: "Sur demande", image: juiceImg },
      { name: "Ice Tea Fruits Rouges", description: "Thé glacé aux fruits rouges.", price: "Sur demande", image: smoothieImg },
      { name: "Ice Tea Mangue", description: "Thé glacé à la mangue fraîche.", price: "Sur demande", image: juiceImg },
    ],
  },
  {
    id: "mojitos",
    label: "Mojitos",
    icon: "🍃",
    color: "#86efac",
    bgColor: "#f0fdf4",
    textColor: "#14532d",
    items: [
      { name: "Pastèque", price: "12 DT", image: mojito },
      { name: "Passion", price: "12 DT", image: mojito },
      { name: "Mangue", price: "12 DT", image: mojito },
      { name: "Virgin", price: "12 DT", image: mojito },
      { name: "Melon", price: "12 DT", image: mojito },
      { name: "Litchi", price: "12 DT", image: mojito },
      { name: "Cassis", price: "12 DT", image: mojito },
      { name: "Mûre", price: "12 DT", image: mojito },
      { name: "Pomme Verte", price: "12 DT", image: mojito },
      { name: "Pina Colada", price: "12 DT", image: mojito },
      { name: "Framboise", price: "12 DT", image: mojito },
      { name: "Limonade", price: "12 DT", image: mojito },
      { name: "Myrtille", price: "12 DT", image: mojito },
      { name: "Red Bull", price: "12 DT", image: mojito },
      { name: "Fraise", price: "12 DT", image: mojito },
      { name: "Blue", price: "12 DT", image: mojito },
    ],
    note: "🌿 Tous nos mojitos sont sans alcool. Demandez nos tailles disponibles.",
  },
  {
    id: "power",
    label: "Power Drinks",
    icon: "⚡",
    color: "#fca5a5",
    bgColor: "#fff1f2",
    textColor: "#9f1239",
    items: [
      { name: "Energy Drink", description: "Boisson énergisante premium.", price: "Sur demande", image: juiceImg },
      { name: "Power Shake", description: "Protéines, fruits, énergie.", price: "Sur demande", image: smoothieImg },
      { name: "Avocat Pineapple", description: "Avocat frais, ananas, boost naturel.", price: "Sur demande", image: juiceImg },
      { name: "Avocat Power", description: "Avocat, épinard, citron, miel.", price: "Sur demande", image: smoothieImg },
    ],
    note: "💪 Supplément protéine disponible : +4 DT",
  },
  {
    id: "fresh-juices",
    label: "Fresh Juices",
    icon: "🍊",
    color: "#fde68a",
    bgColor: "#fffbeb",
    textColor: "#92400e",
    items: [
      { name: "Jus Citron", description: "Citron pressé frais.", price: "7–9 DT", image: juiceImg },
      { name: "Jus Fraise", description: "Fraises fraîches mixées.", price: "7–9 DT", image: smoothieImg },
      { name: "Jus Mangue", description: "Mangue fraîche.", price: "7–9 DT", image: juiceImg },
      { name: "Jus Ananas", description: "Ananas frais pressé.", price: "7–9 DT", image: smoothieImg },
      { name: "Jus Pêche", description: "Pêche fraîche mixée.", price: "7–9 DT", image: juiceImg },
      { name: "Jus Kiwi", description: "Kiwi frais pressé.", price: "7–9 DT", image: smoothieImg },
    ],
    note: "📏 Tailles disponibles : 330ml / 470ml",
  },
  {
    id: "douceurs",
    label: "Douceurs",
    icon: "🍰",
    color: "#f9a8d4",
    bgColor: "#fdf2f8",
    textColor: "#831843",
    items: [
      { name: "Yaourts Glacés", description: "Yaourt onctueux aux saveurs variées.", price: "Sur demande", image: dessertImg2, tag: "Glacées" },
      { name: "Granité Fruits", description: "Granité rafraîchissant aux fruits frais.", price: "Sur demande", image: juiceImg, tag: "Glacées" },
      { name: "Cookies", description: "Cookies maison croustillants.", price: "Sur demande", image: dessertImg, tag: "Sucrées" },
      { name: "Cheesecakes", description: "Cheesecakes au fromage crémeux.", price: "Sur demande", image: dessertImg2, tag: "Sucrées" },
      { name: "Tiramisu", description: "Tiramisu classique maison.", price: "Sur demande", image: dessertImg, tag: "Sucrées" },
      { name: "Cakes", description: "Cakes moelleux variés.", price: "Sur demande", image: dessertImg2, tag: "Sucrées" },
      { name: "Fondants", description: "Fondants au chocolat coulant.", price: "Sur demande", image: dessertImg, tag: "Sucrées" },
      { name: "Crêpes Sucrées", description: "Crêpes garnies de toppings au choix.", price: "Sur demande", image: dessertImg2, tag: "Sucrées" },
      { name: "Pancakes", description: "Pancakes moelleux maison.", price: "Sur demande", image: dessertImg, tag: "Sucrées" },
      { name: "Gaufres", description: "Gaufres croustillantes garnies.", price: "Sur demande", image: dessertImg2, tag: "Sucrées" },
    ],
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
        {item.price && (
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
  const [active, setActive] = useState(categories[0].id);

  const current = categories.find((c) => c.id === active)!;

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
                onClick={() => setActive(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-300"
                style={{
                  background: active === cat.id ? cat.color : "#EFE8DE",
                  color: active === cat.id ? cat.textColor : "#6b6b5e",
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  boxShadow: active === cat.id ? `0 4px 16px ${cat.color}80` : "none",
                  border: `2px solid ${active === cat.id ? cat.color : "transparent"}`,
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
                {current.items.length} création{current.items.length > 1 ? "s" : ""}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Items grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
          >
            {current.items.map((item, i) => (
              <MenuCard
                key={item.name + i}
                item={item}
                color={current.color}
                textColor={current.textColor}
              />
            ))}
          </motion.div>
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
