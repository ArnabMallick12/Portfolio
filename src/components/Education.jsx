import useScrollReveal from '../hooks/useScrollReveal';

const Education = () => {
    const sectionRef = useScrollReveal();

    const education = [
        {
            institution: 'Indian Institute of Information Technology Vadodara',
            degree: 'Bachelor of Technology in Computer Science & Engineering',
            period: 'August 2023 - June 2027',
            location: 'Gandhinagar, Gujarat, India',
            grade: 'GPA: 8.14',
            icon: '🎓',
            gradient: 'from-primary to-purple-500',
        },
        {
            institution: 'Kendriya Vidyalaya No.1 Surat',
            degree: 'Secondary Education',
            period: 'April 2023',
            location: 'Surat, Gujarat, India',
            grade: 'Grade: 88.4%',
            icon: '📚',
            gradient: 'from-secondary to-cyan-400',
        },
    ];

    const courses = [
        'Design and Analysis of Algorithms',
        'Object-Oriented Programming',
        'Data Structures',
        'Database Management Systems',
        'Operating Systems',
        'Computer Networks',
        'Software Engineering',
    ];

    const activities = [
        { name: 'Cultural Committee', role: 'Member', icon: '🎭', desc: 'Contributing to planning and organizing cultural events' },
        { name: 'Obscura - The Photography Club', role: 'Member', icon: '📷', desc: '' },
        { name: 'Encore - The Music Club', role: 'Member', icon: '🎵', desc: '' },
    ];

    return (
        <section id="education" className="py-24 relative" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-5">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text reveal">
                    Education
                </h2>

                {/* Timeline */}
                <div className="relative max-w-3xl mx-auto mb-16">
                    {/* Timeline line */}
                    <div className="absolute left-[30px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

                    {education.map((edu, index) => (
                        <div
                            key={edu.institution}
                            className="flex flex-col md:flex-row gap-6 mb-10 reveal-left"
                            style={{ transitionDelay: `${index * 0.2}s` }}
                        >
                            {/* Timeline marker */}
                            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${edu.gradient} flex items-center justify-center text-2xl shrink-0 relative z-10 shadow-lg shadow-primary/20`}>
                                {edu.icon}
                            </div>

                            {/* Card */}
                            <div className="glass flex-1 p-7">
                                <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-3">
                                    <h3 className="text-lg font-bold text-primary-light">{edu.institution}</h3>
                                    <span className="px-4 py-1.5 bg-primary/15 rounded-full text-xs text-primary-light whitespace-nowrap font-medium">
                                        {edu.period}
                                    </span>
                                </div>
                                <p className="text-text-primary font-medium mb-4">{edu.degree}</p>
                                <div className="flex flex-wrap gap-4">
                                    <span className="text-text-muted text-sm flex items-center gap-1.5">
                                        📍 {edu.location}
                                    </span>
                                    <span className="text-secondary font-semibold text-sm flex items-center gap-1.5">
                                        ⭐ {edu.grade}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Courses & Activities */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="glass p-7 reveal" style={{ transitionDelay: '0.3s' }}>
                        <h3 className="text-lg font-bold text-text-primary mb-5 flex items-center gap-2">
                            📖 Relevant Courses
                        </h3>
                        <div className="flex flex-wrap gap-2.5">
                            {courses.map((course, i) => (
                                <span
                                    key={course}
                                    className="px-4 py-2 bg-secondary/15 border border-secondary/25 rounded-lg text-sm text-secondary transition-all duration-300 hover:bg-secondary/25 hover:-translate-y-0.5 cursor-default"
                                    style={{ transitionDelay: `${i * 0.05}s` }}
                                >
                                    {course}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="glass p-7 reveal" style={{ transitionDelay: '0.4s' }}>
                        <h3 className="text-lg font-bold text-text-primary mb-5 flex items-center gap-2">
                            🌟 Extracurricular Activities
                        </h3>
                        <div className="flex flex-col gap-4">
                            {activities.map((activity) => (
                                <div key={activity.name} className="flex items-start gap-4 group">
                                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{activity.icon}</span>
                                    <div>
                                        <span className="block font-medium text-text-primary">{activity.name}</span>
                                        <span className="text-xs text-primary-light font-medium uppercase tracking-wide">{activity.role}</span>
                                        {activity.desc && (
                                            <p className="text-text-muted text-xs mt-1">{activity.desc}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
