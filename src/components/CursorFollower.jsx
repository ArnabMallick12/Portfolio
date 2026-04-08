import { useEffect, useRef } from 'react';

const CursorFollower = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const pos = useRef({ x: 0, y: 0 });
    const target = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            target.current = { x: e.clientX, y: e.clientY };
        };

        const animate = () => {
            pos.current.x += (target.current.x - pos.current.x) * 0.15;
            pos.current.y += (target.current.y - pos.current.y) * 0.15;

            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${target.current.x - 4}px, ${target.current.y - 4}px)`;
            }
            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${pos.current.x - 20}px, ${pos.current.y - 20}px)`;
            }

            requestAnimationFrame(animate);
        };

        const handleMouseEnterInteractive = () => {
            if (ringRef.current) {
                ringRef.current.style.width = '60px';
                ringRef.current.style.height = '60px';
                ringRef.current.style.marginLeft = '-10px';
                ringRef.current.style.marginTop = '-10px';
                ringRef.current.style.borderColor = 'rgba(139, 92, 246, 0.6)';
                ringRef.current.style.background = 'rgba(139, 92, 246, 0.08)';
            }
            if (dotRef.current) {
                dotRef.current.style.opacity = '0';
            }
        };

        const handleMouseLeaveInteractive = () => {
            if (ringRef.current) {
                ringRef.current.style.width = '40px';
                ringRef.current.style.height = '40px';
                ringRef.current.style.marginLeft = '0';
                ringRef.current.style.marginTop = '0';
                ringRef.current.style.borderColor = 'rgba(139, 92, 246, 0.4)';
                ringRef.current.style.background = 'transparent';
            }
            if (dotRef.current) {
                dotRef.current.style.opacity = '1';
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        animate();

        // Add hover effect to interactive elements
        const interactives = document.querySelectorAll('a, button, .glass, .tech-pill, .spec-card');
        interactives.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnterInteractive);
            el.addEventListener('mouseleave', handleMouseLeaveInteractive);
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            interactives.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnterInteractive);
                el.removeEventListener('mouseleave', handleMouseLeaveInteractive);
            });
        };
    }, []);

    return (
        <>
            {/* Inner dot */}
            <div
                ref={dotRef}
                className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] transition-opacity duration-200 mix-blend-difference hidden lg:block"
            />
            {/* Outer ring */}
            <div
                ref={ringRef}
                className="fixed top-0 left-0 w-10 h-10 border-2 border-primary/40 rounded-full pointer-events-none z-[9998] transition-[width,height,border-color,background,margin] duration-300 ease-out hidden lg:block"
            />
        </>
    );
};

export default CursorFollower;
