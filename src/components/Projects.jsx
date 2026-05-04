import useScrollReveal from '../hooks/useScrollReveal';

const Projects = () => {
    const sectionRef = useScrollReveal();

    const projects = [
        {
            title: 'Ping Me',
            subtitle: 'Cross-Platform Real-Time Chat Application',
            description: 'Built a cross-platform chat application for web and mobile using React, React Native, a shared Node.js backend, MongoDB, and Zustand for seamless state updates.',
            tech: ['MongoDB', 'Express.js', 'React.js', 'React Native', 'Node.js', 'Socket.io', 'Zustand', 'Expo'],
            gradient: 'from-primary via-purple-500 to-secondary',
            features: ['Real-time messaging via Socket.io', 'Presence and typing indicators', 'Shared backend for web + mobile', 'RESTful APIs with MongoDB'],
            github: 'https://github.com/ArnabMallick12/PingMe',
            extraLink: 'https://github.com/ArnabMallick12/PingMe-Mobile',
            extraLabel: 'Mobile Code',
            demo: 'https://ping-me-navy.vercel.app/',
        },
        {
            title: 'BidBazaar',
            subtitle: 'Online Auction Platform (Full Stack)',
            description: 'Developed a full-stack auction platform enabling users to list products, place bids, and manage auctions through a responsive frontend integrated with backend REST APIs.',
            tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
            gradient: 'from-accent via-pink-500 to-primary',
            features: ['Dynamic item listing', 'Efficient bid handling', 'Responsive React frontend', 'User authentication'],
            github: 'https://github.com/ArnabMallick12/BidBazaar-FullStack',
            demo: 'https://bid-bazaar-full-stack.vercel.app/',
        },
        {
            title: 'Eco Decor',
            subtitle: 'Sustainable E-Commerce Platform (Full Stack)',
            description: 'Built an e-commerce platform focused on environmentally sustainable products with an interactive UI, efficient cart system, emission tracking, and order management.',
            tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
            gradient: 'from-secondary via-teal-500 to-emerald-500',
            features: ['Interactive product catalog', 'Emission factor tracking', 'Order management system', 'Image upload functionality'],
            github: 'https://github.com/ArnabMallick12/Eco-Commerce',
            demo: 'https://eco-decor.netlify.app/',
        },
    ];

    return (
        <section id="projects" className="py-24 relative" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-5">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text reveal">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className="glass p-0 overflow-hidden group reveal-scale"
                            style={{ transitionDelay: `${index * 0.15}s` }}
                        >
                            <div className={`relative p-8 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                                <span className="relative z-10 inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider mb-4 text-white">
                                    Full Stack
                                </span>
                                <h3 className="relative z-10 text-2xl font-bold text-white mb-1">{project.title}</h3>
                                <p className="relative z-10 text-white/80 text-sm">{project.subtitle}</p>
                            </div>

                            <div className="p-6">
                                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                                    {project.description}
                                </p>

                                <div className="flex flex-col gap-2 mb-5">
                                    {project.features.map((feature) => (
                                        <span key={feature} className="text-text-muted text-xs flex items-center gap-2">
                                            <span className="text-primary">✦</span> {feature}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-primary/15 rounded-full text-xs text-primary-light font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-bg-glass border border-white/10 text-text-secondary text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:text-text-primary">
                                        <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                                        Code
                                    </a>
                                    {project.extraLink && (
                                        <a href={project.extraLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-bg-glass border border-white/10 text-text-secondary text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:text-text-primary">
                                            <span className="text-base">📱</span> {project.extraLabel}
                                        </a>
                                    )}
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-primary border border-primary text-white text-sm font-medium transition-all duration-300 hover:bg-primary-light hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30">
                                        <span className="text-lg">🚀</span> Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
