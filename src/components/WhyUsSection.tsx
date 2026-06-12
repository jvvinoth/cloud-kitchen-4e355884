import React, { useEffect, useRef, useState } from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const WhyUsSection: React.FC = () => {
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
      id="why-us"
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-secondary mb-4">
            {siteContent.whyUs.headline}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Credentials */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h3 className="font-serif text-3xl font-semibold text-secondary mb-8">
              {siteContent.whyUs.credentials.title}
            </h3>

            <div className="space-y-6">
              {siteContent.whyUs.credentials.points.map((point, index) => (
                <div
                  key={index}
                  className="flex gap-4"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-secondary mb-2">
                      {point.title}
                    </h4>
                    <p className="text-text-muted leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Testimonials */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="space-y-6">
              {siteContent.whyUs.testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="bg-background rounded-2xl p-6 border border-border"
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                >
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-secondary leading-relaxed mb-4">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div>
                    <p className="font-semibold text-secondary">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-text-muted">
                      {testimonial.role}
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
};
