import useScrollReveal from '../hooks/useScrollReveal';

const About = () => {
    const sectionRef = useScrollReveal();

    const highlights = [
        { icon: '🎓', label: 'GPA', value: '8.14', color: 'from-primary to-purple-400' },
        { icon: '💻', label: 'Projects', value: '3+', color: 'from-secondary to-cyan-400' },
        { icon: '🚀', label: 'Focus', value: 'Full-Stack', color: 'from-accent to-pink-400' },
        { icon: '📍', label: 'Location', value: 'Gujarat, India', color: 'from-emerald-500 to-teal-400' },
    ];

    return (
        <section id="about" className="py-24 relative" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-5">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text reveal">
                    About Me
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 items-start">
                    {/* Text card */}
                    <div className="glass p-8 md:p-10 reveal-left" style={{ transitionDelay: '0.1s' }}>
                        <h3 className="text-2xl font-bold text-primary-light mb-5">Who I Am</h3>
                        <p className="text-text-secondary mb-5 leading-relaxed text-base">
                            I'm <strong className="text-text-primary">Arnab Mallick</strong>, a passionate Full-Stack Developer and B.Tech
                            Computer Science student at <strong className="text-text-primary">IIIT Vadodara</strong>. I specialize in building
                            robust web applications using the MERN stack and have a keen interest in
                            creating seamless user experiences.
                        </p>
                        <p className="text-text-secondary mb-6 leading-relaxed text-base">
                            With a strong foundation in Data Structures, Algorithms, and Database Design,
                            I love tackling complex problems and turning ideas into reality. When I'm not coding,
                            you'll find me exploring photography, playing music, or contributing to cultural events.
                        </p>

                        <div className="flex flex-wrap gap-3 mt-6">
                            {['Web Development', 'Problem Solving', 'Photography', 'Music'].map((tag, i) => (
                                <span
                                    key={tag}
                                    className="px-5 py-2 bg-primary/15 border border-primary/30 rounded-full text-sm text-primary-light transition-all duration-300 hover:bg-primary/25 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/10 cursor-default"
                                    style={{ transitionDelay: `${i * 0.05}s` }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Highlight cards */}
                    <div className="grid grid-cols-2 gap-4">
                        {highlights.map((item, index) => (
                            <div
                                key={item.label}
                                className="glass p-6 text-center group cursor-default reveal-scale"
                                style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                            >
                                <span className="text-4xl block mb-3 group-hover:scale-125 transition-transform duration-500">
                                    {item.icon}
                                </span>
                                <span className={`block text-2xl font-bold font-heading bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                                    {item.value}
                                </span>
                                <span className="text-text-muted text-xs uppercase tracking-widest mt-1">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
