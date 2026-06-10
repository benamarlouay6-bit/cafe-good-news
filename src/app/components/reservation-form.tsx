import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { toast } from 'sonner';

export function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    guests: '',
    date: '',
    time: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Réservation envoyée avec succès! Nous vous contacterons bientôt.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      guests: '',
      date: '',
      time: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card className="bg-white border-none rounded-3xl shadow-xl">
        <CardContent className="p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#5C6F67]">Nom</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="rounded-xl border-[#A8BFB5]/30 focus:border-[#5C6F67] bg-[#F7F4EC]/30"
                  placeholder="Votre nom complet"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-[#5C6F67]">Téléphone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="rounded-xl border-[#A8BFB5]/30 focus:border-[#5C6F67] bg-[#F7F4EC]/30"
                  placeholder="+216 XX XXX XXX"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#5C6F67]">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded-xl border-[#A8BFB5]/30 focus:border-[#5C6F67] bg-[#F7F4EC]/30"
                placeholder="votre@email.com"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="guests" className="text-[#5C6F67]">Nombre de personnes</Label>
                <Input
                  id="guests"
                  name="guests"
                  type="number"
                  min="1"
                  max="20"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="rounded-xl border-[#A8BFB5]/30 focus:border-[#5C6F67] bg-[#F7F4EC]/30"
                  placeholder="2"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date" className="text-[#5C6F67]">Date</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="rounded-xl border-[#A8BFB5]/30 focus:border-[#5C6F67] bg-[#F7F4EC]/30"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="time" className="text-[#5C6F67]">Heure</Label>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="rounded-xl border-[#A8BFB5]/30 focus:border-[#5C6F67] bg-[#F7F4EC]/30"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-[#5C6F67]">Message (optionnel)</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="rounded-xl border-[#A8BFB5]/30 focus:border-[#5C6F67] bg-[#F7F4EC]/30 resize-none"
                placeholder="Informations supplémentaires ou demandes spéciales..."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-[#5C6F67] hover:bg-[#7B8F87] text-[#FAF8F2] rounded-full py-6 text-lg"
            >
              Réserver
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
