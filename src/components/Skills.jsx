import useScrollReveal from '../hooks/useScrollReveal';

const Skills = () => {
    const sectionRef = useScrollReveal();

    const skillCategories = [
        {
            title: 'Programming Languages',
            icon: '⌨️',
            gradient: 'from-primary to-purple-500',
            borderGlow: 'hover:shadow-purple-500/20',
            skills: ['C', 'C++', 'JavaScript', 'Python'],
        },
        {
            title: 'Web Technologies',
            icon: '🌐',
            gradient: 'from-secondary to-cyan-400',
            borderGlow: 'hover:shadow-cyan-400/20',
            skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js'],
        },
        {
            title: 'Database Systems',
            icon: '🗄️',
            gradient: 'from-emerald-500 to-teal-400',
            borderGlow: 'hover:shadow-teal-400/20',
            skills: ['MongoDB', 'MySQL'],
        },
        {
            title: 'Tools',
            icon: '🔧',
            gradient: 'from-accent to-orange-400',
            borderGlow: 'hover:shadow-orange-400/20',
            skills: ['Git', 'GitHub', 'Vite', 'Postman'],
        },
    ];

    const techStack = [
        { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB', color: 'from-cyan-400 to-blue-500' },
        { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933', color: 'from-green-400 to-emerald-600' },
        { name: 'Express', icon: 'https://cdn.simpleicons.org/express/ffffff', color: 'from-gray-400 to-gray-600' },
        { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248', color: 'from-green-500 to-green-700' },
        { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E', color: 'from-yellow-400 to-amber-500' },
        { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB', color: 'from-blue-400 to-yellow-500' },
        { name: 'C/C++', icon: 'https://cdn.simpleicons.org/cplusplus/00599C', color: 'from-blue-400 to-indigo-600' },
        { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032', color: 'from-orange-400 to-red-500' },
        { name: 'Vite', icon: 'https://cdn.simpleicons.org/vite/646CFF', color: 'from-purple-400 to-yellow-400' },
        { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman/FF6C37', color: 'from-orange-500 to-orange-600' },
        { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1', color: 'from-blue-500 to-sky-400' },
        { name: 'Socket.io', icon: 'https://cdn.simpleicons.org/socketdotio/ffffff', color: 'from-gray-400 to-gray-500' },
    ];

    const specializations = [
        { 
            name: 'Full-Stack Development', 
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>, 
            desc: 'End-to-end web application development' 
        },
        { 
            name: 'Database Design', 
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>, 
            desc: 'Efficient schema & query optimization' 
        },
        { 
            name: 'API Development', 
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>, 
            desc: 'RESTful APIs & backend architecture' 
        },
    ];

    return (
        <section id="skills" className="py-24 relative" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-5">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text reveal">
                    Skills & Technologies
                </h2>

                {/* Skill Categories - Tag based */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                    {skillCategories.map((category, catIndex) => (
                        <div
                            key={category.title}
                            className={`glass p-7 group reveal-scale ${category.borderGlow}`}
                            style={{ transitionDelay: `${catIndex * 0.12}s` }}
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300`}>
                                    {category.icon}
                                </div>
                                <h3 className="text-lg font-bold text-text-primary">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2.5">
                                {category.skills.map((skill, i) => (
                                    <span
                                        key={skill}
                                        className={`tech-pill px-4 py-2 rounded-xl text-sm font-medium border border-white/10 bg-white/5 text-text-secondary transition-all duration-300 cursor-default hover:bg-gradient-to-r hover:${category.gradient} hover:text-white hover:border-transparent hover:-translate-y-0.5 hover:shadow-lg`}
                                        style={{ transitionDelay: `${i * 0.03}s` }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Specializations */}
                <div className="mb-20 reveal" style={{ transitionDelay: '0.3s' }}>
                    <h3 className="text-2xl font-bold text-center mb-10 text-text-primary">
                        Specialized In
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {specializations.map((spec, i) => (
                            <div
                                key={spec.name}
                                className="spec-card glass p-8 text-center group cursor-default"
                                style={{ transitionDelay: `${i * 0.1}s` }}
                            >
                                <span className="flex justify-center text-primary-light mb-5 group-hover:scale-125 group-hover:text-primary transition-all duration-500">
                                    {spec.icon}
                                </span>
                                <h4 className="text-base font-bold text-text-primary mb-2">{spec.name}</h4>
                                <p className="text-text-muted text-sm leading-relaxed">{spec.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tech Stack - Hexagonal grid style */}
                <div className="reveal" style={{ transitionDelay: '0.4s' }}>
                    <h3 className="text-2xl font-bold text-center mb-10 text-text-primary">
                        Tech Stack
                    </h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
                        {techStack.map((tech, i) => (
                            <div
                                key={tech.name}
                                className="tech-pill group relative flex flex-col items-center justify-center p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] transition-all duration-400 cursor-default hover:-translate-y-2 hover:bg-white/[0.08] hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
                                style={{ transitionDelay: `${i * 0.04}s` }}
                            >
                                {/* Glow background on hover */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                                
                                <img src={tech.icon} alt={tech.name} className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform duration-300 relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]" />
                                <span className="text-xs font-medium text-text-muted group-hover:text-text-primary transition-colors duration-300 relative z-10 text-center">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
