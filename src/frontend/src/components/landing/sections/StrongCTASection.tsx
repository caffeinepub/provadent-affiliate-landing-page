import { Clock } from 'lucide-react';
import BuyNowButton from '@/components/cta/BuyNowButton';
import { ctaCopy } from '@/content/provadentCopy';
import { LANDING_IMAGES } from '@/constants/landingImages';

export default function StrongCTASection() {
  return (
    <section className="bg-gradient-to-br from-teal-600 to-teal-700 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            {/* Product Image with Button */}
            <div className="flex flex-col items-center gap-4">
              <img 
                src={LANDING_IMAGES.strongCta}
                alt="ProvaDent three bottle package"
                className="h-auto w-full max-w-sm rounded-lg shadow-2xl"
                loading="lazy"
              />
              <BuyNowButton className="px-8 py-4 w-full sm:w-auto" />
            </div>

            {/* CTA Content */}
            <div className="text-center md:text-left">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                {ctaCopy.headline}
              </h2>
              <p className="mb-6 text-lg text-teal-50 md:text-xl">
                {ctaCopy.subheadline}
              </p>

              {/* Urgency */}
              <div className="mb-8 flex items-center justify-center gap-2 md:justify-start">
                <Clock className="h-5 w-5 text-amber-300" />
                <p className="text-amber-100 font-medium">
                  {ctaCopy.urgency}
                </p>
              </div>

              {/* CTA Button */}
              <div className="mb-6">
                <BuyNowButton 
                  className="px-12 py-6 text-lg w-full md:w-auto"
                />
              </div>

              {/* Guarantee */}
              <p className="text-sm text-teal-100">
                {ctaCopy.guarantee}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
