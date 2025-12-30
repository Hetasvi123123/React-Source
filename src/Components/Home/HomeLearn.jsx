import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    { icon: '💡', title: 'Creative Freedom', info: 'Express your ideas through code and design' },
    { icon: '🚀', title: 'High Demand', info: 'Web developers are in high demand worldwide' },
    { icon: '🌍', title: 'Work Anywhere', info: 'Build a career with location independence' },
    { icon: '📈', title: 'Constant Growth', info: 'Always learning new technologies and skills' },
  ];

  return (
    <div className="block bg-[#003161]/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        <section className="py-16 px-4 sm:px-6 lg:px-16">

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#003161] text-center mb-12"
            data-aos="fade-up"
          >
            Why Learn Web Development?
          </h2>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4" data-aos="fade-up">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl sm:text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{feature.info}</p>
              </div>
            ))}
          </div>
        </section >
      </div>
    </div>
  );
};

export default Features;
