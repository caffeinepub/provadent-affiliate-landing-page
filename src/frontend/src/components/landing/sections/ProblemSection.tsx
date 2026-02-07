import { AlertCircle, Frown, Shield } from 'lucide-react';
import { problemCopy } from '@/content/provadentCopy';

export default function ProblemSection() {
  const icons = [AlertCircle, Frown, Shield];

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Headline */}
          <h2 className="mb-4 text-center text-3xl font-bold text-slate-900 md:text-4xl">
            {problemCopy.headline}
          </h2>
          
          {/* Intro */}
          <p className="mb-12 text-center text-lg text-slate-600 md:text-xl">
            {problemCopy.intro}
          </p>

          {/* Problems Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {problemCopy.problems.map((problem, index) => {
              const Icon = icons[index];
              return (
                <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-red-100 p-4">
                      <Icon className="h-8 w-8 text-red-600" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-center text-xl font-semibold text-slate-900">
                    {problem.title}
                  </h3>
                  <p className="text-center text-slate-600">
                    {problem.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
