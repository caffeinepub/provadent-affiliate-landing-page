import { CheckCircle2 } from 'lucide-react';
import BuyNowButton from '@/components/cta/BuyNowButton';
import { solutionCopy } from '@/content/provadentCopy';
import { LANDING_IMAGES } from '@/constants/landingImages';

export default function SolutionSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          {/* Headline */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              {solutionCopy.headline}
            </h2>
            <p className="text-lg text-slate-600 md:text-xl">
              {solutionCopy.subheadline}
            </p>
          </div>

          {/* Image and Benefits */}
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            {/* Product Image with Button */}
            <div className="flex flex-col items-center gap-4">
              <img 
                src={LANDING_IMAGES.solution}
                alt="ProvaDent bottles with natural ingredients"
                className="h-auto w-full max-w-md rounded-lg shadow-lg"
                loading="lazy"
              />
              <BuyNowButton className="px-8 py-4" />
            </div>

            {/* Benefits List */}
            <div className="space-y-6">
              {solutionCopy.benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-slate-900">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
