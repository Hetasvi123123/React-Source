import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeTechnologies = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const technologies = [
        {
            title: "HTML",
            info: "The backbone of web content. HTML5 provides the structure and semantic meaning to your web pages, making them accessible and SEO-friendly."
        },
        {
            title: "CSS",
            info: "CSS styles your web pages, controlling layout, colors, fonts, and responsiveness. It ensures your site looks visually appealing on all devices."
        },
        {
            title: "JavaScript",
            info: "JavaScript brings your website to life with interactivity. From form validation to dynamic content updates, it powers user engagement and functionality."
        },
        {
            title: "React",
            info: "React is a JavaScript library for building modern user interfaces. Its component-based architecture makes code reusable and easy to maintain."
        },
        {
            title: "Node.js",
            info: "Node.js allows JavaScript to run on the server side. It enables building fast, scalable backend applications and APIs with a single language."
        },
        {
            title: "Tailwind",
            info: "Tailwind CSS is a utility-first framework for rapidly designing responsive web pages. It simplifies styling and keeps code clean and maintainable."
        }
    ];

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">

                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12" data-aos="fade-up">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#003161]">
                            Core Technologies
                        </h2>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3" data-aos="fade-up">
                        {technologies.map((tech, index) => (
                            <div key={index}>
                                <div
                                    className="p-8 rounded-2xl h-full"
                                    style={{
                                        background: 'linear-gradient(135deg, #003161 90%, #F5DAA7 90%)'
                                    }}
                                >
                                    <h3 className="text-2xl font-bold text-white mb-4">{tech.title}</h3>
                                    <p className="text-white text-sm sm:text-base">{tech.info}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeTechnologies;
