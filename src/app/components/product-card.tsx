import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  index: number;
}

export function ProductCard({ name, description, price, image, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 bg-white border-none rounded-3xl">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#5C6F67]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-2xl mb-2 text-[#5C6F67]">{name}</h3>
          <p className="text-[#7B8F87] mb-4 leading-relaxed">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-semibold text-[#5C6F67]">{price}</span>
            <Button 
              className="bg-[#5C6F67] hover:bg-[#7B8F87] text-[#FAF8F2] rounded-full px-6"
            >
              Commander
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
