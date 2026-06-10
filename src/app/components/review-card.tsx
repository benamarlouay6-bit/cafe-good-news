import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  rating: number;
  review: string;
  author: string;
  index: number;
}

export function ReviewCard({ rating, review, author, index }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
    >
      <Card className="bg-white border-none rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
        <CardContent className="p-8">
          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {[...Array(rating)].map((_, i) => (
              <Star
                key={i}
                className="fill-[#A8BFB5] text-[#A8BFB5]"
                size={20}
              />
            ))}
          </div>
          
          {/* Review Text */}
          <p className="text-[#5C6F67] text-lg mb-6 leading-relaxed italic">
            "{review}"
          </p>
          
          {/* Author */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#A8BFB5]/30 flex items-center justify-center">
              <span className="text-[#5C6F67] font-semibold text-lg">
                {author.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-semibold text-[#5C6F67]">— {author}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
