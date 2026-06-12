import React from 'react';
import { Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const socialIconMap = {
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter
};

export const Footer: React.FC = () => {
  const handleWhatsAppClick = () => {
    const { whatsappNumber, whatsappMessage } = siteContent.header.ctaButton;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-3xl font-bold mb-4">
              {siteContent.businessName}
            </h3>
            <p className="text-white/80 mb-6 max-w-md">
              {siteContent.footer.tagline}
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-dark transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Order on WhatsApp
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="space-y-3">
              {siteContent.header.navigation.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <nav className="space-y-3">
              {siteContent.footer.legal.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-4">
              {siteContent.footer.social.map((social) => {
                const Icon = socialIconMap[social.icon as keyof typeof socialIconMap];
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    aria-label={social.platform}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <p className="text-white/60 text-sm">
              {siteContent.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
