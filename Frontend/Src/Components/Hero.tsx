import React from 'react';
import { Button } from "@/components/ui/button";
import { Package, CheckCircle } from "lucide-react";

// Constants for reusable data
const HERO_DATA = {
  tag: {
    icon: Package,
    text: "Premium Packaging Solutions"
  },
  title: {
    main: "Packaging Solutions for the",
    highlight: "Modern Business"
  },
  description: "Custom, sustainable, and innovative packaging solutions that protect your products and elevate your brand.",
  features: ["Eco-friendly Options", "Custom Designs", "Fast Turnaround"],
  cta: {
    primary: "Get Started",
    secondary: "View Our Work"
  },
  featuredCard: {
    title: "Custom Retail Packaging",
    description: "Enhance your brand with our premium custom retail packaging solutions.",
    cta: "Learn More"
  }
};

const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2">
    <CheckCircle className="h-5 w-5 text-secondary" />
    <span>{text}</span>
  </div>
);

const FeaturedCard = () => (
  <div className="relative w-full max-w-md">
    <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8">
      <div className="absolute -top-3 -right-3 bg-secondary text-white text-sm font-bold px-3 py-1 rounded-full">
        Featured
      </div>
      <div className="flex justify-center">
        <div className="h-48 w-48 bg-gray-100 rounded-lg flex items-center justify-center">
          <Package className="h-24 w-24 text-primary/30" />
        </div>
      </div>
      <div className="mt-6 text-center">
        <h3 className="text-primary text-xl font-bold">{HERO_DATA.featuredCard.title}</h3>
        <p className="mt-2 text-gray-600">{HERO_DATA.featuredCard.description}</p>
        <Button className="mt-4 w-full bg-primary hover:bg-primary-light">
          {HERO_DATA.featuredCard.cta}
        </Button>
      </div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-28">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] 
        bg-cover bg-center opacity-10"
      />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-6 animate-fade-up">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <HERO_DATA.tag.icon className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium">{HERO_DATA.tag.text}</span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {HERO_DATA.title.main} <span className="text-secondary">{HERO_DATA.title.highlight}</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-white/80">
              {HERO_DATA.description}
            </p>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary-light text-white">
                {HERO_DATA.cta.primary}
              </Button>
              <Button size="lg" variant="outline" className="border-white hover:bg-white/10">
                {HERO_DATA.cta.secondary}
              </Button>
            </div>
            
            {/* Features */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              {HERO_DATA.features.map((feature, index) => (
                <FeatureItem key={index} text={feature} />
              ))}
            </div>
          </div>
          
          {/* Right Content */}
          <div className="md:w-1/2 flex justify-center">
            <FeaturedCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;