import { useEffect, useRef } from 'react';

export const useScrollReveal = (threshold = 0.15) => {
    const ref = useRef(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold, rootMargin: '0px 0px -50px 0px' }
        );

        // Observe all reveal elements within the section
        const revealElements = node.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
        revealElements.forEach(el => observer.observe(el));

        // Also observe the node itself if it has a reveal class
        if (node.classList.contains('reveal') || node.classList.contains('reveal-left') || 
            node.classList.contains('reveal-right') || node.classList.contains('reveal-scale')) {
            observer.observe(node);
        }

        return () => observer.disconnect();
    }, [threshold]);

    return ref;
};

export default useScrollReveal;
