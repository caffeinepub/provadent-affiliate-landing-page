import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import BuyNowButton from '@/components/cta/BuyNowButton';
import { testimonialsCopy } from '@/content/provadentCopy';
import { LANDING_IMAGES } from '@/constants/landingImages';

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Headline */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              {testimonialsCopy.headline}
            </h2>
            <p className="text-lg text-slate-600 md:text-xl">
              {testimonialsCopy.subheadline}
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonialsCopy.testimonials.map((testimonial, index) => (
              <Card key={index} className="border-teal-100 bg-gradient-to-br from-white to-teal-50 shadow-md">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-teal-600 opacity-50" />
                  </div>

                  {/* Stars */}
                  <div className="mb-4 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="mb-4 text-slate-700 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-slate-200 pt-4">
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-600">Age {testimonial.age}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Supporting Image with Button */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <img 
              src={LANDING_IMAGES.testimonials}
              alt="Happy customers with ProvaDent"
              className="h-auto w-full max-w-md rounded-lg shadow-lg"
              loading="lazy"
            />
            <BuyNowButton className="px-8 py-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
