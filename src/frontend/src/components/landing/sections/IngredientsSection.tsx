import { Card, CardContent } from '@/components/ui/card';
import { Leaf, FlaskConical, ShieldCheck, Microscope } from 'lucide-react';
import BuyNowButton from '@/components/cta/BuyNowButton';
import { ingredientsCopy } from '@/content/provadentCopy';
import { LANDING_IMAGES } from '@/constants/landingImages';

export default function IngredientsSection() {
  const icons = [Microscope, Leaf, ShieldCheck, FlaskConical];

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Headline */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              {ingredientsCopy.headline}
            </h2>
            <p className="text-lg text-slate-600 md:text-xl">
              {ingredientsCopy.subheadline}
            </p>
          </div>

          {/* Image and Features Grid */}
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            {/* Product Image with Button */}
            <div className="flex flex-col items-center gap-4">
              <img 
                src={LANDING_IMAGES.ingredients}
                alt="ProvaDent bottle on orange background"
                className="h-auto w-full max-w-md rounded-lg shadow-lg"
                loading="lazy"
              />
              <BuyNowButton className="px-8 py-4" />
            </div>

            {/* Features Grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {ingredientsCopy.features.map((feature, index) => {
                const Icon = icons[index];
                return (
                  <Card key={index} className="border-slate-200 bg-white shadow-sm">
                    <CardContent className="p-6">
                      <div className="mb-3">
                        <Icon className="h-8 w-8 text-teal-600" />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-slate-900">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
