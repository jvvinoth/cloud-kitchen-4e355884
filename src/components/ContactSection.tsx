import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, Mail, Phone, Clock, MapPin } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const ContactSection: React.FC = () => {
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

  const handleWhatsAppClick = () => {
    const { number, message } = siteContent.contact.whatsapp;
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 bg-white"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-secondary mb-4">
            {siteContent.contact.headline}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {siteContent.contact.subtext}
          </p>
        </div>

        {/* WhatsApp CTA Card */}
        <div
          className={`bg-primary rounded-2xl p-8 md:p-12 text-center mb-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="max-w-xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-serif text-3xl font-semibold text-white mb-4">
              {siteContent.contact.whatsapp.label}
            </h3>
            <p className="text-white/90 mb-8">
              Get instant responses to your questions. We're here to help!
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="bg-white text-primary px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Start Chat
            </button>
          </div>
        </div>

        {/* Contact Info Grid */}
        <div
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Email */}
          <div className="bg-background rounded-2xl p-6 border border-border">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-1">Email</h4>
                <a
                  href={`mailto:${siteContent.contact.email}`}
                  className="text-text-muted hover:text-primary transition-colors"
                >
                  {siteContent.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-background rounded-2xl p-6 border border-border">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-1">Phone</h4>
                <a
                  href={`tel:${siteContent.contact.phone.replace(/\D/g, '')}`}
                  className="text-text-muted hover:text-primary transition-colors"
                >
                  {siteContent.contact.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-background rounded-2xl p-6 border border-border">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-1">Hours</h4>
                <p className="text-text-muted text-sm">
                  {siteContent.contact.hours.weekday}
                </p>
                <p className="text-text-muted text-sm">
                  {siteContent.contact.hours.weekend}
                </p>
              </div>
            </div>
          </div>

          {/* Service Area */}
          <div className="bg-background rounded-2xl p-6 border border-border">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-1">Delivery Area</h4>
                <p className="text-text-muted text-sm">
                  {siteContent.contact.serviceArea}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
