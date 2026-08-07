const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="relative z-10 bg-bg-dark/90 border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-5">
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-8">
                    <div className="text-center md:text-left">
                        <span className="font-heading text-3xl font-extrabold gradient-text">AM</span>
                        <p className="text-text-muted mt-1.5 text-sm">Full-Stack Developer</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                        {[
                            { name: 'Home', href: '#home' },
                            { name: 'About', href: '#about' },
                            { name: 'Skills', href: '#skills' },
                            { name: 'Projects', href: '#projects' },
                            { name: 'Education', href: '#education' },
                            { name: 'Contact', href: '#contact' },
                        ].map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="text-text-secondary text-sm font-medium transition-all duration-300 hover:text-primary relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                <div className="text-center">
                    <p className="text-text-muted text-sm">
                        © {currentYear} Arnab Mallick. All rights reserved.
                    </p>
                    <p className="text-text-muted/60 text-xs mt-2">
                        Made with <span className="text-accent">❤️</span> using React & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
