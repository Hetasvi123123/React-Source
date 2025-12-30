import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
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
                       text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Build the web.<br /> Shape the Future
        </h1>
      </div>
    </div>
  );
};

export default Hero;
