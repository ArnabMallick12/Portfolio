import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section detection
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-bg-dark/90 backdrop-blur-xl py-3 border-b border-white/5 shadow-lg shadow-black/20' 
        : 'py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
        <a 
          href="#home" 
          className="group flex items-center gap-2.5" 
          onClick={(e) => scrollToSection(e, '#home')}
        >
          <span className="font-heading text-3xl font-extrabold gradient-text group-hover:scale-110 transition-transform duration-300">
            AM
          </span>
        </a>

        <ul className={`
          flex list-none gap-8
          max-md:fixed max-md:top-[60px] max-md:left-0 max-md:right-0
          max-md:bg-bg-dark/98 max-md:backdrop-blur-xl max-md:flex-col 
          max-md:items-center max-md:py-10 max-md:px-5 max-md:gap-6
          max-md:transition-all max-md:duration-500 max-md:border-b max-md:border-white/5
          ${isMobileMenuOpen ? 'max-md:translate-y-0 max-md:opacity-100' : 'max-md:translate-y-[-150%] max-md:opacity-0'}
        `}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative font-medium text-sm tracking-wide transition-all duration-300
                  hover:text-text-primary
                  after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 
                  after:bg-gradient-to-r after:from-primary after:to-secondary
                  after:transition-all after:duration-300
                  ${activeSection === link.href.slice(1) 
                    ? 'text-text-primary after:w-full' 
                    : 'text-text-secondary after:w-0 hover:after:w-full'
                  }
                `}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button 
          className={`hidden max-md:flex flex-col gap-1.5 bg-none border-none cursor-pointer p-1.5 z-50 ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 origin-center ${isMobileMenuOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
          <span className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 origin-center ${isMobileMenuOpen ? '-rotate-45 -translate-y-[4px]' : ''}`} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
