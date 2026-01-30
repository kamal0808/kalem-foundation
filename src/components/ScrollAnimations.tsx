
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      // Fade up elements
      gsap.utils.toArray('.fade-up').forEach((el: any) => {
        gsap.from(el, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      // Parallax images
      gsap.utils.toArray('.parallax-img').forEach((el: any) => {
        gsap.to(el, {
          yPercent: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });

      // Scale reveal
      gsap.utils.toArray('.scale-reveal').forEach((el: any) => {
        gsap.from(el, {
          scale: 0.8,
          opacity: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      // Stagger children
      gsap.utils.toArray('.stagger-container').forEach((container: any) => {
        const items = container.querySelectorAll('.stagger-item');
        gsap.from(items, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      // Horizontal line reveal
      gsap.utils.toArray('.line-reveal').forEach((el: any) => {
        gsap.from(el, {
          scaleX: 0,
          transformOrigin: 'left',
          duration: 1.2,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      // Text split animation
      gsap.utils.toArray('.text-reveal').forEach((el: any) => {
        gsap.from(el, {
          y: '100%',
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      // Counter animation
      gsap.utils.toArray('.counter').forEach((el: any) => {
        const target = parseInt(el.getAttribute('data-target') || '0');
        gsap.to(el, {
          textContent: target,
          duration: 2,
          ease: 'power1.inOut',
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      });

    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
}

export function ScrollAnimations({ children }: { children: React.ReactNode }) {
  const containerRef = useScrollAnimation();
  return <div ref={containerRef}>{children}</div>;
}
