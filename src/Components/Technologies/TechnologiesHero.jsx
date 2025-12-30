import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TechnologiesHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="relative w-full h-[500px] sm:h-[600px] xs:h-[300px]">
      {/* Hero Image */}
      <img
        src="/assets/img/Hero.jpg"
        alt="Hero"
        className="w-full h-full object-cover"
      />

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/80"></div>

      {/* Centered Text */}
      <div
        className="absolute inset-0 flex flex-col justify-center items-center text-center px-4"
        data-aos="fade-up"
      >
        <h1 className="text-white font-extrabold leading-tight
                       text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Web Development Technologies
        </h1>
        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl mt-4 max-w-2xl">
          Implement responsive designs that work across devices. <br />
          Learn Tailwind CSS, modern layouts, and best practices for accessibility and performance.
        </p>
      </div>
    </div>
  );
};

export default TechnologiesHero;
