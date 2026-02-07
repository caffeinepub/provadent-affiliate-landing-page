import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';
import { trustSafetyCopy } from '@/content/provadentCopy';

export default function TrustSafetySection() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Headline */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              {trustSafetyCopy.headline}
            </h2>
          </div>

          {/* Trust Items */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trustSafetyCopy.items.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
                  <CheckCircle2 className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="border-teal-600 text-teal-700 px-4 py-2">
              GMP Certified
            </Badge>
            <Badge variant="outline" className="border-teal-600 text-teal-700 px-4 py-2">
              Non-GMO
            </Badge>
            <Badge variant="outline" className="border-teal-600 text-teal-700 px-4 py-2">
              Natural Ingredients
            </Badge>
            <Badge variant="outline" className="border-teal-600 text-teal-700 px-4 py-2">
              Made in USA
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
