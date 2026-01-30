
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

interface PhotoRevealProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}

export default function PhotoReveal({ src, alt, priority = false, className = '' }: PhotoRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const overlay = container.querySelector('.photo-overlay');
    const img = container.querySelector('.photo-image');

    gsap.set(overlay, { scaleX: 1, transformOrigin: 'left' });
    gsap.set(img, { scale: 1.3 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    });

    tl.to(overlay, {
      scaleX: 0,
      transformOrigin: 'right',
      duration: 1.2,
      ease: 'power4.inOut',
    })
    .to(img, {
      scale: 1,
      duration: 1.5,
      ease: 'power3.out',
    }, '-=0.8');

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div className="photo-overlay absolute inset-0 bg-stone-900 z-10" />
      <Image
        src={src}
        alt={alt}
        fill
        className="photo-image object-cover"
        priority={priority}
      />
    </div>
  );
}
