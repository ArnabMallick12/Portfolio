import { useState, useEffect } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Hero = () => {
    const profileImage = 'https://drive.google.com/file/d/1TNqOnaw2QOOFwfJi4GBTEGGbaMQnQH3E/view?usp=drive_link';
    const resumeLink = 'https://drive.google.com/file/d/1Y9g4xkJ8xuqRX1P6r5aSkVAc9_WWXfZP/view?usp=sharing';

    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const titles = ['Full-Stack Developer', 'React Native Developer', 'MERN Stack Builder', 'Real-Time App Developer'];

    let formattedImage = profileImage;
    if (profileImage.includes('drive.google.com/file/d/')) {
        const idMatch = profileImage.match(/\/d\/([a-zA-Z0-9_-]+)/);
        if (idMatch && idMatch[1]) {
            formattedImage = `https://lh3.googleusercontent.com/d/${idMatch[1]}`;
        }
    }

    useEffect(() => {
        const currentTitle = titles[currentIndex];
        let charIndex = 0;
        let isDeleting = false;

        const typeEffect = setInterval(() => {
            if (!isDeleting) {
                setDisplayText(currentTitle.substring(0, charIndex + 1));
                charIndex++;
                if (charIndex === currentTitle.length) {
                    isDeleting = true;
                    setTimeout(() => {}, 2000);
                }
            } else {
                setDisplayText(currentTitle.substring(0, charIndex - 1));
                charIndex--;
                if (charIndex === 0) {
                    isDeleting = false;
                    setCurrentIndex((prev) => (prev + 1) % titles.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearInterval(typeEffect);
    }, [currentIndex]);

    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            ),
            url: 'https://www.linkedin.com/in/arnab-mallick-86769a237/',
            color: 'hover:bg-[#0077b5] hover:shadow-[0_0_30px_rgba(0,119,181,0.4)]',
        },
        {
            name: 'GitHub',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
            ),
            url: 'https://github.com/ArnabMallick12',
            color: 'hover:bg-[#333] hover:shadow-[0_0_30px_rgba(51,51,51,0.4)]',
        },
        {
            name: 'LeetCode',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" /></svg>
            ),
            url: 'https://leetcode.com/u/mallick126/',
            color: 'hover:bg-[#ffa116] hover:shadow-[0_0_30px_rgba(255,161,22,0.4)]',
        },
    ];

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-24 pb-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="lg:order-1 order-2 text-center lg:text-left">
                    <p className="text-primary font-semibold text-lg mb-3 animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
                        Hello, I'm
                    </p>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <span className="bg-gradient-to-r from-white to-text-secondary bg-clip-text text-transparent">
                            Arnab Mallick
                        </span>
                    </h1>
                    <div className="flex items-center gap-1 mb-6 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.3s' }}>
                        <span className="text-xl md:text-2xl font-semibold gradient-text">{displayText}</span>
                        <span className="text-primary text-2xl animate-blink">|</span>
                    </div>
                    <p className="text-text-secondary text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
                        Full-Stack Developer skilled in the MERN stack and React Native,
                        building scalable and real-time web and mobile applications with
                        strong API development and database design fundamentals.
                    </p>

                    <div className="flex gap-4 mb-10 justify-center lg:justify-start flex-wrap animate-slide-up" style={{ animationDelay: '0.5s' }}>
                        <a href="#projects" className="btn-glow inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base">
                            View Work
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                        </a>
                        <a
                            href={resumeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base bg-secondary/80 border border-secondary hover:bg-secondary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-secondary/30"
                        >
                            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                            Resume
                        </a>
                        <a href="#contact" className="btn-outline-glow inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base">
                            Contact
                        </a>
                    </div>

                    <div className="flex gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.6s' }}>
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-12 h-12 rounded-full bg-bg-glass border border-white/10 flex items-center justify-center text-text-secondary transition-all duration-300 hover:text-white hover:-translate-y-1.5 ${link.color}`}
                                title={link.name}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="lg:order-2 order-1 flex justify-center items-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
                    <div className="relative w-64 h-64 md:w-[350px] md:h-[350px]">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary animate-spin-slow opacity-50" />
                        <div className="absolute inset-[3px] rounded-full bg-bg-dark" />

                        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center animate-glow-pulse overflow-hidden p-[3px]">
                            <div className="w-full h-full rounded-full bg-bg-dark flex items-center justify-center overflow-hidden relative">
                                {profileImage !== 'YOUR_IMAGE_LINK_HERE' && profileImage !== '' ? (
                                    <img
                                        src={formattedImage}
                                        alt="Arnab Mallick"
                                        className="w-full h-full object-cover scale-105"
                                        onError={(e) => {
                                            if (!e.target.dataset.failed) {
                                                e.target.dataset.failed = true;
                                                e.target.style.display = 'none';
                                            }
                                        }}
                                    />
                                ) : (
                                    <span className="font-heading text-6xl md:text-7xl font-extrabold text-white">
                                        AM
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full border border-white/[0.04]" />

                            {[
                                { icon: 'https://cdn.simpleicons.org/react/61DAFB', label: 'React', pos: '-top-4 left-4 md:-top-8 md:left-12', delay: '0s' },
                                { icon: 'https://cdn.simpleicons.org/expo/ffffff', label: 'Expo', pos: 'top-[30%] -right-4 md:-right-12', delay: '1s' },
                                { icon: 'https://cdn.simpleicons.org/mongodb/47A248', label: 'Mongo', pos: '-bottom-4 left-8 md:-bottom-8 md:left-16', delay: '2.5s' },
                                { icon: 'https://cdn.simpleicons.org/javascript/F7DF1E', label: 'JS', pos: '-top-2 right-8 md:-top-4 md:right-16', delay: '1.5s' },
                                { icon: 'https://cdn.simpleicons.org/python/3776AB', label: 'Python', pos: '-bottom-2 right-4 md:-bottom-6 md:right-12', delay: '0.8s' },
                                { icon: 'https://cdn.simpleicons.org/socketdotio/ffffff', label: 'Socket.io', pos: 'top-[45%] -left-4 md:-left-16', delay: '2s' },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className={`absolute ${item.pos} animate-float`}
                                    style={{ animationDelay: item.delay }}
                                >
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-bg-dark/80 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.15)] hover:bg-white/5 transition-all duration-300 pointer-events-auto cursor-default group">
                                        <img src={item.icon} alt={item.label} className="w-6 h-6 md:w-7 md:h-7 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-300" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 text-text-muted text-xs animate-fade-in" style={{ animationDelay: '1s' }}>
                <div className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2.5 bg-primary rounded-full animate-scroll-hint" />
                </div>
                <span>Scroll Down</span>
            </div>
        </section>
    );
};

export default Hero;
