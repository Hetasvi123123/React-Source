import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
const TechnologiesAbout = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    const technologies = [
        {
            icon: '🌐',
            title: 'HTML',
            description: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages. HTML5 introduces powerful new features for modern web applications.',
            features: [
                { title: 'Semantic Elements', info: 'Use meaningful tags like header, nav, article, section, and footer for better structure' },
                { title: 'Multimedia Support', info: 'Native audio and video elements without plugins' },
                { title: 'Canvas & SVG', info: 'Draw graphics and create animations directly in the browser' },
                { title: 'Form Enhancements', info: 'New input types like email, date, and range with built-in validation' },
            ],
            code: [
                '<!DOCTYPE html>',
                '<html lang="en">',
                '  <head>',
                '    <title>My Website</title>',
                '  </head>',
                '  <body>',
                '    <header>',
                '      <h1>Welcome!</h1>',
                '    </header>',
                '  </body>',
                '</html>',
            ],
        },
        {
            icon: '🎨',
            title: 'CSS',
            description: 'CSS controls the visual presentation of web pages. CSS3 brings powerful styling capabilities including animations, transitions, and responsive design.',
            features: [
                { title: 'Flexbox & Grid', info: 'Modern layout systems for responsive designs' },
                { title: 'Animations', info: 'Create smooth transitions and keyframe animations' },
                { title: 'Custom Properties', info: 'Variables for reusable values throughout your stylesheet' },
                { title: 'Media Queries', info: 'Responsive designs that adapt to any screen size' },
            ],
            code: [
                '.container {',
                '  display: flex;',
                '  justify-content: center;',
                '  background: linear-gradient(135deg, #667eea, #764ba2);',
                '  transition: all 0.3s ease;',
                '}',
            ],
        },
        {
            icon: '⚡',
            title: 'JavaScript',
            description: 'JavaScript is the programming language of the web, enabling interactive and dynamic content. It runs in the browser and powers modern web applications.',
            features: [
                { title: 'DOM Manipulation', info: 'Dynamically update page content and structure' },
                { title: 'Event Handling', info: 'Respond to user interactions like clicks and scrolls' },
                { title: 'Async Operations', info: 'Handle API calls and data fetching with promises' },
                { title: 'ES6+ Features', info: 'Modern syntax with arrow functions, classes, and modules' },
            ],
            code: [
                'const fetchData = async () => {',
                "  const response = await fetch('api/data');",
                '  const data = await response.json();',
                '  return data;',
                '};',
            ],
        },
        {
            icon: '⚛️',
            title: 'React',
            description: 'React is a popular JavaScript library for building user interfaces. It uses a component-based architecture for creating reusable UI elements.',
            features: [
                { title: 'Component-Based', info: 'Build encapsulated components that manage their own state' },
                { title: 'Virtual DOM', info: 'Efficient rendering with minimal DOM updates' },
                { title: 'Hooks', info: 'Use state and lifecycle features in functional components' },
                { title: 'Rich Ecosystem', info: 'Vast library of tools and community support' },
            ],
        },
        {
            icon: '🟢',
            title: 'Node.js',
            description: "Node.js is a JavaScript runtime built on Chrome's V8 engine, allowing JavaScript to run on the server side. Perfect for building scalable network applications.",
            features: [
                { title: 'Server-Side JavaScript', info: 'Use JavaScript for both frontend and backend' },
                { title: 'Non-Blocking I/O', info: 'Efficient handling of concurrent requests' },
                { title: 'NPM', info: "World's largest software registry with millions of packages" },
                { title: 'Fast Performance', info: 'V8 engine compiles JavaScript to native machine code' },
            ],
        },
        {
            icon: '🛠️',
            title: 'Popular Frameworks',
            description: 'Modern web development frameworks that help you build applications faster and more efficiently.',
            features: [
                { title: 'Vue.js', info: 'Progressive framework for building user interfaces with an approachable learning curve' },
                { title: 'Angular', info: 'Full-featured framework by Google for enterprise-scale applications' },
                { title: 'Next.js', info: 'React framework for production with server-side rendering and static generation' },
                { title: 'Express.js', info: 'Minimal and flexible Node.js web application framework' },
                { title: 'Tailwind CSS', info: 'Utility-first CSS framework for rapid UI development' },
                { title: 'Bootstrap', info: 'Popular CSS framework with pre-built responsive components' },
            ],
        },
    ];

    return (
        <div className="container mx-auto px-4 py-16 space-y-16" data-aos="fade-up">
            {technologies.map((tech, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg p-8" data-aos="fade-up">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="text-4xl">{tech.icon}</div>
                        <h2 className="text-2xl font-bold">{tech.title}</h2>

                    </div>
                    <p className="mb-6 text-gray-700">{tech.description}</p>
                    {tech.features && (
                        <>
                            <h3 className="text-xl font-semibold mb-4 text-[#003161]">Key Features</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {tech.features.map((f, i) => (
                                    <div
                                        key={i}
                                        className="p-4 bg-[#f0f4f8] border border-[#d1d9e6] rounded-lg hover:shadow-md transition"
                                    >
                                        <h4 className="font-bold text-gray-800">{f.title}</h4>
                                        <p className="text-gray-600 mt-1">{f.info}</p>
                                    </div>

                                ))}
                            </div>
                        </>
                    )}

                    {tech.code && (
                        <>
                            <h3 className="text-xl font-semibold mb-2 text-[#003161]">Code Example</h3>
                            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                                {tech.code.map((line, i) => (
                                    <div key={i} className="text-sm font-mono">
                                        {line}
                                    </div>
                                ))}
                            </pre>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default TechnologiesAbout;
