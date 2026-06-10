import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1598959652545-c0230cdbb01f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3IlMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzgxMDMyNDA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="GOOD NEWS Cafe Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#5C6F67]/70 via-[#5C6F67]/50 to-[#FAF8F2]"></div>
      </div>

      {/* Smiley Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-10 text-6xl">😊</div>
        <div className="absolute top-40 right-20 text-5xl">😊</div>
        <div className="absolute bottom-40 left-20 text-7xl">😊</div>
        <div className="absolute bottom-20 right-10 text-6xl">😊</div>
        <div className="absolute top-1/2 left-1/4 text-5xl">😊</div>
      </div>

      {/* Organic Arc SVG */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 200" className="w-full h-auto">
          <path
            d="M0,100 Q360,20 720,100 T1440,100 L1440,200 L0,200 Z"
            fill="#F7F4EC"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-7xl md:text-8xl font-bold text-[#FAF8F2] mb-4 tracking-tight">
              GOOD NEWS
            </h1>
            <div className="w-32 h-1 bg-[#A8BFB5] mx-auto rounded-full"></div>
          </div>

          {/* Welcome Text */}
          <motion.h2
            className="text-4xl md:text-5xl text-[#FAF8F2] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Bienvenue chez GOOD NEWS
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-[#FAF8F2]/90 mb-12 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Là où chaque tasse apporte sa dose de bonheur.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-[#FAF8F2] text-[#5C6F67] hover:bg-[#F7F4EC] px-8 py-6 text-lg rounded-full"
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Découvrir la carte
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#FAF8F2] text-[#FAF8F2] hover:bg-[#FAF8F2]/10 px-8 py-6 text-lg rounded-full"
              onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Réserver une table
            </Button>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div className="bg-[#FAF8F2]/95 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3">
              <MapPin className="text-[#5C6F67] flex-shrink-0" size={24} />
              <div className="text-left">
                <p className="text-sm text-[#5C6F67]/70">Adresse</p>
                <p className="text-[#5C6F67] font-medium">Route Bouzayyen, Sfax</p>
              </div>
            </div>
            <div className="bg-[#FAF8F2]/95 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3">
              <Phone className="text-[#5C6F67] flex-shrink-0" size={24} />
              <div className="text-left">
                <p className="text-sm text-[#5C6F67]/70">Téléphone</p>
                <p className="text-[#5C6F67] font-medium">+216 26 444 800</p>
              </div>
            </div>
            <div className="bg-[#FAF8F2]/95 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3">
              <Clock className="text-[#5C6F67] flex-shrink-0" size={24} />
              <div className="text-left">
                <p className="text-sm text-[#5C6F67]/70">Horaires</p>
                <p className="text-[#5C6F67] font-medium">Jusqu'à minuit</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
