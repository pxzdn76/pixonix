import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="glass-panel p-6 rounded-2xl tech-shadow group transition-all duration-300 ease-in-out hover:-translate-y-1">
      <div className="w-12 h-12 bg-surface text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-bg-dark transition-colors duration-300">
        <div className="w-6 h-6">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-text-title group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-text-muted text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
