import React from 'react';
import ModernCard from './ModernCard';

const ServiceItem = ({ service, index, isReversed = false }) => {
  const ImageSection = () => (
    <div className="relative h-80 lg:h-96 overflow-hidden rounded-2xl">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110"
        style={{ backgroundImage: `url(${service.image})` }}
      />
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10 hover:opacity-0 transition-opacity duration-500`} />
      
      {/* Icon */}
      <div className="absolute top-6 left-6">
        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
          <service.icon className="w-8 h-8 text-white" />
        </div>
      </div>
      
      {/* Title on Image */}
      <div className="absolute bottom-6 left-6 right-6">
        <h3 className="text-3xl font-display font-bold text-white">
          {service.title}
        </h3>
      </div>
    </div>
  );

  const ContentSection = () => (
    <div className="flex flex-col justify-center p-8 lg:p-8">
      <div className="">
        <service.icon className="w-12 h-12 text-primary-500 mb-4" />
        <h3 className="text-3xl font-display font-bold text-neutral-800 mb-4">
          {service.title}
        </h3>
      </div>
      <p className="text-lg text-neutral-600 leading-relaxed mb-6">
        {service.description}
      </p>
    </div>
  );

  return (
    <div 
      data-aos={isReversed ? 'fade-left' : 'fade-right'}
      data-aos-delay={index * 100}
      data-aos-duration="800"
    >
      <ModernCard 
        variant="modern" 
        className="overflow-hidden bg-transparent shadow-none border-0"
      >
        {/* Mobile Layout - Always Image on Top */}
        <div className="lg:hidden">
          <ImageSection />
          <ContentSection />
        </div>

        {/* Desktop Layout - Zigzag Pattern */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-0">
          {isReversed ? (
            <>
              <ContentSection />
              <ImageSection />
            </>
          ) : (
            <>
              <ImageSection />
              <ContentSection />
            </>
          )}
        </div>
      </ModernCard>
    </div>
  );
};

export default ServiceItem;