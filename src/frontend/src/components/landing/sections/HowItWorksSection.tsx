import { howItWorksCopy } from '@/content/provadentCopy';

export default function HowItWorksSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Headline */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              {howItWorksCopy.headline}
            </h2>
            <p className="text-lg text-slate-600 md:text-xl">
              {howItWorksCopy.subheadline}
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {howItWorksCopy.steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-600 text-2xl font-bold text-white shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1 pt-2">
                  <h3 className="mb-2 text-xl font-semibold text-slate-900 md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 md:text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
