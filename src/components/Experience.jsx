import useScrollReveal from '../hooks/useScrollReveal';

const Experience = () => {
    const sectionRef = useScrollReveal();

    const experiences = [
        {
            company: 'Xelron',
            role: 'Contractual Software Development Engineer (SDE)',
            period: 'July 2026 – Present',
            location: 'Remote',
            icon: '💼',
            gradient: 'from-accent to-pink-500',
            highlights: [
                'Designed, implemented, and validated 30+ software engineering benchmark tasks for Project Terminus, enabling deterministic evaluation of AI coding agents.',
                'Authored benchmark specifications, developed automated test suites, and debugged execution environments to ensure reliable and reproducible evaluation of AI-generated code.',
                'Built reproducible Docker environments and automated validation pipelines using Python and Pytest, leveraging Git, Linux/Bash, JavaScript, and JSON to streamline benchmark development.',
            ],
            tech: ['Docker', 'Python', 'Pytest', 'Git', 'Linux/Bash', 'JavaScript', 'JSON'],
        },
    ];

    return (
        <section id="experience" className="py-24 relative" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-5">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text reveal">
                    Experience
                </h2>

                <div className="relative max-w-3xl mx-auto">
                    <div className="absolute left-[30px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-secondary hidden md:block" />

                    {experiences.map((exp, index) => (
                        <div
                            key={exp.company}
                            className="flex flex-col md:flex-row gap-6 mb-10 reveal-left"
                            style={{ transitionDelay: `${index * 0.2}s` }}
                        >
                            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${exp.gradient} flex items-center justify-center text-2xl shrink-0 relative z-10 shadow-lg shadow-accent/20`}>
                                {exp.icon}
                            </div>

                            <div className="glass flex-1 p-7">
                                <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-1">
                                    <h3 className="text-lg font-bold text-primary-light">{exp.company}</h3>
                                    <span className="text-text-muted text-sm whitespace-nowrap">
                                        📍 {exp.location}
                                    </span>
                                </div>

                                <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-4">
                                    <p className="text-text-primary font-medium italic">{exp.role}</p>
                                    <span className="px-4 py-1.5 bg-accent/15 rounded-full text-xs text-accent whitespace-nowrap font-medium">
                                        {exp.period}
                                    </span>
                                </div>

                                <ul className="flex flex-col gap-3 mb-5">
                                    {exp.highlights.map((highlight) => (
                                        <li key={highlight} className="text-text-secondary text-sm leading-relaxed flex items-start gap-2">
                                            <span className="text-accent mt-1 shrink-0">✦</span>
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 bg-primary/15 border border-primary/25 rounded-lg text-xs text-primary-light transition-all duration-300 hover:bg-primary/25 hover:-translate-y-0.5 cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
