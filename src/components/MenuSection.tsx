import React, { useEffect, useRef, useState } from 'react';
import { siteContent } from '../lib/siteContent';
import type { MenuItem } from '../lib/siteContent';

const MenuCard: React.FC<{ item: MenuItem; index: number }> = ({ item, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  const handleOrder = () => {
    const message = `Hi, I'd like to order ${item.name}`;
    const url = `https://wa.me/${siteContent.header.ctaButton.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const categoryColors = {
    Appetizer: 'bg-accent text-white',
    Main: 'bg-primary text-white',
    Dessert: 'bg-secondary text-white'
  };

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      onClick={handleOrder}
    >
      <div className="relative aspect-[4/3]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        <div className={`absolute top-4 right-4 ${categoryColors[item.category]} px-3 py-1 rounded-full text-xs font-medium`}>
          {item.category}
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-serif text-2xl font-semibold text-secondary mb-2">
          {item.name}
        </h3>
        <p className="text-sm text-text-muted line-clamp-2 mb-4">
          {item.description}
        </p>

        {item.dietaryTags.length > 0 && (
          <div className="flex gap-2 flex-wrap mb-4">
            {item.dietaryTags.map((tag) => (
              <span
                key={tag}
                className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-background border border-border text-text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex justify-between items-center">
          <span className="font-serif text-2xl font-bold text-primary">
            ${item.price}
          </span>
          <button className="text-sm font-medium text-primary hover:underline">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export const MenuSection: React.FC = () => {
  return (
    <section id="menu" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Intro */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-accent font-medium mb-4">
            {siteContent.menu.label}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-secondary mb-4">
            {siteContent.menu.headline}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {siteContent.menu.subtext}
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteContent.menu.items.map((item, index) => (
            <MenuCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
