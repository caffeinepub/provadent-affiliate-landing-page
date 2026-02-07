import { Card, CardContent } from '@/components/ui/card';
import { Heart, Wind, Sparkles, Shield, CheckCircle } from 'lucide-react';
import BuyNowButton from '@/components/cta/BuyNowButton';
import { benefitsCopy } from '@/content/provadentCopy';
import { LANDING_IMAGES } from '@/constants/landingImages';

export default function BenefitsSection() {
  const iconMap: Record<string, React.ElementType> = {
    heart: Heart,
    wind: Wind,
    sparkles: Sparkles,
    shield: Shield,
    check: CheckCircle
  };

  return (
    <section className="bg-gradient-to-b from-teal-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Headline */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              {benefitsCopy.headline}
            </h2>
            <p className="text-lg text-slate-600 md:text-xl">
              {benefitsCopy.subheadline}
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefitsCopy.benefits.map((benefit, index) => {
              const Icon = iconMap[benefit.icon];
              return (
                <Card key={index} className="border-teal-100 bg-white shadow-md transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full bg-teal-100 p-4">
                        <Icon className="h-8 w-8 text-teal-600" />
                      </div>
                    </div>
                    <h3 className="mb-3 text-center text-xl font-semibold text-slate-900">
                      {benefit.title}
                    </h3>
                    <p className="text-center text-slate-600">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Supporting Image Strip */}
          <div className="mt-12 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl w-full">
              <div className="flex flex-col items-center gap-4">
                <img 
                  src={LANDING_IMAGES.benefitsStrip1}
                  alt="ProvaDent offer spotlight"
                  className="h-auto w-full rounded-lg shadow-md"
                  loading="lazy"
                />
                <BuyNowButton className="px-6 py-3 w-full sm:w-auto" size="default" />
              </div>
              <div className="flex flex-col items-center gap-4">
                <img 
                  src={LANDING_IMAGES.benefitsStrip2}
                  alt="ProvaDent product on blue background"
                  className="h-auto w-full rounded-lg shadow-md"
                  loading="lazy"
                />
                <BuyNowButton className="px-6 py-3 w-full sm:w-auto" size="default" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
