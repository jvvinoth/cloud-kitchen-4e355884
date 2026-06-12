import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const PartnershipSection: React.FC = () => {
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

  const handleContactClick = () => {
    const message = "Hi, I'm interested in partnership opportunities";
    const url = `https://wa.me/${siteContent.header.ctaButton.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section
      id="partnership"
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 bg-background"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-secondary mb-4">
            {siteContent.partnership.headline}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {siteContent.partnership.intro}
          </p>
        </div>

        {/* Partnership Cards */}
        <div className="space-y-6">
          {siteContent.partnership.sections.map((section, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-secondary mb-4">
                {section.title}
              </h3>
              <p className="text-text-muted leading-relaxed mb-6">
                {section.description}
              </p>
              <button
                onClick={handleContactClick}
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
              >
                {section.cta}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
