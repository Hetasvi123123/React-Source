import React from 'react';

const Featuresproject = () => {
  const handleViewMore = (title) => {
    alert(`View project details for ${title}!`);
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A fully responsive online shopping platform with cart management, payment integration, and user authentication.",
      tags: ["React", "Node.js", "MongoDB"],
      stats: { stars: 245, views: "1.2k" },
      emoji: "🚀",
      badge: "New",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Interactive data visualization dashboard with real-time updates and customizable widgets for business metrics.",
      tags: ["Vue.js", "D3.js", "Firebase"],
      stats: { stars: 389, views: "2.5k" },
      emoji: "📊",
      badge: "Popular",
      gradient: "from-pink-400 to-red-500",
    },
    {
      title: "Real-Time Chat App",
      description:
        "Modern messaging application with WebSocket support, file sharing, and group conversations.",
      tags: ["Socket.io", "Express", "PostgreSQL"],
      stats: { stars: 567, views: "3.8k" },
      emoji: "💬",
      badge: "Trending",
      gradient: "from-blue-400 to-cyan-400",
    },
    {
      title: "Portfolio Builder",
      description:
        "Create stunning portfolio websites with drag-and-drop interface and customizable templates.",
      tags: ["Next.js", "Tailwind", "Vercel"],
      stats: { stars: 198, views: 987 },
      emoji: "🎨",
      badge: null,
      gradient: "from-pink-400 to-yellow-200",
    },
    {
      title: "Task Manager Pro",
      description:
        "Productivity app with kanban boards, time tracking, and team collaboration features.",
      tags: ["Angular", "TypeScript", "Firebase"],
      stats: { stars: 423, views: "1.9k" },
      emoji: "📝",
      badge: null,
      gradient: "from-cyan-200 to-pink-200",
    },
    {
      title: "Interactive Game Hub",
      description:
        "Browser-based gaming platform with multiplayer support and leaderboards.",
      tags: ["Phaser", "WebGL", "Redis"],
      stats: { stars: 312, views: "1.6k" },
      emoji: "🎮",
      badge: null,
      gradient: "from-pink-300 to-pink-100",
    },
  ];

  return (
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">

    <section className="py-12 px-4 md:px-8 lg:px-16">

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Projects</h2>
        <p className="text-gray-500">
          Explore innovative web applications built by our community
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 cursor-pointer"
          >
            <div
              className={`flex items-center justify-center h-52 text-5xl text-white relative bg-gradient-to-r ${project.gradient}`}
            >
              {project.emoji}
              {project.badge && (
                <div className="absolute top-4 right-4 bg-white/90 text-indigo-600 px-3 py-1 rounded-full font-bold text-sm">
                  {project.badge}
                </div>
              )}
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-500 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="bg-gray-100 text-[#003161] px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center border-t border-gray-200 pt-4">
                <div className="flex gap-4 text-gray-400 text-sm">
                  <span>⭐ {project.stats.stars}</span>
                  <span>👁️ {project.stats.views}</span>
                </div>
                <button
                  onClick={() => handleViewMore(project.title)}
                  className="bg-gradient-to-r from-[#012952] to-[#003161] text-white px-4 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform"
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
      </div>

  );
};

export default Featuresproject;
