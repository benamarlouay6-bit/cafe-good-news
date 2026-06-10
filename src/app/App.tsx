import { motion } from 'motion/react';
import { Instagram, Facebook, MessageCircle, ArrowUp } from 'lucide-react';
import { HeroSection } from './components/hero-section';
import { ProductCard } from './components/product-card';
import { ReviewCard } from './components/review-card';
import { ReservationForm } from './components/reservation-form';
import { Button } from './components/ui/button';
import { Toaster } from './components/ui/sonner';
import { useState, useEffect } from 'react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const products = [
    {
      name: 'Iced Coffee GOOD NEWS',
      description: 'Notre signature glacée, préparée avec amour et les meilleurs grains.',
      price: '8.500 TND',
      image: 'https://images.unsplash.com/photo-1584286595398-a59f21d313f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VkJTIwY29mZmVlJTIwZHJpbmslMjBjYWZlfGVufDF8fHx8MTc4MTAzMjQwNXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Tiramisu Mangue',
      description: 'Une version exotique du classique italien, légère et rafraîchissante.',
      price: '12.000 TND',
      image: 'https://images.unsplash.com/photo-1714385905983-6f8e06fffae1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aXJhbWlzdSUyMGRlc3NlcnQlMjBjYWZlfGVufDF8fHx8MTc4MTAzMjQwNnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Frappés Signature',
      description: 'Onctueux et crémeux, nos frappés sont un délice glacé parfait.',
      price: '9.500 TND',
      image: 'https://images.unsplash.com/photo-1637178035222-a08f2d4dd1a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBmcmFwcGUlMjBmcmFwcHVjY2lub3xlbnwxfHx8fDE3ODEwMzI0MDd8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Jus Frais',
      description: 'Des fruits frais pressés chaque jour pour une explosion de vitamines.',
      price: '7.000 TND',
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGZydWl0JTIwanVpY2UlMjBiZXZlcmFnZXxlbnwxfHx8fDE3ODEwMzI0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Desserts Maison',
      description: 'Pâtisseries fraîches préparées quotidiennement par nos artisans.',
      price: '10.000 TND',
      image: 'https://images.unsplash.com/photo-1534432182912-63863115e106?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0cnklMjBkZXNzZXJ0JTIwY2FmZSUyMGRpc3BsYXl8ZW58MXx8fHwxNzgxMDMyNDExfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Latte Art Spécial',
      description: 'Un café crémeux sublimé par notre art du latte.',
      price: '8.000 TND',
      image: 'https://images.unsplash.com/photo-1593443320739-77f74939d0da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydCUyMGNvZmZlZSUyMGN1cHxlbnwxfHx8fDE3ODEwMzI0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const reviews = [
    {
      rating: 5,
      review: 'Le cadre est magnifique, le personnel est chaleureux et le packaging est très beau.',
      author: 'Zeineb Ayadi'
    },
    {
      rating: 5,
      review: 'Service rapide, accueil chaleureux, bravo !',
      author: 'Fatma Ben Salah'
    },
    {
      rating: 5,
      review: 'Excellente expérience, cuisine et service irréprochables.',
      author: 'Eya Bouaziz'
    }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1656690099972-6f9b2d8b9e4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjB0b3AlMjB2aWV3JTIwYWVzdGhldGljfGVufDF8fHx8MTc4MTAzMjQxMXww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1532713107108-dfb5d8d2fc42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJpc3RhJTIwcHJlcGFyaW5nJTIwY29mZmVlfGVufDF8fHx8MTc4MTAzMjQxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwbGlmZXN0eWxlJTIwcGVvcGxlJTIwZW5qb3lpbmd8ZW58MXx8fHwxNzgxMDMyNDA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1577056922428-a511301a562d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwb3V0ZG9vciUyMHNlYXRpbmd8ZW58MXx8fHwxNzgxMDMyNDEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1648462908676-8305f0eff8e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwZGVjb3IlMjBwbGFudHMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3ODEwMzI0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1598959652545-c0230cdbb01f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3IlMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzgxMDMyNDA1fDA&ixlib=rb-4.1.0&q=80&w=1080'
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F2]">
      <Toaster />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Notre Univers Section */}
      <section className="py-24 px-4 bg-[#F7F4EC]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl text-[#5C6F67] mb-6">
              Plus qu'un café, une expérience.
            </h2>
            <p className="text-xl text-[#7B8F87] max-w-3xl mx-auto leading-relaxed">
              GOOD NEWS SFAX est un lieu pensé pour partager de beaux moments autour de boissons 
              soigneusement préparées, de desserts gourmands et d'une ambiance chaleureuse.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]"
            >
              <img
                src="https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwbGlmZXN0eWxlJTIwcGVvcGxlJTIwZW5qb3lpbmd8ZW58MXx8fHwxNzgxMDMyNDA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Ambiance GOOD NEWS"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]"
            >
              <img
                src="https://images.unsplash.com/photo-1648462908676-8305f0eff8e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwZGVjb3IlMjBwbGFudHMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3ODEwMzI0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Décoration GOOD NEWS"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos Incontournables Section */}
      <section id="menu" className="py-24 px-4 bg-[#FAF8F2]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl text-[#5C6F67] mb-6">
              Nos Incontournables
            </h2>
            <p className="text-xl text-[#7B8F87] max-w-2xl mx-auto">
              Découvrez nos créations signature, préparées avec passion et les meilleurs ingrédients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Galerie Instagram Section */}
      <section className="py-24 px-4 bg-[#F7F4EC]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl text-[#5C6F67] mb-6">
              Le café le plus photogénique de Sfax
            </h2>
            <p className="text-xl text-[#7B8F87] max-w-2xl mx-auto mb-8">
              Chaque coin de GOOD NEWS est pensé pour créer des souvenirs mémorables.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`GOOD NEWS Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#5C6F67]/0 group-hover:bg-[#5C6F67]/20 transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Button
              size="lg"
              className="bg-[#5C6F67] hover:bg-[#7B8F87] text-[#FAF8F2] rounded-full px-8 py-6 text-lg gap-2"
              asChild
            >
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram size={24} />
                Suivez-nous sur Instagram
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Avis Clients Section */}
      <section className="py-24 px-4 bg-[#F7F4EC]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl text-[#5C6F67] mb-6">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-[#7B8F87] max-w-2xl mx-auto">
              Votre satisfaction est notre plus belle récompense.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Réservation Section */}
      <section id="reservation" className="py-24 px-4 bg-[#FAF8F2]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl text-[#5C6F67] mb-6">
              Réservez votre moment GOOD NEWS
            </h2>
            <p className="text-xl text-[#7B8F87]">
              Assurez votre place dans le café le plus accueillant de Sfax.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <ReservationForm />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute -top-8 -right-8 text-9xl opacity-10">☕</div>
                <img
                  src="https://images.unsplash.com/photo-1593443320739-77f74939d0da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydCUyMGNvZmZlZSUyMGN1cHxlbnwxfHx8fDE3ODEwMzI0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Coffee"
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-[#F7F4EC]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl text-[#5C6F67] mb-6">
              Venez nous rendre visite
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl text-[#5C6F67] mb-6">Informations de contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#A8BFB5]/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#5C6F67]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[#5C6F67] mb-1">Adresse</p>
                      <p className="text-[#7B8F87]">QPCV+34R, Route Bouzayyen, Sfax</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#A8BFB5]/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#5C6F67]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[#5C6F67] mb-1">Téléphone</p>
                      <p className="text-[#7B8F87]">+216 26 444 800</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#A8BFB5]/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#5C6F67]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[#5C6F67] mb-1">Horaires</p>
                      <p className="text-[#7B8F87]">Ouvert jusqu'à 00:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl text-[#5C6F67] mb-6">Suivez-nous</h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-[#5C6F67] flex items-center justify-center text-white hover:bg-[#7B8F87] transition-colors duration-300"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-[#5C6F67] flex items-center justify-center text-white hover:bg-[#7B8F87] transition-colors duration-300"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-[#5C6F67] flex items-center justify-center text-white hover:bg-[#7B8F87] transition-colors duration-300"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl overflow-hidden shadow-2xl h-[500px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.8947!2d10.7437!3d34.7407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQ0JzI2LjUiTiAxMMKwNDQnMzcuMyJF!5e0!3m2!1sen!2stn!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - GOOD NEWS SFAX"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5C6F67] text-[#FAF8F2] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-4xl mb-4 font-serif">GOOD NEWS</h3>
              <p className="text-[#A8BFB5] italic text-lg">
                Chaque visite mérite sa bonne nouvelle.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl mb-4 font-semibold">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={scrollToTop}
                    className="text-[#A8BFB5] hover:text-[#FAF8F2] transition-colors duration-200"
                  >
                    Accueil
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-[#A8BFB5] hover:text-[#FAF8F2] transition-colors duration-200"
                  >
                    Carte
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-[#A8BFB5] hover:text-[#FAF8F2] transition-colors duration-200"
                  >
                    Réservation
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl mb-4 font-semibold">Contact</h4>
              <ul className="space-y-2 text-[#A8BFB5]">
                <li>Route Bouzayyen, Sfax</li>
                <li>+216 26 444 800</li>
                <li>Ouvert jusqu'à minuit</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#7B8F87] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#A8BFB5]">
              © 2026 GOOD NEWS SFAX – Tous droits réservés.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A8BFB5] hover:text-[#FAF8F2] transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A8BFB5] hover:text-[#FAF8F2] transition-colors duration-200"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/21626444800"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform duration-300 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={28} />
      </motion.a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 w-14 h-14 bg-[#5C6F67] rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-[#7B8F87] transition-colors duration-300 z-50"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </div>
  );
}
