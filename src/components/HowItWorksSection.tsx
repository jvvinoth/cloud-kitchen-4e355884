import React, { useEffect, useRef, useState } from 'react';
import { Smartphone, ChefHat, Truck } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap = {
  smartphone: Smartphone,
  'chef-hat': ChefHat,
  truck: Truck
};

export const HowItWorksSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-secondary mb-4">
            {siteContent.howItWorks.headline}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {siteContent.howItWorks.subtext}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {siteContent.howItWorks.steps.map((step, index) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            return (
              <div
                key={step.id}
                className={`text-center transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Icon Circle */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                  <Icon className="w-10 h-10 text-primary" />
                </div>

                {/* Step Number */}
                <div className="font-serif text-5xl font-bold text-secondary/10 mb-2">
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-secondary mb-4">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-base text-text-muted leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Delivery Platforms & Service Area */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-semibold text-secondary mb-4">
              Order from your favorite platform
            </h3>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {siteContent.howItWorks.deliveryPlatforms.map((platform) => (
                <div
                  key={platform.name}
                  className="px-6 py-3 bg-background rounded-xl border border-border"
                >
                  <span className="text-lg font-medium text-secondary">
                    {platform.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center pt-8 border-t border-border">
            <p className="text-sm text-text-muted">
              {siteContent.howItWorks.serviceArea}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
