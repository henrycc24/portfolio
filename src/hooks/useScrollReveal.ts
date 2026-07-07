import { useEffect } from 'react';
import { useRouter } from 'next/router';

function initScrollReveal() {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.sb-component-section, .sb-scroll-reveal'));
    if (nodes.length === 0) return () => undefined;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('sb-scroll-reveal-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    );

    nodes.forEach((node, index) => {
        node.classList.remove('sb-scroll-reveal-visible');
        if (!node.classList.contains('sb-scroll-reveal')) {
            node.classList.add('sb-scroll-reveal');
        }
        node.style.setProperty('--sb-reveal-delay', `${Math.min(index * 60, 360)}ms`);
        observer.observe(node);
    });

    return () => observer.disconnect();
}

export function useScrollReveal() {
    const router = useRouter();

    useEffect(() => {
        let cleanup = initScrollReveal();
        const onRoute = () => {
            cleanup?.();
            requestAnimationFrame(() => {
                cleanup = initScrollReveal();
            });
        };
        router.events.on('routeChangeComplete', onRoute);
        return () => {
            cleanup?.();
            router.events.off('routeChangeComplete', onRoute);
        };
    }, [router.events]);
}
