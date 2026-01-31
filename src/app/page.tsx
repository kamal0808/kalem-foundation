'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    setTimeout(() => setIsLoaded(true), 100);

    const ctx = gsap.context(() => {
      // ========================================
      // HERO INTRO SEQUENCE
      // ========================================
      
      // Dramatic title reveal
      const heroTitle = document.querySelector('.hero-title');
      if (heroTitle) {
        const split = new SplitType(heroTitle as HTMLElement, { 
          types: 'chars,words',
          tagName: 'span'
        });
        
        gsap.from(split.chars, {
          opacity: 0,
          y: 120,
          rotateX: -90,
          stagger: 0.015,
          duration: 1.2,
          ease: 'power4.out',
          delay: 0.3,
        });
      }

      // Subtitle slide
      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out',
        delay: 1,
      });

      // Location tag
      gsap.from('.hero-location', {
        opacity: 0,
        x: -30,
        duration: 0.8,
        ease: 'power3.out',
        delay: 1.3,
      });

      // Scroll cue
      gsap.from('.scroll-cue', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 1.5,
      });

      // Hero parallax
      gsap.to('.hero-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // ========================================
      // MANIFESTO SECTION - TEXT REVEAL
      // ========================================
      
      const manifestoWords = document.querySelectorAll('.manifesto-word');
      manifestoWords.forEach((word, i) => {
        gsap.from(word, {
          opacity: 0.1,
          duration: 0.5,
          scrollTrigger: {
            trigger: word,
            start: 'top 80%',
            end: 'top 30%',
            scrub: true,
          },
        });
      });

      // ========================================
      // HORIZONTAL IMAGE STRIP
      // ========================================
      
      const stripSection = document.querySelector('.strip-section');
      const stripTrack = document.querySelector('.strip-track');
      
      if (stripSection && stripTrack) {
        const stripWidth = (stripTrack as HTMLElement).scrollWidth;
        const windowWidth = window.innerWidth;
        
        gsap.to(stripTrack, {
          x: () => -(stripWidth - windowWidth + 50),
          ease: 'none',
          scrollTrigger: {
            trigger: stripSection,
            start: 'top top',
            end: () => `+=${stripWidth * 0.8}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });
      }

      // ========================================
      // FOUNDER SECTION - CINEMATIC REVEAL
      // ========================================
      
      gsap.from('.founder-image', {
        scale: 1.3,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.founder-section',
          start: 'top 80%',
        },
      });

      // Founder text blocks
      document.querySelectorAll('.founder-text-block').forEach((block, i) => {
        gsap.from(block, {
          opacity: 0,
          y: 80,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: block,
            start: 'top 85%',
          },
        });
      });

      // ========================================
      // PROGRAMS - STAGGERED CARDS
      // ========================================
      
      document.querySelectorAll('.program-card').forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 100,
          scale: 0.98,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        });
      });

      // ========================================
      // IMPACT SECTION - COUNTER ANIMATION
      // ========================================
      
      document.querySelectorAll('.stat-number').forEach((stat: any) => {
        const target = parseInt(stat.dataset.target || '0');
        const obj = { value: 0 };
        
        gsap.to(obj, {
          value: target,
          duration: 2.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: stat,
            start: 'top 80%',
          },
          onUpdate: () => {
            stat.textContent = Math.floor(obj.value);
          },
        });
      });

      // ========================================
      // GALLERY GRID - REVEAL
      // ========================================
      
      document.querySelectorAll('.gallery-img').forEach((img, i) => {
        gsap.from(img, {
          opacity: 0,
          scale: 1.2,
          duration: 1,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: img,
            start: 'top 85%',
          },
        });
      });

      // ========================================
      // TEXT REVEALS
      // ========================================
      
      document.querySelectorAll('.reveal-up').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        });
      });

      // Large text parallax
      document.querySelectorAll('.parallax-text').forEach((el) => {
        gsap.to(el, {
          yPercent: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });

    }, containerRef);

    // Custom cursor
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      ctx.revert();
      lenis.destroy();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`bg-[#0A0A0A] transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Custom Cursor */}
      <div 
        className={`custom-cursor ${cursorVariant}`}
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />

      {/* ============================================
          NAVIGATION - MINIMAL
          ============================================ */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="flex items-center justify-between h-20 px-6 md:px-12">
          <a href="#" className="text-white font-serif text-2xl tracking-tight">
            Kalem
          </a>
          <div className="hidden md:flex items-center gap-12">
            <a href="#manifesto" className="text-white/60 text-xs uppercase tracking-[0.2em] hover:text-white transition-colors">Story</a>
            <a href="#programs" className="text-white/60 text-xs uppercase tracking-[0.2em] hover:text-white transition-colors">Programs</a>
            <a href="#impact" className="text-white/60 text-xs uppercase tracking-[0.2em] hover:text-white transition-colors">Impact</a>
            <a href="#connect" className="text-white text-xs uppercase tracking-[0.2em] border border-white/30 px-6 py-3 hover:bg-white hover:text-black transition-all">Connect</a>
          </div>
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* ============================================
          HERO - FULL BLEED CINEMATIC
          ============================================ */}
      <section ref={heroRef} className="relative h-[100vh] min-h-[800px] overflow-hidden">
        {/* Background */}
        <div className="hero-bg absolute inset-0">
          <Image
            src="/images/kalem-08.jpg"
            alt="Children in rural Odisha classroom"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end pb-20 md:pb-32 px-6 md:px-12">
          {/* Location Tag */}
          <div className="hero-location mb-8">
            <span className="text-[#E08A69] text-xs uppercase tracking-[0.3em]">Odisha, India</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title text-white font-serif text-[clamp(2.5rem,8vw,9rem)] leading-[0.95] tracking-[-0.03em] max-w-[95%] md:max-w-[80%]">
            We don&apos;t teach.<br />
            We ignite.
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-white/50 text-lg md:text-2xl font-light max-w-2xl mt-8 leading-relaxed">
            Kalem Foundation reimagines education for rural India—where every child 
            learns to question, create, and transform their world.
          </p>

          {/* Scroll Cue */}
          <div className="scroll-cue absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <div className="w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ============================================
          MANIFESTO - WORD-BY-WORD REVEAL
          ============================================ */}
      <section id="manifesto" className="py-32 md:py-48 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <p className="text-[#E08A69] text-xs uppercase tracking-[0.3em] mb-12">Our Belief</p>
          <p className="font-serif text-[clamp(1.5rem,4vw,3.5rem)] text-white/90 leading-[1.3]">
            <span className="manifesto-word">Education</span>{' '}
            <span className="manifesto-word">in</span>{' '}
            <span className="manifesto-word">India</span>{' '}
            <span className="manifesto-word">is</span>{' '}
            <span className="manifesto-word">broken.</span>{' '}
            <span className="manifesto-word text-white/40">Millions</span>{' '}
            <span className="manifesto-word text-white/40">memorize</span>{' '}
            <span className="manifesto-word text-white/40">without</span>{' '}
            <span className="manifesto-word text-white/40">understanding.</span>{' '}
            <span className="manifesto-word text-white/40">Graduate</span>{' '}
            <span className="manifesto-word text-white/40">without</span>{' '}
            <span className="manifesto-word text-white/40">direction.</span>{' '}
            <span className="manifesto-word">We&apos;re</span>{' '}
            <span className="manifesto-word">here</span>{' '}
            <span className="manifesto-word">to</span>{' '}
            <span className="manifesto-word">change</span>{' '}
            <span className="manifesto-word">that—</span>
            <span className="manifesto-word text-[#E08A69]">one</span>{' '}
            <span className="manifesto-word text-[#E08A69]">village</span>{' '}
            <span className="manifesto-word text-[#E08A69]">at</span>{' '}
            <span className="manifesto-word text-[#E08A69]">a</span>{' '}
            <span className="manifesto-word text-[#E08A69]">time.</span>
          </p>
        </div>
      </section>

      {/* ============================================
          HORIZONTAL IMAGE STRIP
          ============================================ */}
      <section className="strip-section relative h-screen bg-[#0A0A0A]">
        <div className="absolute top-8 left-6 md:left-12 z-10">
          <p className="text-white/30 text-xs uppercase tracking-[0.3em]">The Ground Reality</p>
        </div>
        
        <div className="h-full flex items-center">
          <div className="strip-track flex gap-4 pl-6 md:pl-12">
            {[
              { src: '/images/kalem-02.jpg', caption: 'Rural classroom sessions' },
              { src: '/images/kalem-03.jpg', caption: 'Interactive learning' },
              { src: '/images/kalem-06.jpg', caption: 'Community gatherings' },
              { src: '/images/kalem-11.jpg', caption: 'Celebrations' },
              { src: '/images/kalem-09.jpg', caption: 'Youth workshops' },
              { src: '/images/kalem-10.jpg', caption: 'Empowerment programs' },
              { src: '/images/kalem-04.jpg', caption: 'Building futures' },
            ].map((img, i) => (
              <div 
                key={i}
                className="relative flex-shrink-0 group"
                style={{ 
                  width: i % 2 === 0 ? '45vw' : '35vw',
                  height: '70vh',
                }}
              >
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 80vw, 45vw"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-xs uppercase tracking-widest">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          FOUNDER - CINEMATIC STORY
          ============================================ */}
      <section className="founder-section py-32 md:py-48 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8">
            {/* Left - Image */}
            <div className="col-span-12 lg:col-span-5">
              <div className="founder-image relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/kalem-05.jpg"
                  alt="Ritik Prajjwal Sahu, Founder"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  loading="lazy"
                />
              </div>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-[1px] bg-[#1C1917]/20" />
                <p className="text-[#1C1917]/60 text-sm">Founder & Visionary</p>
              </div>
            </div>

            {/* Right - Story */}
            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <div className="founder-text-block">
                <p className="text-[#C96B4A] text-xs uppercase tracking-[0.3em] mb-6">The Beginning</p>
                <h2 className="font-serif text-[clamp(2rem,4vw,4rem)] text-[#1C1917] leading-[1.1] mb-8">
                  &ldquo;Why are we learning this?&rdquo;
                </h2>
              </div>

              <div className="founder-text-block space-y-6 text-[#1C1917]/70 text-lg leading-relaxed">
                <p>
                  Ritik Prajjwal Sahu asked this question throughout his years at NIT Rourkela—one 
                  of India&apos;s premier engineering colleges. Despite excellent grades, he felt a 
                  profound disconnect between what he studied and why it mattered.
                </p>
                <p>
                  If students at elite institutions struggled with purpose, what about children 
                  in rural Odisha? Those learning from outdated textbooks in under-resourced schools?
                </p>
                <p className="text-[#1C1917] font-medium text-xl">
                  Kalem Foundation—Kalinga Empowerment Foundation—was born from this question. 
                  Not to give answers, but to help every child find their own.
                </p>
              </div>

              <div className="founder-text-block mt-12 pt-8 border-t border-[#1C1917]/10">
                <p className="font-serif text-2xl text-[#1C1917]">Ritik Prajjwal Sahu</p>
                <p className="text-[#1C1917]/50 mt-1">NIT Rourkela &apos;21 • ISB &apos;25</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          PROGRAMS - EDITORIAL LAYOUT
          ============================================ */}
      <section id="programs" className="py-32 md:py-48 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="mb-24 md:mb-32">
            <p className="text-[#E08A69] text-xs uppercase tracking-[0.3em] mb-6 reveal-up">What We Build</p>
            <h2 className="parallax-text font-serif text-[clamp(3rem,8vw,8rem)] text-white leading-[0.9] tracking-[-0.02em]">
              Four<br />
              <span className="text-white/30">pillars</span>
            </h2>
          </div>

          {/* Program Grid - Asymmetric */}
          <div className="space-y-8">
            {/* Row 1 */}
            <div className="grid grid-cols-12 gap-4 md:gap-8">
              {/* Rural Education - Large */}
              <div className="program-card col-span-12 lg:col-span-7 relative h-[500px] md:h-[600px] group overflow-hidden">
                <Image
                  src="/images/kalem-02.jpg"
                  alt="Rural Education"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <span className="text-[#E08A69] text-7xl md:text-9xl font-serif opacity-20 absolute top-0 right-8">01</span>
                  <p className="text-[#E08A69] text-xs uppercase tracking-[0.3em] mb-3">Program</p>
                  <h3 className="font-serif text-3xl md:text-5xl text-white mb-4">Rural Education</h3>
                  <p className="text-white/60 max-w-md leading-relaxed">
                    Interactive sessions in village schools. Modern pedagogy meets grassroots reality.
                  </p>
                </div>
              </div>

              {/* WhySchool - Smaller */}
              <div className="program-card col-span-12 lg:col-span-5 relative h-[400px] md:h-[600px] group overflow-hidden">
                <Image
                  src="/images/kalem-09.jpg"
                  alt="WhySchool"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <span className="text-[#E08A69] text-7xl md:text-9xl font-serif opacity-20 absolute top-0 right-8">02</span>
                  <p className="text-[#E08A69] text-xs uppercase tracking-[0.3em] mb-3">Program</p>
                  <h3 className="font-serif text-3xl md:text-4xl text-white mb-4">WhySchool</h3>
                  <p className="text-white/60 max-w-md leading-relaxed mb-6">
                    6-day bootcamps for career clarity. Real skills, real projects, real confidence.
                  </p>
                  <a 
                    href="https://whyschool.academy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#E08A69] text-sm hover:text-white transition-colors"
                  >
                    Visit whyschool.academy
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-12 gap-4 md:gap-8">
              {/* Community - Smaller */}
              <div className="program-card col-span-12 lg:col-span-5 relative h-[400px] md:h-[500px] group overflow-hidden">
                <Image
                  src="/images/kalem-11.jpg"
                  alt="Community Work"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <span className="text-[#E08A69] text-7xl md:text-9xl font-serif opacity-20 absolute top-0 right-8">03</span>
                  <p className="text-[#E08A69] text-xs uppercase tracking-[0.3em] mb-3">Program</p>
                  <h3 className="font-serif text-3xl md:text-4xl text-white mb-4">Community</h3>
                  <p className="text-white/60 max-w-md leading-relaxed">
                    Christmas celebrations, family engagement, collective ownership of change.
                  </p>
                </div>
              </div>

              {/* Youth Leadership - Large */}
              <div className="program-card col-span-12 lg:col-span-7 relative h-[500px] md:h-[500px] group overflow-hidden">
                <Image
                  src="/images/kalem-10.jpg"
                  alt="Youth Leadership"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <span className="text-[#E08A69] text-7xl md:text-9xl font-serif opacity-20 absolute top-0 right-8">04</span>
                  <p className="text-[#E08A69] text-xs uppercase tracking-[0.3em] mb-3">Program</p>
                  <h3 className="font-serif text-3xl md:text-5xl text-white mb-4">Youth Leadership</h3>
                  <p className="text-white/60 max-w-md leading-relaxed">
                    Training college students to become change-makers. Creating educators who understand ground realities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          IMPACT - DRAMATIC NUMBERS
          ============================================ */}
      <section id="impact" className="py-32 md:py-48 bg-[#F8F7F4] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Left - Numbers */}
            <div className="col-span-12 lg:col-span-6">
              <p className="text-[#C96B4A] text-xs uppercase tracking-[0.3em] mb-12 reveal-up">Impact</p>
              
              <div className="space-y-12">
                <div className="reveal-up">
                  <p className="font-serif text-[clamp(5rem,15vw,12rem)] text-[#1C1917] leading-none">
                    <span className="stat-number" data-target="500">0</span>
                    <span className="text-[#C96B4A]">+</span>
                  </p>
                  <p className="text-[#1C1917]/50 text-sm uppercase tracking-widest mt-2">Students Reached</p>
                </div>
                
                <div className="reveal-up grid grid-cols-2 gap-8">
                  <div>
                    <p className="font-serif text-[clamp(3rem,8vw,6rem)] text-[#1C1917] leading-none">
                      <span className="stat-number" data-target="12">0</span>
                    </p>
                    <p className="text-[#1C1917]/50 text-sm uppercase tracking-widest mt-2">Rural Schools</p>
                  </div>
                  <div>
                    <p className="font-serif text-[clamp(3rem,8vw,6rem)] text-[#1C1917] leading-none">
                      <span className="stat-number" data-target="25">0</span>
                      <span className="text-[#C96B4A]">+</span>
                    </p>
                    <p className="text-[#1C1917]/50 text-sm uppercase tracking-widest mt-2">Volunteers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Image Collage */}
            <div className="col-span-12 lg:col-span-5 lg:col-start-8">
              <div className="relative">
                <div className="gallery-img relative aspect-square overflow-hidden">
                  <Image
                    src="/images/kalem-07.jpg"
                    alt="Team collaboration"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    loading="lazy"
                  />
                </div>
                <div className="gallery-img absolute -bottom-12 -left-12 w-2/3 aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/kalem-12.jpg"
                    alt="Community session"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 66vw, 27vw"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          GALLERY - MASONRY GRID
          ============================================ */}
      <section className="py-32 md:py-48 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-[#E08A69] text-xs uppercase tracking-[0.3em] mb-12 reveal-up">Moments</p>
          
          {/* Masonry Grid */}
          <div className="grid grid-cols-12 gap-4">
            <div className="gallery-img col-span-6 md:col-span-4 aspect-[3/4] relative overflow-hidden">
              <Image src="/images/kalem-01.jpg" alt="Kalem moment" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 33vw" loading="lazy" />
            </div>
            <div className="gallery-img col-span-6 md:col-span-4 aspect-square relative overflow-hidden mt-12">
              <Image src="/images/kalem-03.jpg" alt="Kalem moment" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 33vw" loading="lazy" />
            </div>
            <div className="gallery-img col-span-12 md:col-span-4 aspect-[4/3] relative overflow-hidden">
              <Image src="/images/kalem-06.jpg" alt="Kalem moment" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" />
            </div>
            <div className="gallery-img col-span-6 md:col-span-5 aspect-[4/3] relative overflow-hidden">
              <Image src="/images/kalem-04.jpg" alt="Kalem moment" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 42vw" loading="lazy" />
            </div>
            <div className="gallery-img col-span-6 md:col-span-3 aspect-[3/4] relative overflow-hidden mt-8">
              <Image src="/images/kalem-13.jpg" alt="Kalem moment" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 25vw" loading="lazy" />
            </div>
            <div className="gallery-img col-span-12 md:col-span-4 aspect-square relative overflow-hidden -mt-16">
              <Image src="/images/kalem-11.jpg" alt="Kalem moment" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA - BOLD
          ============================================ */}
      <section id="connect" className="py-32 md:py-48 bg-[#C96B4A]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <p className="text-white/60 text-xs uppercase tracking-[0.3em] mb-8 reveal-up">Get Involved</p>
          <h2 className="font-serif text-[clamp(2.5rem,7vw,6rem)] text-white leading-[0.95] mb-12 reveal-up">
            Change happens<br />together.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 reveal-up">
            <a 
              href="#" 
              className="bg-white text-[#1C1917] px-10 py-5 text-sm uppercase tracking-widest hover:bg-[#1C1917] hover:text-white transition-all"
            >
              Volunteer
            </a>
            <a 
              href="#" 
              className="border border-white text-white px-10 py-5 text-sm uppercase tracking-widest hover:bg-white hover:text-[#1C1917] transition-all"
            >
              Partner
            </a>
            <a 
              href="#" 
              className="border border-white text-white px-10 py-5 text-sm uppercase tracking-widest hover:bg-white hover:text-[#1C1917] transition-all"
            >
              Donate
            </a>
          </div>
        </div>
      </section>

      {/* ============================================
          FOOTER - MINIMAL
          ============================================ */}
      <footer className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 md:col-span-4">
              <p className="font-serif text-4xl text-white mb-4">Kalem</p>
              <p className="text-white/40 leading-relaxed">
                Kalinga Empowerment Foundation<br />
                Bhubaneswar, Odisha, India
              </p>
            </div>
            <div className="col-span-6 md:col-span-2 md:col-start-7">
              <p className="text-white text-sm uppercase tracking-widest mb-4">Programs</p>
              <div className="space-y-3 text-white/40">
                <a href="#programs" className="block hover:text-white transition-colors">Rural Education</a>
                <a href="https://whyschool.academy" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">WhySchool</a>
                <a href="#programs" className="block hover:text-white transition-colors">Community</a>
              </div>
            </div>
            <div className="col-span-6 md:col-span-2">
              <p className="text-white text-sm uppercase tracking-widest mb-4">Connect</p>
              <div className="space-y-3 text-white/40">
                <a href="#" className="block hover:text-white transition-colors">Instagram</a>
                <a href="#" className="block hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="block hover:text-white transition-colors">Twitter</a>
              </div>
            </div>
            <div className="col-span-12 md:col-span-2">
              <p className="text-white text-sm uppercase tracking-widest mb-4">Contact</p>
              <p className="text-white/40">hello@kalemfoundation.org</p>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm">© 2024 Kalem Foundation</p>
            <p className="text-white/20 text-sm">Made with purpose in Odisha</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
