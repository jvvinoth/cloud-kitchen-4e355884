export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Appetizer' | 'Main' | 'Dessert';
  dietaryTags: string[];
  image: string;
}

export interface HowItWorksStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface DeliveryPlatform {
  name: string;
  logo: string;
}

export interface PartnershipSection {
  title: string;
  description: string;
  icon: string;
  cta: string;
}

export const siteContent = {
  businessName: "Cloud Kitchen",
  
  header: {
    logo: "Cloud Kitchen",
    navigation: [
      { label: "Menu", href: "#menu" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Why Us", href: "#why-us" },
      { label: "Catering", href: "#partnership" }
    ],
    ctaButton: {
      label: "Order on WhatsApp",
      whatsappNumber: "1234567890", // Placeholder
      whatsappMessage: "Hi, I'd like to order from your menu"
    }
  },

  hero: {
    badge: "Chef-driven delivery",
    headline: "Restaurant-quality meals delivered fast",
    subtext: "No dining room overhead means better food at better prices. Chef-crafted dishes from our licensed commercial kitchen to your door in 30 minutes.",
    ctaPrimary: {
      label: "Order on WhatsApp",
      whatsappNumber: "1234567890",
      whatsappMessage: "Hi, I'd like to order from your menu"
    },
    ctaSecondary: {
      label: "View Menu",
      href: "#menu"
    },
    deliveryBadge: "30 min delivery",
    heroImage: "https://images.unsplash.com/photo-1546039907-7fa05f864c02?auto=format&fit=crop&w=1600&q=80"
  },

  menu: {
    label: "This month's menu",
    headline: "Signature dishes",
    subtext: "Rotating seasonal menu crafted by experienced chefs. Updated monthly with the freshest ingredients.",
    items: [
      {
        id: "1",
        name: "Pan-Seared Scallops",
        description: "Garlic butter, microgreens, lemon zest",
        price: 18,
        category: "Appetizer" as const,
        dietaryTags: ["Gluten-free"],
        image: "https://images.unsplash.com/photo-1633504581786-316c8002b1b9?auto=format&fit=crop&w=1600&q=80"
      },
      {
        id: "2",
        name: "Burrata & Heirloom Tomatoes",
        description: "Basil oil, aged balsamic, sourdough crostini",
        price: 16,
        category: "Appetizer" as const,
        dietaryTags: ["Vegetarian"],
        image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=1600&q=80"
      },
      {
        id: "3",
        name: "Crispy Calamari",
        description: "Spicy aioli, pickled jalapeños, lime",
        price: 14,
        category: "Appetizer" as const,
        dietaryTags: ["Spicy"],
        image: "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=1600&q=80"
      },
      {
        id: "4",
        name: "Miso-Glazed Salmon",
        description: "Jasmine rice, bok choy, sesame seeds",
        price: 28,
        category: "Main" as const,
        dietaryTags: ["Gluten-free"],
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1600&q=80"
      },
      {
        id: "5",
        name: "Herb-Crusted Rack of Lamb",
        description: "Roasted fingerling potatoes, mint chimichurri",
        price: 34,
        category: "Main" as const,
        dietaryTags: [],
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1600&q=80"
      },
      {
        id: "6",
        name: "Wild Mushroom Risotto",
        description: "Truffle oil, parmesan, crispy sage",
        price: 22,
        category: "Main" as const,
        dietaryTags: ["Vegetarian"],
        image: "https://images.unsplash.com/photo-1476124369491-b79c2e43af61?auto=format&fit=crop&w=1600&q=80"
      },
      {
        id: "7",
        name: "Duck Confit",
        description: "Cherry gastrique, roasted root vegetables",
        price: 32,
        category: "Main" as const,
        dietaryTags: [],
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80"
      },
      {
        id: "8",
        name: "Dark Chocolate Lava Cake",
        description: "Vanilla bean ice cream, raspberry coulis",
        price: 12,
        category: "Dessert" as const,
        dietaryTags: ["Vegetarian"],
        image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=1600&q=80"
      },
      {
        id: "9",
        name: "Crème Brûlée Trio",
        description: "Classic vanilla, lavender, matcha",
        price: 14,
        category: "Dessert" as const,
        dietaryTags: ["Vegetarian", "Gluten-free"],
        image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&w=1600&q=80"
      }
    ] as MenuItem[]
  },

  howItWorks: {
    headline: "How it works",
    subtext: "From our kitchen to your table in three simple steps",
    steps: [
      {
        id: "1",
        number: "01",
        title: "Browse & Order",
        description: "Message us on WhatsApp or order through your favorite delivery app. Our full menu is updated weekly.",
        icon: "smartphone"
      },
      {
        id: "2",
        number: "02",
        title: "We Prepare Fresh",
        description: "Our chefs cook your meal to order in our licensed commercial kitchen. No pre-made food, no shortcuts.",
        icon: "chef-hat"
      },
      {
        id: "3",
        number: "03",
        title: "Fast Delivery",
        description: "Your meal arrives hot within 30 minutes. Available on all major delivery platforms across the metro area.",
        icon: "truck"
      }
    ] as HowItWorksStep[],
    deliveryPlatforms: [
      { name: "Uber Eats", logo: "uber-eats" },
      { name: "DoorDash", logo: "doordash" },
      { name: "Grubhub", logo: "grubhub" }
    ] as DeliveryPlatform[],
    serviceArea: "Delivering across Downtown, Midtown, and surrounding neighborhoods"
  },

  whyUs: {
    headline: "Why choose us",
    credentials: {
      title: "Professional expertise, delivery convenience",
      points: [
        {
          title: "Michelin-trained chefs",
          description: "Our culinary team trained at top restaurants in New York and San Francisco"
        },
        {
          title: "Licensed commercial kitchen",
          description: "Health department certified, regularly inspected, fully insured"
        },
        {
          title: "Premium ingredients",
          description: "We source from the same suppliers as fine-dining establishments"
        },
        {
          title: "No overhead markup",
          description: "Without a dining room to maintain, we pass the savings to you"
        }
      ]
    },
    testimonials: [
      {
        id: "1",
        name: "Sarah Mitchell",
        role: "Regular Customer",
        content: "The quality is incredible. This is honestly better than most sit-down restaurants I've been to, and it arrives at my door in 30 minutes.",
        rating: 5
      },
      {
        id: "2",
        name: "James Park",
        role: "Food Blogger",
        content: "Finally, a delivery option that doesn't compromise on quality. The duck confit is restaurant-grade.",
        rating: 5
      },
      {
        id: "3",
        name: "Emily Rodriguez",
        role: "Corporate Client",
        content: "We order for our office every week. The team loves the variety and the dietary options are fantastic.",
        rating: 5
      }
    ] as Testimonial[]
  },

  partnership: {
    headline: "Partnership opportunities",
    intro: "We work with delivery platforms and offer white-label services for restaurants looking to expand their delivery presence.",
    sections: [
      {
        title: "Delivery Platforms",
        description: "Find us on Uber Eats, DoorDash, and Grubhub. Full menu available with real-time updates.",
        icon: "smartphone",
        cta: "Learn more"
      },
      {
        title: "Corporate Catering",
        description: "Weekly meal programs for offices. Custom menus, dietary accommodations, reliable scheduling.",
        icon: "briefcase",
        cta: "Get started"
      },
      {
        title: "White-Label Kitchen",
        description: "We operate ghost kitchen brands for established restaurants. Full menu development and fulfillment.",
        icon: "users",
        cta: "Partner with us"
      }
    ] as PartnershipSection[]
  },

  contact: {
    headline: "Get in touch",
    subtext: "Ready to order or have questions about our service? We're here to help.",
    whatsapp: {
      number: "1234567890",
      message: "Hi, I'd like to know more about Cloud Kitchen",
      label: "Order on WhatsApp"
    },
    email: "hello@cloudkitchen.com",
    phone: "(123) 456-7890",
    hours: {
      weekday: "Mon - Fri: 11:00 AM - 10:00 PM",
      weekend: "Sat - Sun: 12:00 PM - 11:00 PM"
    },
    serviceArea: "Downtown, Midtown, and surrounding neighborhoods",
    deliveryInfo: "30-minute delivery within our service area"
  },

  footer: {
    tagline: "Restaurant-quality meals, delivered fast",
    copyright: "© 2024 Cloud Kitchen. All rights reserved.",
    social: [
      {
        platform: "Instagram",
        icon: "instagram",
        url: "https://instagram.com"
      },
      {
        platform: "Facebook",
        icon: "facebook",
        url: "https://facebook.com"
      },
      {
        platform: "Twitter",
        icon: "twitter",
        url: "https://twitter.com"
      }
    ],
    legal: [
      {
        label: "Privacy Policy",
        url: "/privacy"
      },
      {
        label: "Terms of Service",
        url: "/terms"
      },
      {
        label: "Cookie Policy",
        url: "/cookies"
      }
    ]
  }
};
