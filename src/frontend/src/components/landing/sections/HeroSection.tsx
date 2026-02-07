import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import BuyNowButton from '@/components/cta/BuyNowButton';
import { heroCopy } from '@/content/provadentCopy';
import { LANDING_IMAGES } from '@/constants/landingImages';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Trust Badges */}
          <div className="mb-6 flex flex-wrap justify-center gap-3">
            {heroCopy.trustBadges.map((badge, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className="bg-teal-100 text-teal-800 hover:bg-teal-200 px-4 py-2 text-sm font-medium"
              >
                {badge}
              </Badge>
            ))}
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
            {heroCopy.headline}
          </h1>

          {/* Subheadline */}
          <p className="mb-8 text-lg text-slate-600 md:text-xl">
            {heroCopy.subheadline}
          </p>

          {/* Product Image */}
          <div className="mb-6 flex justify-center">
            <img 
              src={LANDING_IMAGES.hero}
              alt="ProvaDent Advanced Oral Probiotic Complex"
              className="h-auto w-full max-w-md rounded-lg shadow-lg"
              loading="eager"
            />
          </div>

          {/* Buy Now Button Below Image */}
          <div className="mb-8 flex justify-center">
            <BuyNowButton className="px-8 py-4" />
          </div>

          {/* Star Rating */}
          <div className="mb-8 flex flex-col items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-sm text-slate-600">{heroCopy.satisfaction}</p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <BuyNowButton className="px-12 py-6 text-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
