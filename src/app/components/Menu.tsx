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

import avocadoDrinkImage from "@/assets/smoothies/avocado-drink.jpeg";
import cocoLocoImage from "@/assets/smoothies/coco-loco.jpeg";
import dominicoImage from "@/assets/smoothies/dominico.jpeg";
import kiwiSunImage from "@/assets/smoothies/kiwi-sun.jpeg";
import marabellaImage from "@/assets/smoothies/marabella.jpeg";
import miamiImage from "@/assets/smoothies/miami.jpeg";
import passionataImage from "@/assets/smoothies/passionata.jpeg";
import soleilDeFruitsImage from "@/assets/smoothies/soleil-de-fruits.jpeg";

import goodDetoxImage from "@/assets/jus-detox/good-detox.jpeg";
import goodHydrationImage from "@/assets/jus-detox/good-hydration.jpeg";
import goodTonicImage from "@/assets/jus-detox/good-tonic.jpeg";


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

type PowerDrinkItem = {
  name: string;
  ingredients: string;
  prices: { size: string; price: string }[];
};

type CapacityInfo = {
  size: string;
  price?: string;
};

type TextMenuSection = {
  title: string;
  items: { name: string; price: string; note?: string }[];
};

type FreshJuicePrice = {
  size: "330 ml" | "400 ml" | "500 ml" | "1 L";
  price: string;
};

type FreshJuiceItem = {
  name: string;
  prices: FreshJuicePrice[];
};

type FreshJuiceSection = {
  title: string;
  items: FreshJuiceItem[];
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
      { name: "Passionata", description: "Mangue · Passion · Ananas", price: "7–9 DT", image: passionataImage },
      { name: "Marabella", description: "Fraise · Framboise · Myrtille", price: "7–9 DT", image: marabellaImage },
      { name: "Avocado Drink", description: "Avocat · Banane", price: "7–9 DT", image: avocadoDrinkImage },
      { name: "Coco Loco", description: "Coco · Passion · Melon", price: "7–9 DT", image: cocoLocoImage },
      { name: "Kiwi Sun", description: "Ananas · Banane · Kiwi", price: "7–9 DT", image: kiwiSunImage },
      { name: "Dominico", description: "Ananas · Banane", price: "7–9 DT", image: dominicoImage },
      { name: "Miami", description: "Mangue Prima · Banane", price: "7–9 DT", image: miamiImage },
      { name: "Soleil de Fruits", description: "Mangue Prima · Palma", price: "7–9 DT", image: soleilDeFruitsImage },
  ],
  jusDetox: [
      { name: "GOOD Hydration", description: "Pastèque · Concombre · Citron · Menthe", price: "10–16 DT", image: goodHydrationImage, tag: "Détox" },
      { name: "GOOD Detox", description: "Concombre · Pomme · Épinard · Citron", price: "10–16 DT", image: goodDetoxImage, tag: "Détox" },
      { name: "GOOD Juice Miles", description: "Kiwi · Ananas · Avocat · Citron", price: "10–16 DT", image: goodDetoxImage, tag: "Détox" },
      { name: "GOOD Tonic", description: "Gingembre · Ananas · Carotte · Pomme · Curcuma", price: "10–16 DT", image: goodTonicImage, tag: "Détox" },
  ],
  cafes: [],
  thesGlaces: [],
  mojitos: [
      { name: "Pastèque", price: "12 DT" },
      { name: "Passion", price: "12 DT" },
      { name: "Mangue", price: "12 DT" },
      { name: "Virgin", price: "12 DT" },
      { name: "Melon", price: "12 DT" },
      { name: "Litchi", price: "12 DT" },
      { name: "Cassis", price: "12 DT" },
      { name: "Mûre", price: "12 DT" },
      { name: "Pomme Verte", price: "12 DT" },
      { name: "Pina Colada", price: "12 DT" },
      { name: "Framboise", price: "12 DT" },
      { name: "Limonade", price: "12 DT" },
      { name: "Myrtille", price: "12 DT" },
      { name: "Red Bull", price: "12 DT" },
      { name: "Fraise", price: "12 DT" },
      { name: "Blue", price: "12 DT" },
  ],
  powerDrinks: [],
  freshJuices: [],
  douceurs: [],
} satisfies Record<string, MenuItem[]>;

type MenuCategoryKey = keyof typeof menuData;

const bubbleTeaTags = Array.from(new Set(menuData.bubbletea.map((item) => item.tag).filter(Boolean))) as string[];

const freshJuiceSections: FreshJuiceSection[] = [
  {
    title: "SPECIAL FRESH JUICE",
    items: [
      { name: "BERGAMOTE", prices: [{ size: "1 L", price: "10 DT" }, { size: "5 L", price: "38 DT" }] },
      { name: "CITRON, BERGAMOTE", prices: [{ size: "1L", price: "9 DT" }, { size: "5 L", price: "35 DT" }] },
      { name: "FRAISE, FRAMBOISE", prices: [{ size: "1 L", price: "16 DT" }, { size: "5 L", price: "70 DT" }] },
      { name: "KIWI, MENTHE, ANANAS", prices: [{ size: "1 L", price: "15 DT" }, { size: "5 L", price: "60 DT" }] },
      { name: "AVOCAT", prices: [{ size: "1 L", price: "25 DT" }, { size: "5 L", price: "N.D" }] },
      { name: "BANANE, DATTES, FRUITS SECS", prices: [{ size: "1 L", price: "20 DT" }, { size: "5 L", price: "80 DT" }] },
      { name: "FRAMBOISE, BANANE", prices: [{ size: "1 L", price: "20 DT" }, { size: "5 L", price: "90 DT" }] },
      { name: "FRAMBOISE", prices: [{ size: "1 L", price: "N.D" }, { size: "5 L", price: "100 DT" }] },
      { name: "FRAMBOISE, ANANAS", prices: [{ size: "1 L", price: "20 DT" }, { size: "5 L", price: "80 DT" }] },
      { name: "HINDI", prices: [{ size: "1 L", price: "15 DT" }, { size: "5 L", price: "40 DT" }] },
      { name: "RAISIN ROUGE", prices: [{ size: "1 L", price: "20 DT" }, { size: "5 L", price: "60 DT" }] },
      { name: "RAISIN BLANC", prices: [{ size: "1 L", price: "18 DT" }, { size: "5 L", price: "60 DT" }] },
    ],
  },
  {
    title: "CITRON",
    items: [
      { name: "CITRON", prices: [{ size: "330 ml", price: "3 DT" }, { size: "400 ml", price: "4 DT" }, { size: "1 L", price: "6 DT" }, { size: "5 L", price: "25 DT" }] },
      { name: "CITRON, MENTHE", prices: [{ size: "330 ml", price: "3 DT" }, { size: "400 ml", price: "4 DT" }, { size: "1 L", price: "7 DT" }, { size: "5 L", price: "30 DT" }] },
      { name: "CITRON, MELON", prices: [{ size: "330 ml", price: "3.5 DT" }, { size: "400 ml", price: "4.5 DT" }, { size: "1 L", price: "8 DT" }, { size: "5 L", price: "35 DT" }] },
      { name: "CITRON, MENTHE", prices: [{ size: "330 ml", price: "4 DT" }, { size: "400 ml", price: "4.5 DT" }, { size: "1 L", price: "8 DT" }, { size: "5 L", price: "35 DT" }] },
      { name: "CITRON, ORGEAT", prices: [{ size: "330 ml", price: "4 DT" }, { size: "400 ml", price: "5 DT" }, { size: "1 L", price: "8 DT" }, { size: "5 L", price: "35 DT" }] },
    ],
  },
  {
    title: "FRAISE",
    items: [
      { name: "FRAISE", prices: [{ size: "330 ml", price: "3.5 DT" }, { size: "400 ml", price: "4.5 DT" }, { size: "1 L", price: "10 DT" }, { size: "5 L", price: "43 DT" }] },
      { name: "FRAISE, CITRON", prices: [{ size: "330 ml", price: "3 DT" }, { size: "400 ml", price: "4 DT" }, { size: "1 L", price: "9 DT" }, { size: "5 L", price: "40 DT" }] },
      { name: "FRAISE, BANANE", prices: [{ size: "330 ml", price: "6 DT" }, { size: "400 ml", price: "7 DT" }, { size: "1 L", price: "14 DT" }, { size: "5 L", price: "60 DT" }] },
      { name: "FRAISE, ANANAS", prices: [{ size: "330 ml", price: "6 DT" }, { size: "400 ml", price: "7 DT" }, { size: "1 L", price: "13 DT" }, { size: "5 L", price: "55 DT" }] },
    ],
  },
  {
    title: "MANGUE",
    items: [
      { name: "MANGUE", prices: [{ size: "330 ml", price: "5 DT" }, { size: "400 ml", price: "7 DT" }, { size: "1 L", price: "14 DT" }, { size: "5 L", price: "50 DT" }] },
      { name: "MANGUE, ANANAS", prices: [{ size: "330 ml", price: "7 DT" }, { size: "400 ml", price: "8 DT" }, { size: "1 L", price: "16 DT" }, { size: "5 L", price: "65 DT" }] },
      { name: "MANGUE, BANANE", prices: [{ size: "330 ml", price: "8 DT" }, { size: "400 ml", price: "9 DT" }, { size: "1 L", price: "16 DT" }, { size: "5 L", price: "65 DT" }] },
      { name: "MANGUE, PASSION, MELON", prices: [{ size: "330 ml", price: "8 DT" }, { size: "400 ml", price: "9 DT" }, { size: "1 L", price: "18 DT" }, { size: "5 L", price: "75 DT" }] },
      { name: "MANGUE, PASSION, ANANAS", prices: [{ size: "330 ml", price: "8 DT" }, { size: "400 ml", price: "9 DT" }, { size: "1 L", price: "18 DT" }, { size: "5 L", price: "80 DT" }] },
    ],
  },
  {
    title: "ANANAS",
    items: [
      { name: "ANANAS", prices: [{ size: "330 ml", price: "6 DT" }, { size: "400 ml", price: "7 DT" }, { size: "1 L", price: "11.5 DT" }, { size: "5 L", price: "65 DT" }] },
      { name: "ANANAS, MELON", prices: [{ size: "330 ml", price: "5 DT" }, { size: "400 ml", price: "6.5 DT" }, { size: "1 L", price: "14 DT" }, { size: "5 L", price: "55 DT" }] },
      { name: "ANANAS, ORANGE", prices: [{ size: "330 ml", price: "6 DT" }, { size: "400 ml", price: "7 DT" }, { size: "1 L", price: "14 DT" }, { size: "5 L", price: "55 DT" }] },
      { name: "ANANAS, BANANE", prices: [{ size: "330 ml", price: "6.5 DT" }, { size: "400 ml", price: "7.5 DT" }, { size: "1 L", price: "15 DT" }, { size: "5 L", price: "65 DT" }] },
    ],
  },
  {
    title: "PÊCHE",
    items: [
      { name: "PÊCHE", prices: [{ size: "330 ml", price: "4 DT" }, { size: "400 ml", price: "5 DT" }, { size: "1 L", price: "10 DT" }, { size: "5 L", price: "35 DT" }] },
      { name: "PÊCHE, MELON", prices: [{ size: "330 ml", price: "5 DT" }, { size: "400 ml", price: "6 DT" }, { size: "1 L", price: "10 DT" }, { size: "5 L", price: "40 DT" }] },
      { name: "PÊCHE, ABRICOT", prices: [{ size: "330 ml", price: "5 DT" }, { size: "400 ml", price: "6 DT" }, { size: "1 L", price: "12 DT" }, { size: "5 L", price: "50 DT" }] },
    ],
  },
  {
    title: "KIWI",
    items: [
      { name: "KIWI", prices: [{ size: "330 ml", price: "6 DT" }, { size: "400 ml", price: "7 DT" }, { size: "1 L", price: "11.5 DT" }, { size: "5 L", price: "65 DT" }] },
      { name: "KIWI, BANANE", prices: [{ size: "330 ml", price: "6 DT" }, { size: "400 ml", price: "7 DT" }, { size: "1 L", price: "15 DT" }, { size: "5 L", price: "65 DT" }] },
      { name: "KIWI, ANANAS", prices: [{ size: "330 ml", price: "6 DT" }, { size: "400 ml", price: "7 DT" }, { size: "1 L", price: "15 DT" }, { size: "5 L", price: "65 DT" }] },
      { name: "KIWI, BANANE, MELON", prices: [{ size: "330 ml", price: "5.5 DT" }, { size: "400 ml", price: "7 DT" }, { size: "1 L", price: "15 DT" }, { size: "5 L", price: "65 DT" }] },
    ],
  },
  {
    title: "ADDITIONAL FRUITS",
    items: [
      { name: "GOYAVE", prices: [{ size: "330 ml", price: "5 DT" }, { size: "400 ml", price: "6 DT" }, { size: "1 L", price: "12 DT" }, { size: "5 L", price: "50 DT" }] },
      { name: "MELON", prices: [{ size: "330 ml", price: "4 DT" }, { size: "400 ml", price: "5.5 DT" }, { size: "1 L", price: "10 DT" }, { size: "5 L", price: "40 DT" }] },
      { name: "BANANE, NOISETTE", prices: [{ size: "330 ml", price: "8 DT" }, { size: "400 ml", price: "10 DT" }, { size: "1 L", price: "20 DT" }, { size: "5 L", price: "N.D" }] },
      { name: "PINACOLADA (ANANAS, NOIX DE COCO)", prices: [{ size: "330 ml", price: "8 DT" }, { size: "400 ml", price: "9 DT" }, { size: "1 L", price: "18 DT" }, { size: "5 L", price: "75 DT" }] },
    ],
  },
];

const freshJuiceCapacities: FreshJuicePrice["size"][] = ["330 ml", "400 ml", "1 L", "5 L"];

const freshJuiceFruits = ["Citron", "Fraise", "Kiwi", "Mangue", "Ananas", "Melon", "Passion", "Pêche", "Goyave"];

const freshJuiceItemCount = freshJuiceSections.reduce((count, section) => count + section.items.length, 0);

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

const powerDrinkItems: PowerDrinkItem[] = [
  {
    name: "ENERGY DRINK",
    ingredients: "Banane, Avocat, Dattes, Lait Vanillé ou Yaourt",
    prices: [
      { size: "330 ml", price: "12 DT" },
      { size: "400 ml", price: "14 DT" },
    ],
  },
  {
    name: "POWER SHAKE",
    ingredients: "Banane, Avocat, Dattes, Lait Vanillé ou Yaourt",
    prices: [
      { size: "330 ml", price: "12 DT" },
      { size: "400 ml", price: "14 DT" },
    ],
  },
  {
    name: "AVOCAT PINEAPPLE",
    ingredients: "Avocat, Ananas, Yaourt",
    prices: [
      { size: "330 ml", price: "12 DT" },
      { size: "400 ml", price: "14 DT" },
    ],
  },
  {
    name: "AVOCAT POWER",
    ingredients: "Avocat, Dattes, Banane, Amandes, Miel, Fruits Secs",
    prices: [
      { size: "330 ml", price: "15 DT" },
      { size: "400 ml", price: "18 DT" },
    ],
  },
];

const powerDrinkItemCount = powerDrinkItems.length + 1;

const douceurMenuGroups: { title: string; sections: TextMenuSection[] }[] = [
  {
    title: "DOUCEURS SUCRÉES",
    sections: [
      {
        title: "COOKIES",
        items: [
          { name: "Pistache Framboise", price: "9 DT" },
          { name: "Noisette, Chocolat Blanc, Noix de Pécan", price: "8 DT" },
        ],
      },
      {
        title: "CHEESECAKES",
        items: [
          { name: "Nutella", price: "12 DT" },
          { name: "Spéculoos", price: "12 DT" },
          { name: "Fruits Rouges", price: "14 DT" },
          { name: "Pistache Framboise", price: "16 DT" },
          { name: "Caramel Beurre Salé", price: "12 DT" },
        ],
      },
      {
        title: "TIRAMISU",
        items: [
          { name: "Classique", price: "10 DT" },
          { name: "Fruits Rouges", price: "14 DT" },
          { name: "Mangue", price: "14 DT" },
          { name: "Matcha", price: "14 DT" },
          { name: "Brownie", price: "8 DT" },
          { name: "Courant d'Air", price: "8 DT" },
        ],
      },
      {
        title: "CAKES",
        items: [
          { name: "Citron", price: "5 DT" },
          { name: "Orange", price: "5 DT" },
          { name: "Healthy", price: "6 DT" },
          { name: "Chocolat", price: "5 DT" },
        ],
      },
      {
        title: "FONDANTS",
        items: [
          { name: "Chocolat", price: "8 DT" },
          { name: "Noisette", price: "9 DT" },
          { name: "Pistache", price: "12 DT" },
        ],
      },
      {
        title: "CRÊPES SUCRÉES / PAIN CAKES",
        items: [
          { name: "Nutella", price: "12 DT" },
          { name: "Spéculoos", price: "13 DT" },
          { name: "Brownie Caramel Salé Beurre", price: "15 DT" },
          { name: "Pistache Framboise", price: "18 DT" },
          {
            name: "Good News",
            price: "22 DT",
            note: "Crêpe tagliatelle avec 3 sauces au choix, fruits de saison et fruits secs",
          },
          { name: "SUPPLÉMENT FRUITS SECS", price: "3 DT" },
        ],
      },
      {
        title: "GAUFRES",
        items: [
          { name: "Gaufre Épi", price: "8 DT" },
          { name: "Gaufre Ronde", price: "8 DT" },
          { name: "Gaufre Spéculoos", price: "13 DT" },
          { name: "Gaufre Nutella", price: "12 DT" },
          { name: "Gaufre Caramel Beurre Salé", price: "12 DT" },
          { name: "Gaufre aux Fruits", price: "14 DT" },
        ],
      },
    ],
  },
  {
    title: "CRÊPES SALÉES",
    sections: [
      {
        title: "CRÊPES SALÉES",
        items: [
          { name: "Crêpe au Thon et Fromage", price: "14 DT" },
          { name: "Crêpe au Jambon et Fromage", price: "12 DT" },
          { name: "Crêpe au Thon, Jambon et Fromage", price: "16 DT" },
        ],
      },
    ],
  },
  {
    title: "OMELETTES",
    sections: [
      {
        title: "OMELETTES",
        items: [
          { name: "Végétarienne", price: "9 DT" },
          { name: "Thon et Fromage", price: "14 DT" },
          { name: "Jambon et Fromage", price: "12 DT" },
          { name: "Thon, Jambon et Fromage", price: "16 DT" },
        ],
      },
    ],
  },
  {
    title: "DOUCEURS GLACÉES",
    sections: [
      {
        title: "DOUCEURS GLACÉES",
        items: [
          { name: "Yaourt Glacé Fruits Rouges", price: "12 DT" },
          { name: "Yaourt Glacé Caramel", price: "11 DT" },
          { name: "Yaourt Glacé Mangue Passion", price: "11 DT" },
          { name: "Yaourt Glacé Nutella", price: "11 DT" },
        ],
      },
      {
        title: "SUPPLÉMENTS",
        items: [
          { name: "Supplément Sauce", price: "3 DT" },
          {
            name: "Supplément Toppic",
            price: "3 DT",
            note: "(Cacahuète, Noisette, Amande, Chocolat Pépite...)",
          },
        ],
      },
    ],
  },
];

const douceurMenuItemCount = douceurMenuGroups.reduce(
  (groupCount, group) =>
    groupCount + group.sections.reduce((sectionCount, section) => sectionCount + section.items.length, 0),
  0
);

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
  },
  {
    key: "powerDrinks",
    id: "power",
    label: "Power Drinks",
    icon: "⚡",
    color: "#fca5a5",
    bgColor: "#fff1f2",
    textColor: "#9f1239",
  },
  {
    key: "freshJuices",
    id: "fresh-juices",
    label: "Fresh Juices",
    icon: "🍊",
    color: "#fde68a",
    bgColor: "#fffbeb",
    textColor: "#92400e",
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

function MenuCard({
  item,
  color,
  textColor,
  showPrice = true,
}: {
  item: MenuItem;
  color: string;
  textColor: string;
  showPrice?: boolean;
}) {
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
        {showPrice && item.price && !item.prices && (
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

function IceTeaMenuSection({ color, textColor }: { color: string; textColor: string }) {
  return (
    <motion.section
      key="the-glace-text-menu"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
      className="max-w-3xl mx-auto rounded-2xl overflow-hidden"
      style={{
        background: "#fffaf2",
        border: `2px solid ${color}`,
        boxShadow: "0 2px 16px rgba(44,44,44,0.06)",
      }}
    >
      <div
        className="px-5 py-4 text-center"
        style={{
          background: color,
          color: textColor,
          fontFamily: "'Nunito', sans-serif",
          fontSize: "clamp(1.1rem, 4vw, 1.8rem)",
          fontWeight: 900,
          letterSpacing: 1,
        }}
      >
        THÉ GLACÉ (ICE TEA)
      </div>
      <div className="px-5 py-8 sm:px-8 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <span
            className="rounded-full px-6 py-3"
            style={{
              background: "#F7F6F2",
              color: "#2C2C2C",
              fontFamily: "'Nunito', sans-serif",
              fontSize: 18,
              fontWeight: 900,
            }}
          >
            330 ml
          </span>
          <span
            className="rounded-full px-7 py-3"
            style={{
              background: color,
              color: textColor,
              fontFamily: "'Nunito', sans-serif",
              fontSize: 24,
              fontWeight: 900,
            }}
          >
            6 DT
          </span>
        </div>
        <p
          className="mt-7"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.25rem, 4vw, 2rem)",
            color: "#2C2C2C",
            fontWeight: 700,
            lineHeight: 1.35,
          }}
        >
          PÊCHE / FRUITS ROUGES / MANGUE
        </p>
      </div>
    </motion.section>
  );
}

function MojitosMenuSection({ items, color, textColor }: { items: MenuItem[]; color: string; textColor: string }) {
  return (
    <motion.section
      key="mojitos-text-menu"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
      className="max-w-5xl mx-auto rounded-2xl overflow-hidden"
      style={{
        background: "#fffaf2",
        border: `2px solid ${color}`,
        boxShadow: "0 2px 16px rgba(44,44,44,0.06)",
      }}
    >
      <div
        className="px-5 py-4 text-center"
        style={{
          background: color,
          color: textColor,
          fontFamily: "'Nunito', sans-serif",
          fontSize: "clamp(1.1rem, 4vw, 1.8rem)",
          fontWeight: 900,
          letterSpacing: 1,
        }}
      >
        MOJITOS
      </div>
      <div className="p-5 sm:p-8">
        <div className="flex justify-center mb-7">
          <span
            className="rounded-full px-6 py-3"
            style={{
              background: color,
              color: textColor,
              fontFamily: "'Nunito', sans-serif",
              fontSize: 18,
              fontWeight: 900,
            }}
          >
            400 ml
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
          {items.map((item) => (
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
              <span className="shrink-0 uppercase">{item.name}</span>
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
      </div>
    </motion.section>
  );
}

function PowerDrinksMenuSection({ color, textColor }: { color: string; textColor: string }) {
  return (
    <motion.div
      key="power-drinks-text-menu"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-5"
    >
      {powerDrinkItems.map((item) => (
        <section
          key={item.name}
          className="rounded-2xl overflow-hidden"
          style={{
            background: "#fffaf2",
            border: `2px solid ${color}`,
            boxShadow: "0 2px 16px rgba(44,44,44,0.06)",
          }}
        >
          <div
            className="px-5 py-3"
            style={{
              background: color,
              color: textColor,
              fontFamily: "'Nunito', sans-serif",
              fontSize: 16,
              fontWeight: 900,
              letterSpacing: 0.8,
            }}
          >
            {item.name}
          </div>
          <div className="p-5">
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: 14,
                color: "#6b6b5e",
                lineHeight: 1.6,
                fontWeight: 700,
              }}
            >
              {item.ingredients}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.prices.map((option) => (
                <span
                  key={option.size}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2"
                  style={{
                    background: "#F7F6F2",
                    color: "#2C2C2C",
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: 13,
                    fontWeight: 900,
                  }}
                >
                  <span>{option.size}</span>
                  <span style={{ color: textColor }}>{option.price}</span>
                </span>
              ))}
            </div>
          </div>
        </section>
      ))}
      <section
        className="rounded-2xl p-5 md:col-span-2 text-center"
        style={{
          background: color,
          color: textColor,
          boxShadow: "0 2px 16px rgba(44,44,44,0.06)",
        }}
      >
        <h4
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: 18,
            fontWeight: 900,
            letterSpacing: 1,
          }}
        >
          SUPPLÉMENT PROTÉINE
        </h4>
        <p
          className="mt-2"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          4 DT
        </p>
      </section>
    </motion.div>
  );
}

function FreshJuicesMenuSection({ color, textColor }: { color: string; textColor: string }) {
  return (
    <motion.div
      key="fresh-juices-text-menu"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <section
        className="overflow-hidden rounded-[2rem]"
        style={{
          background: "linear-gradient(135deg, #fffaf2 0%, #fff6dd 48%, #f7f6f2 100%)",
          border: `2px solid ${color}`,
          boxShadow: "0 18px 48px rgba(44,44,44,0.1)",
        }}
      >
        <div className="px-5 py-6 sm:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: 12,
                  fontWeight: 900,
                  letterSpacing: 3,
                  color: textColor,
                }}
              >
                GOOD NEWS
              </p>
              <h4
                className="mt-2"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2rem, 7vw, 4.75rem)",
                  color: "#2C2C2C",
                  lineHeight: 0.95,
                }}
              >
                Fresh Juices
              </h4>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-end">
              {freshJuiceCapacities.map((capacity) => (
                <span
                  key={capacity}
                  className="inline-flex items-center justify-center rounded-full px-4 py-2"
                  style={{
                    background: capacity === "1 L" ? color : "#fffaf2",
                    border: `2px solid ${color}`,
                    color: capacity === "1 L" ? textColor : "#2C2C2C",
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: 13,
                    fontWeight: 900,
                    boxShadow: "0 6px 18px rgba(44,44,44,0.07)",
                  }}
                >
                  {capacity}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {freshJuiceSections.map((section) => (
          <section
            key={section.title}
            className="rounded-2xl overflow-hidden"
            style={{
              background: "#fffaf2",
              border: `1px solid ${color}`,
              boxShadow: "0 10px 28px rgba(44,44,44,0.07)",
            }}
          >
            <div
              className="px-5 py-3 text-center"
              style={{
                background: color,
                color: textColor,
                fontFamily: "'Nunito', sans-serif",
                fontSize: "clamp(0.9rem, 3vw, 1.15rem)",
                fontWeight: 900,
                letterSpacing: 1,
              }}
            >
              {section.title}
            </div>
            <div className="p-3 sm:p-5">
              <div className="hidden sm:grid grid-cols-[minmax(0,1.35fr)_repeat(4,minmax(72px,0.55fr))] gap-2 px-2 pb-3">
                <span />
                {freshJuiceCapacities.map((capacity) => (
                  <span
                    key={capacity}
                    className="rounded-full px-2 py-1 text-center"
                    style={{
                      background: "#F7F6F2",
                      color: textColor,
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: 11,
                      fontWeight: 900,
                    }}
                  >
                    {capacity}
                  </span>
                ))}
              </div>
              <div className="space-y-2">
                {section.items.map((item, index) => (
                  <div
                    key={`${section.title}-${item.name}-${index}`}
                    className="rounded-xl px-3 py-3 sm:grid sm:grid-cols-[minmax(0,1.35fr)_repeat(4,minmax(72px,0.55fr))] sm:items-center sm:gap-2"
                    style={{
                      background: index % 2 === 0 ? "#F7F6F2" : "#fffaf2",
                      border: "1px solid rgba(44,44,44,0.05)",
                    }}
                  >
                    <h5
                      style={{
                        fontFamily: "'Nunito', sans-serif",
                        color: "#2C2C2C",
                        fontSize: 13,
                        fontWeight: 900,
                        letterSpacing: 0.2,
                        lineHeight: 1.25,
                      }}
                    >
                      {item.name}
                    </h5>
                    <div className="mt-3 grid grid-cols-2 gap-2 sm:contents">
                      {freshJuiceCapacities.map((capacity) => {
                        const option = item.prices.find((price) => price.size === capacity);

                        return (
                          <div
                            key={capacity}
                            className="flex items-center justify-between gap-2 rounded-full px-3 py-2 sm:justify-center sm:px-2"
                            style={{
                              background: option ? "#ffffff" : "rgba(255,255,255,0.38)",
                              color: option ? "#2C2C2C" : "rgba(44,44,44,0.3)",
                              border: `1px solid ${option ? "rgba(44,44,44,0.08)" : "transparent"}`,
                              fontFamily: "'Nunito', sans-serif",
                              fontSize: 12,
                              fontWeight: 900,
                            }}
                          >
                            <span className="sm:hidden" style={{ color: textColor }}>
                              {capacity}
                            </span>
                            <span style={{ color: option?.price === "N.D" ? "#7B8478" : textColor }}>
                              {option?.price ?? "-"}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <section
        className="rounded-2xl p-5 sm:p-7"
        style={{
          background: "#fffaf2",
          border: `2px solid ${color}`,
          boxShadow: "0 10px 28px rgba(44,44,44,0.07)",
        }}
      >
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h4
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "clamp(1.05rem, 4vw, 1.6rem)",
                color: textColor,
                fontWeight: 900,
                letterSpacing: 1,
              }}
            >
              COMPOSEZ VOUS (3 FRUITS)
            </h4>
            <p
              className="mt-1"
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: 13,
                color: "#6b6b5e",
                fontWeight: 800,
              }}
            >
              FRUITS DISPONIBLES :
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {freshJuiceFruits.map((fruit) => (
              <span
                key={fruit}
                className="rounded-full px-4 py-2"
                style={{
                  background: "#F7F6F2",
                  color: "#2C2C2C",
                  border: `1px solid ${color}`,
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: 13,
                  fontWeight: 900,
                }}
              >
                {fruit}
              </span>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function MenuPriceRow({ item, textColor }: { item: TextMenuSection["items"][number]; textColor: string }) {
  return (
    <div>
      <div
        className="flex items-baseline gap-2"
        style={{
          fontFamily: "'Nunito', sans-serif",
          color: "#2C2C2C",
          fontSize: 14,
          fontWeight: 800,
        }}
      >
        <span className="shrink min-w-0">{item.name}</span>
        <span
          className="min-w-4 flex-1 border-b"
          style={{ borderColor: "rgba(44,44,44,0.35)", borderBottomStyle: "dotted" }}
        />
        <span className="shrink-0" style={{ color: textColor }}>
          {item.price}
        </span>
      </div>
      {item.note && (
        <p
          className="mt-1 pr-10"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: 12,
            color: "#6b6b5e",
            lineHeight: 1.45,
            fontWeight: 700,
          }}
        >
          {item.note}
        </p>
      )}
    </div>
  );
}

function DouceursMenuSection({ color, textColor }: { color: string; textColor: string }) {
  return (
    <motion.div
      key="douceurs-text-menu"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      {douceurMenuGroups.map((group) => (
        <section
          key={group.title}
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
              fontSize: "clamp(1rem, 3vw, 1.45rem)",
              fontWeight: 900,
              letterSpacing: 1,
            }}
          >
            {group.title}
          </div>
          <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {group.sections.map((section) => (
              <div key={section.title} className="rounded-xl p-4" style={{ background: "#F7F6F2" }}>
                <h4
                  className="mb-4"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: 14,
                    color: textColor,
                    fontWeight: 900,
                    letterSpacing: 0.8,
                  }}
                >
                  {section.title}
                </h4>
                <div className="space-y-3">
                  {section.items.map((item) => (
                    <MenuPriceRow key={`${section.title}-${item.name}`} item={item} textColor={textColor} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </motion.div>
  );
}

function CapacityHeader({
  title,
  capacities,
  color,
  textColor,
}: {
  title: string;
  capacities: CapacityInfo[];
  color: string;
  textColor: string;
}) {
  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35 }}
      className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
    >
      <div
        className="rounded-full px-6 py-3 text-center"
        style={{
          background: color,
          color: textColor,
          fontFamily: "'Nunito', sans-serif",
          fontSize: "clamp(1.05rem, 4vw, 1.65rem)",
          fontWeight: 900,
          letterSpacing: 1,
        }}
      >
        {title}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {capacities.map((capacity) => (
          <div
            key={`${capacity.size}-${capacity.price ?? "size"}`}
            className="flex items-center gap-2 rounded-full px-4 py-2"
            style={{
              background: "#fffaf2",
              border: `2px solid ${color}`,
              color: "#2C2C2C",
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 900,
              boxShadow: "0 2px 12px rgba(44,44,44,0.05)",
            }}
          >
            <span aria-hidden="true" style={{ fontSize: 24 }}>
              🥤
            </span>
            <span style={{ fontSize: 12, lineHeight: 1.1 }}>{capacity.size}</span>
            {capacity.price && (
              <span
                className="rounded-full px-2 py-1"
                style={{ background: color, color: textColor, fontSize: 14, lineHeight: 1 }}
              >
                {capacity.price}
              </span>
            )}
          </div>
        ))}
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
  const [active, setActive] = useState<MenuCategoryKey>(categories[0].key);
  const [activeBubbleTeaTag, setActiveBubbleTeaTag] = useState(bubbleTeaTags[0]);

  const current = categories.find((c) => c.key === active)!;
  const currentItems =
    active === "bubbletea"
      ? menuData.bubbletea.filter((item) => item.tag === activeBubbleTeaTag)
      : menuData[active];
  const currentItemCount =
    active === "cafes"
      ? cafeMenuItemCount
      : active === "thesGlaces"
        ? 3
        : active === "powerDrinks"
          ? powerDrinkItemCount
          : active === "douceurs"
            ? douceurMenuItemCount
            : active === "freshJuices"
              ? freshJuiceItemCount
              : currentItems.length;

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

        <AnimatePresence mode="wait">
          {active === "bubbletea" && activeBubbleTeaTag === "Perles de Fruits" && (
            <CapacityHeader
              title="PERLES DE FRUITS"
              capacities={[
                { size: "330 ml", price: "14 DT" },
                { size: "400 ml", price: "16 DT" },
              ]}
              color={current.color}
              textColor={current.textColor}
            />
          )}
          {active === "matcha" && (
            <CapacityHeader
              title="MATCHA"
              capacities={[{ size: "400 ml" }]}
              color={current.color}
              textColor={current.textColor}
            />
          )}
          {active === "smoothies" && (
            <CapacityHeader
              title="SMOOTHIES - FRUITS NATURELS"
              capacities={[
                { size: "330 ml", price: "12 DT" },
                { size: "400 ml", price: "14 DT" },
              ]}
              color={current.color}
              textColor={current.textColor}
            />
          )}
          {active === "jusDetox" && (
            <CapacityHeader
              title="JUS DETOX"
              capacities={[
                { size: "330 ml", price: "10 DT" },
                { size: "400 ml", price: "12 DT" },
                { size: "500 ml", price: "16 DT" },
              ]}
              color={current.color}
              textColor={current.textColor}
            />
          )}
        </AnimatePresence>

        {/* Items grid */}
        <AnimatePresence mode="wait">
          {active === "cafes" ? (
            <CafeMenuSections color={current.color} textColor={current.textColor} />
          ) : active === "thesGlaces" ? (
            <IceTeaMenuSection color={current.color} textColor={current.textColor} />
          ) : active === "mojitos" ? (
            <MojitosMenuSection items={currentItems} color={current.color} textColor={current.textColor} />
          ) : active === "powerDrinks" ? (
            <PowerDrinksMenuSection color={current.color} textColor={current.textColor} />
          ) : active === "freshJuices" ? (
            <FreshJuicesMenuSection color={current.color} textColor={current.textColor} />
          ) : active === "douceurs" ? (
            <DouceursMenuSection color={current.color} textColor={current.textColor} />
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
                  showPrice={active !== "smoothies" && active !== "jusDetox"}
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
