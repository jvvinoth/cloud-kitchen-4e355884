import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, Clock } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsAppClick = () => {
    const { whatsappNumber, whatsappMessage } = siteContent.hero.ctaPrimary;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  const handleViewMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector(siteContent.hero.ctaSecondary.href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-[90vh] lg:min-h-screen bg-background flex items-center py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-800 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="max-w-xl">
              {/* Badge */}
              <span className="inline-block px-4 py-2 rounded-full bg-white border border-border text-sm text-text-muted font-medium mb-6">
                {siteContent.hero.badge}
              </span>

              {/* Headline */}
              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-secondary leading-[1.05] tracking-tight mb-6">
                {siteContent.hero.headline}
              </h1>

              {/* Subtext */}
              <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-10 max-w-lg">
                {siteContent.hero.subtext}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary-dark transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  {siteContent.hero.ctaPrimary.label}
                </button>
                <button
                  onClick={handleViewMenu}
                  className="flex items-center justify-center border-2 border-secondary text-secondary px-8 py-4 rounded-xl font-medium hover:bg-secondary hover:text-white transition-all duration-300"
                >
                  {siteContent.hero.ctaSecondary.label}
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`relative transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative transform rotate-2">
              <div className="aspect-[4/5] md:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={siteContent.hero.heroImage}
                  alt="Chef-crafted gourmet dish"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-secondary">
                  {siteContent.hero.deliveryBadge}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
