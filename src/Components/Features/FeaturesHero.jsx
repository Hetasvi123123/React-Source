import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FeaturesHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="relative w-full h-[500px] sm:h-[600px] xs:h-[300px]">
      {/* Background Image */}
      <img
        src="/assets/img/Hero.jpg"
        alt="Hero"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>

      {/* Text Content */}
      <div
        className="absolute inset-0 flex flex-col justify-center items-center text-center px-4"
        data-aos="fade-up"
      >
        <h2 className="text-white font-extrabold 
                       text-5xl sm:text-6xl md:text-7xl lg:text-8xl
                       leading-tight">
          Crafting Digital Experiences
        </h2>
        <p className="text-white text-base sm:text-lg md:text-xl mt-4 max-w-2xl">
          Stay ahead with top resources, projects, and web development insights.
        </p>
      </div>
    </div>
  );
};

export default FeaturesHero;
