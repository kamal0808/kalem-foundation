'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

// Photo data for the gallery
const photos = [
  { src: '/images/kalem-01.jpg', alt: 'Community gathering at Kalem Foundation', caption: 'Building connections' },
  { src: '/images/kalem-02.jpg', alt: 'Rural classroom education session', caption: 'Learning together' },
  { src: '/images/kalem-03.jpg', alt: 'Students engaged in activities', caption: 'Active minds' },
  { src: '/images/kalem-04.jpg', alt: 'Community workshop', caption: 'Shared growth' },
  { src: '/images/kalem-05.jpg', alt: 'Youth leadership program', caption: 'Future leaders' },
  { src: '/images/kalem-06.jpg', alt: 'Educational resources distribution', caption: 'Resources for all' },
  { src: '/images/kalem-07.jpg', alt: 'Team collaboration', caption: 'Working as one' },
  { src: '/images/kalem-08.jpg', alt: 'Children at rural school', caption: 'Bright futures' },
  { src: '/images/kalem-09.jpg', alt: 'WhySchool bootcamp session', caption: 'Finding clarity' },
  { src: '/images/kalem-10.jpg', alt: 'Youth empowerment session', caption: 'Voices rising' },
  { src: '/images/kalem-11.jpg', alt: 'Community celebration', caption: 'Joy in progress' },
  { src: '/images/kalem-12.jpg', alt: 'Parent engagement program', caption: 'Families united' },
  { src: '/images/kalem-13.jpg', alt: 'Volunteer team', caption: 'Heart of change' },
];

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Connect Lenis to ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Page load animation
    setTimeout(() => setIsLoaded(true), 100);

    const ctx = gsap.context(() => {
      // HERO SECTION ANIMATIONS
      // ========================
      
      // Split text for hero title
      const heroTitle = document.querySelector('.hero-title');
      if (heroTitle) {
        const split = new SplitType(heroTitle as HTMLElement, { 
          types: 'chars,words',
          tagName: 'span'
        });
        
        gsap.from(split.chars, {
          opacity: 0,
          y: 100,
          rotateX: -90,
          stagger: 0.02,
          duration: 1,
          ease: 'power4.out',
          delay: 0.5,
        });
      }

      // Hero subtitle fade
      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        delay: 1.2,
      });

      // Hero CTA buttons
      gsap.from('.hero-cta', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        delay: 1.5,
      });

      // Parallax on hero image
      gsap.to('.hero-bg-image', {
        yPercent: 40,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // FOUNDER SECTION - STICKY SCROLL
      // ================================
      
      const founderSection = document.querySelector('.founder-section');
      if (founderSection) {
        // Pin the founder text
        ScrollTrigger.create({
          trigger: '.founder-content',
          start: 'top 20%',
          end: 'bottom 80%',
          pin: '.founder-text',
          pinSpacing: false,
        });

        // Parallax on founder images
        gsap.to('.founder-img-1', {
          yPercent: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: '.founder-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });

        gsap.to('.founder-img-2', {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: '.founder-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      // TEXT REVEALS
      // =============
      
      // Split text reveals for section titles
      document.querySelectorAll('.reveal-title').forEach((el) => {
        const split = new SplitType(el as HTMLElement, { 
          types: 'words',
          tagName: 'span'
        });
        
        gsap.from(split.words, {
          opacity: 0,
          y: 60,
          stagger: 0.05,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      // Paragraph reveals
      gsap.utils.toArray('.reveal-text').forEach((el: any) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      // HORIZONTAL GALLERY
      // ===================
      
      const gallerySection = document.querySelector('.gallery-section');
      const galleryTrack = document.querySelector('.gallery-track');
      
      if (gallerySection && galleryTrack) {
        const galleryWidth = galleryTrack.scrollWidth;
        const windowWidth = window.innerWidth;
        
        gsap.to(galleryTrack, {
          x: () => -(galleryWidth - windowWidth + 100),
          ease: 'none',
          scrollTrigger: {
            trigger: gallerySection,
            start: 'top top',
            end: () => `+=${galleryWidth}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        // Individual image parallax within gallery
        document.querySelectorAll('.gallery-item').forEach((item) => {
          const img = item.querySelector('img');
          gsap.to(img, {
            xPercent: -10,
            ease: 'none',
            scrollTrigger: {
              trigger: gallerySection,
              start: 'top top',
              end: () => `+=${galleryWidth}`,
              scrub: 1,
            },
          });
        });
      }

      // IMPACT NUMBERS COUNTER
      // =======================
      
      document.querySelectorAll('.counter').forEach((counter: any) => {
        const target = parseInt(counter.dataset.target || '0');
        const obj = { value: 0 };
        
        gsap.to(obj, {
          value: target,
          duration: 2.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: counter,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          onUpdate: () => {
            counter.textContent = Math.floor(obj.value);
          },
        });
      });

      // PROGRAMS SECTION - STAGGER REVEAL
      // ==================================
      
      gsap.utils.toArray('.program-card').forEach((card: any, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 100,
          scale: 0.95,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          delay: i * 0.1,
        });
      });

      // IMAGE REVEALS
      // ==============
      
      gsap.utils.toArray('.img-reveal').forEach((el: any) => {
        const overlay = el.querySelector('.img-reveal-overlay');
        const img = el.querySelector('img');
        
        if (overlay && img) {
          gsap.set(img, { scale: 1.3 });
          
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          });
          
          tl.to(overlay, {
            scaleX: 0,
            duration: 1.2,
            ease: 'power4.inOut',
            transformOrigin: 'right center',
          });
          
          tl.to(img, {
            scale: 1,
            duration: 1.4,
            ease: 'power3.out',
          }, '-=0.8');
        }
      });

      // LINE REVEALS
      // =============
      
      gsap.utils.toArray('.line-reveal').forEach((el: any) => {
        gsap.from(el, {
          scaleX: 0,
          duration: 1.2,
          ease: 'power4.inOut',
          transformOrigin: 'left center',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      // FOOTER REVEAL
      // ==============
      
      gsap.from('.footer-content', {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.site-footer',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

    }, containerRef);

    // CUSTOM CURSOR
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
      className={`bg-[#F8F7F4] transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Custom Cursor */}
      <div 
        className={`custom-cursor ${cursorVariant}`}
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
        }}
      />
      <div 
        className="cursor-dot"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="container-wide">
          <div className="flex items-center justify-between h-24 md:h-28">
            {/* Logo */}
            <a href="#" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center overflow-hidden">
                <span className="text-white font-serif text-2xl group-hover:scale-110 transition-transform duration-500">K</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-white font-serif text-xl tracking-tight">Kalem</span>
                <span className="text-white/60 text-xs ml-2 uppercase tracking-widest">Foundation</span>
              </div>
            </a>
            
            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-12">
              <a href="#about" className="text-white text-sm uppercase tracking-widest hover:opacity-60 transition-opacity">About</a>
              <a href="#programs" className="text-white text-sm uppercase tracking-widest hover:opacity-60 transition-opacity">Programs</a>
              <a href="#impact" className="text-white text-sm uppercase tracking-widest hover:opacity-60 transition-opacity">Impact</a>
              <a href="#contact" className="text-white text-sm uppercase tracking-widest hover:opacity-60 transition-opacity">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* ============================================
          HERO SECTION - FULL BLEED CINEMATIC
          ============================================ */}
      <section ref={heroRef} className="relative h-[100vh] min-h-[700px] overflow-hidden">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0">
          <div className="hero-bg-image absolute inset-0 scale-110">
            <Image
              src="/images/kalem-08.jpg"
              alt="Children at Kalem Foundation school"
              fill
              className="object-cover"
              priority
              quality={100}
            />
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />
          {/* Grain Texture */}
          <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col justify-end pb-16 md:pb-24">
          <div className="container-wide">
            {/* Label */}
            <div className="mb-8 overflow-hidden">
              <p className="text-white/70 text-xs uppercase tracking-[0.3em] hero-subtitle">
                Kalinga Empowerment Foundation • Odisha, India
              </p>
            </div>

            {/* Main Title */}
            <h1 className="hero-title text-white font-serif text-[clamp(3rem,10vw,10rem)] leading-[0.9] tracking-[-0.02em] mb-8 max-w-[90%]">
              Transforming lives,<br />
              <span className="text-white/50">one village at a time</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle text-white/80 text-xl md:text-2xl font-light max-w-2xl mb-12 leading-relaxed">
              From rural classrooms to youth empowerment—we&apos;re building futures 
              where every child has access to quality education and the confidence to dream.
            </p>

            {/* CTAs */}
            <div className="hero-cta flex flex-wrap gap-6">
              <a 
                href="#programs" 
                className="group inline-flex items-center gap-4 bg-white text-stone-900 px-8 py-5 text-sm uppercase tracking-widest hover:bg-[#C96B4A] hover:text-white transition-all duration-500"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <span>Explore Programs</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a 
                href="#about" 
                className="inline-flex items-center gap-4 border border-white/40 text-white px-8 py-5 text-sm uppercase tracking-widest hover:bg-white/10 transition-all duration-500"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <span>Our Story</span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ============================================
          MISSION MARQUEE
          ============================================ */}
      <section className="py-6 bg-[#1C1917] overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content animate-marquee">
            {[...Array(12)].map((_, i) => (
              <span key={i} className="text-white/40 text-sm uppercase tracking-[0.4em] mx-12 whitespace-nowrap">
                Education • Empowerment • Community • Transformation •
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          ABOUT / FOUNDER SECTION
          ============================================ */}
      <section id="about" className="founder-section relative py-32 md:py-48 overflow-hidden">
        <div className="container-wide">
          <div className="founder-content grid grid-cols-12 gap-6 md:gap-12">
            {/* Left Column - Images */}
            <div className="col-span-12 lg:col-span-5 relative">
              {/* First Image - Larger */}
              <div className="founder-img-1 img-reveal relative aspect-[4/5] mb-6 overflow-hidden">
                <div className="img-reveal-overlay absolute inset-0 bg-[#F8F7F4] z-10" />
                <Image
                  src="/images/kalem-05.jpg"
                  alt="Ritik Prajjwal Sahu speaking to students"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Second Image - Offset smaller */}
              <div className="founder-img-2 img-reveal relative aspect-[3/4] w-2/3 ml-auto -mt-24 overflow-hidden">
                <div className="img-reveal-overlay absolute inset-0 bg-[#F8F7F4] z-10" />
                <Image
                  src="/images/kalem-07.jpg"
                  alt="Community gathering"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="col-span-12 lg:col-span-6 lg:col-start-7 founder-text">
              {/* Section Label */}
              <p className="text-[#C96B4A] text-xs uppercase tracking-[0.3em] mb-8 reveal-text">
                The Origin Story
              </p>

              {/* Main Title */}
              <h2 className="reveal-title font-serif text-[clamp(2.5rem,5vw,4.5rem)] text-[#1C1917] leading-[1] mb-12">
                Born from a simple question:
                <span className="block text-stone-400 mt-2">&ldquo;Why are we learning this?&rdquo;</span>
              </h2>

              {/* Story Text */}
              <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
                <p className="reveal-text">
                  Ritik Prajjwal Sahu sat in classrooms at NIT Rourkela—one of India&apos;s 
                  premier engineering institutes—and felt a profound disconnect. Years of 
                  study, but no clarity on purpose. Excellent grades, but no real-world skills.
                </p>
                <p className="reveal-text">
                  The realization sparked something bigger: if students at elite institutions 
                  struggle with direction, what about children in rural Odisha? Those who 
                  sit on mats in under-resourced schools, learning from outdated textbooks?
                </p>
                <p className="reveal-text text-[#1C1917] font-medium">
                  Kalem Foundation—Kalinga Empowerment Foundation—was born to bridge 
                  this gap. From grassroots classrooms to career clarity programs, we&apos;re 
                  redefining what education means.
                </p>
              </div>

              {/* Founder Info */}
              <div className="mt-16 pt-8 border-t border-stone-200">
                <div className="flex items-center gap-6 reveal-text">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      src="/images/kalem-05.jpg"
                      alt="Ritik Prajjwal Sahu"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-serif text-2xl text-[#1C1917]">Ritik Prajjwal Sahu</p>
                    <p className="text-stone-500">Founder • NIT Rourkela</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          IMPACT NUMBERS
          ============================================ */}
      <section id="impact" className="py-32 md:py-48 bg-[#1C1917]">
        <div className="container-wide">
          {/* Section Header */}
          <div className="text-center mb-24">
            <p className="text-[#C96B4A] text-xs uppercase tracking-[0.3em] mb-6 reveal-text">
              Our Impact
            </p>
            <h2 className="reveal-title font-serif text-[clamp(2rem,4vw,4rem)] text-white leading-tight">
              Numbers that represent<br />
              <span className="text-white/40">real lives changed</span>
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            <div className="text-center reveal-text">
              <p className="font-serif text-[clamp(4rem,8vw,8rem)] text-[#C96B4A] leading-none mb-4">
                <span className="counter" data-target="500">0</span>
                <span className="text-[0.5em]">+</span>
              </p>
              <p className="text-white/50 text-sm uppercase tracking-widest">Students Reached</p>
            </div>
            <div className="text-center reveal-text">
              <p className="font-serif text-[clamp(4rem,8vw,8rem)] text-[#C96B4A] leading-none mb-4">
                <span className="counter" data-target="12">0</span>
              </p>
              <p className="text-white/50 text-sm uppercase tracking-widest">Rural Schools</p>
            </div>
            <div className="text-center reveal-text">
              <p className="font-serif text-[clamp(4rem,8vw,8rem)] text-[#C96B4A] leading-none mb-4">
                <span className="counter" data-target="25">0</span>
                <span className="text-[0.5em]">+</span>
              </p>
              <p className="text-white/50 text-sm uppercase tracking-widest">Volunteers</p>
            </div>
            <div className="text-center reveal-text">
              <p className="font-serif text-[clamp(4rem,8vw,8rem)] text-[#C96B4A] leading-none mb-4">
                <span className="counter" data-target="4">0</span>
              </p>
              <p className="text-white/50 text-sm uppercase tracking-widest">Programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          PROGRAMS SECTION
          ============================================ */}
      <section id="programs" className="py-32 md:py-48 bg-[#F8F7F4]">
        <div className="container-wide">
          {/* Section Header */}
          <div className="grid grid-cols-12 gap-6 mb-24">
            <div className="col-span-12 lg:col-span-5">
              <p className="text-[#C96B4A] text-xs uppercase tracking-[0.3em] mb-6 reveal-text">
                What We Do
              </p>
              <h2 className="reveal-title font-serif text-[clamp(2.5rem,5vw,5rem)] text-[#1C1917] leading-[0.95]">
                Four pillars of<br />transformation
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-8 flex items-end">
              <p className="text-stone-600 text-xl leading-relaxed reveal-text">
                From early education to career readiness, our programs address 
                different stages of a young person&apos;s journey toward empowerment.
              </p>
            </div>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Program 1: Rural Education */}
            <div className="program-card group relative h-[600px] overflow-hidden">
              <Image
                src="/images/kalem-02.jpg"
                alt="Rural classroom education"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <span className="text-[#E08A69] text-xs uppercase tracking-[0.3em] mb-4 block">01</span>
                <h3 className="font-serif text-3xl md:text-4xl text-white mb-4">Rural Education Initiative</h3>
                <p className="text-white/70 leading-relaxed max-w-md mb-6">
                  Quality learning for village schools—interactive sessions, modern teaching 
                  methods, and resources that make education engaging and relevant.
                </p>
                <div className="w-16 h-px bg-[#C96B4A] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </div>

            {/* Program 2: WhySchool */}
            <div className="program-card group relative h-[600px] overflow-hidden">
              <Image
                src="/images/kalem-09.jpg"
                alt="WhySchool bootcamp"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <span className="text-[#E08A69] text-xs uppercase tracking-[0.3em] mb-4 block">02</span>
                <h3 className="font-serif text-3xl md:text-4xl text-white mb-4">WhySchool.academy</h3>
                <p className="text-white/70 leading-relaxed max-w-md mb-6">
                  A 6-day career clarity bootcamp. Stop learning passively—start building actively. 
                  Real tools, real projects, real confidence.
                </p>
                <a 
                  href="https://whyschool.academy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[#E08A69] text-sm uppercase tracking-widest hover:text-white transition-colors"
                >
                  <span>Visit Website</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Program 3: Community */}
            <div className="program-card group relative h-[600px] overflow-hidden">
              <Image
                src="/images/kalem-11.jpg"
                alt="Community empowerment"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <span className="text-[#E08A69] text-xs uppercase tracking-[0.3em] mb-4 block">03</span>
                <h3 className="font-serif text-3xl md:text-4xl text-white mb-4">Community Empowerment</h3>
                <p className="text-white/70 leading-relaxed max-w-md mb-6">
                  Beyond students—we work with families and communities. Parent engagement, 
                  community gatherings, and programs that build collective ownership.
                </p>
                <div className="w-16 h-px bg-[#C96B4A] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </div>

            {/* Program 4: Youth Leadership */}
            <div className="program-card group relative h-[600px] overflow-hidden">
              <Image
                src="/images/kalem-10.jpg"
                alt="Youth leadership"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <span className="text-[#E08A69] text-xs uppercase tracking-[0.3em] mb-4 block">04</span>
                <h3 className="font-serif text-3xl md:text-4xl text-white mb-4">Youth Leadership</h3>
                <p className="text-white/70 leading-relaxed max-w-md mb-6">
                  Mentoring college students to become change-makers. Volunteer training, 
                  leadership development, and creating educators who understand ground realities.
                </p>
                <div className="w-16 h-px bg-[#C96B4A] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          HORIZONTAL GALLERY
          ============================================ */}
      <section className="gallery-section relative h-screen bg-[#1C1917]">
        {/* Gallery Label */}
        <div className="absolute top-8 left-8 md:left-16 z-20">
          <p className="text-white/40 text-xs uppercase tracking-[0.3em] mb-2">Gallery</p>
          <p className="text-white/60 text-sm">Scroll to explore →</p>
        </div>

        {/* Horizontal Track */}
        <div className="h-full flex items-center">
          <div className="gallery-track flex gap-8 pl-8 md:pl-32 pr-8">
            {photos.map((photo, index) => (
              <div 
                key={index} 
                className="gallery-item flex-shrink-0 relative group"
                style={{
                  width: index % 3 === 0 ? '50vw' : index % 3 === 1 ? '35vw' : '40vw',
                  height: '70vh',
                }}
              >
                <div className="relative h-full overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
                </div>
                <p className="absolute bottom-4 left-4 text-white/0 group-hover:text-white/80 text-sm uppercase tracking-widest transition-all duration-500">
                  {photo.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          TEAM SECTION
          ============================================ */}
      <section className="py-32 md:py-48 bg-[#F8F7F4]">
        <div className="container-wide">
          <div className="grid grid-cols-12 gap-8 md:gap-16">
            {/* Left Column - Header */}
            <div className="col-span-12 lg:col-span-4">
              <p className="text-[#C96B4A] text-xs uppercase tracking-[0.3em] mb-6 reveal-text">
                The Team
              </p>
              <h2 className="reveal-title font-serif text-[clamp(2rem,4vw,3.5rem)] text-[#1C1917] leading-tight mb-8">
                People who believe in change
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed reveal-text">
                From NIT Rourkela to BlackRock, from INSEAD to ISRO—diverse expertise 
                united by commitment to education.
              </p>
            </div>

            {/* Right Column - Team Grid */}
            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {/* Team Member 1 */}
                <div className="reveal-text group">
                  <div className="aspect-[3/4] relative mb-4 overflow-hidden">
                    <Image
                      src="/images/kalem-05.jpg"
                      alt="Ritik Prajjwal Sahu"
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <h3 className="font-serif text-xl text-[#1C1917]">Ritik Prajjwal Sahu</h3>
                  <p className="text-[#C96B4A] text-sm">Founder</p>
                  <p className="text-stone-400 text-xs mt-1">NIT Rourkela</p>
                </div>

                {/* Team Member 2 */}
                <div className="reveal-text group">
                  <div className="aspect-[3/4] relative mb-4 overflow-hidden">
                    <Image
                      src="/images/kalem-07.jpg"
                      alt="Shashmit"
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <h3 className="font-serif text-xl text-[#1C1917]">Shashmit</h3>
                  <p className="text-[#C96B4A] text-sm">CTO</p>
                  <p className="text-stone-400 text-xs mt-1">Technology Lead</p>
                </div>

                {/* Team Member 3 */}
                <div className="reveal-text group">
                  <div className="aspect-[3/4] relative mb-4 overflow-hidden">
                    <Image
                      src="/images/kalem-03.jpg"
                      alt="Anwesha Swain"
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <h3 className="font-serif text-xl text-[#1C1917]">Anwesha Swain</h3>
                  <p className="text-[#C96B4A] text-sm">Marketing</p>
                  <p className="text-stone-400 text-xs mt-1">BlackRock</p>
                </div>

                {/* Team Member 4 */}
                <div className="reveal-text group">
                  <div className="aspect-[3/4] relative mb-4 overflow-hidden">
                    <Image
                      src="/images/kalem-01.jpg"
                      alt="Alankrita Yadav"
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <h3 className="font-serif text-xl text-[#1C1917]">Alankrita Yadav</h3>
                  <p className="text-[#C96B4A] text-sm">Strategy</p>
                  <p className="text-stone-400 text-xs mt-1">INSEAD</p>
                </div>

                {/* Team Member 5 */}
                <div className="reveal-text group">
                  <div className="aspect-[3/4] relative mb-4 overflow-hidden">
                    <Image
                      src="/images/kalem-04.jpg"
                      alt="Pritesh Raj"
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <h3 className="font-serif text-xl text-[#1C1917]">Pritesh Raj</h3>
                  <p className="text-[#C96B4A] text-sm">Research</p>
                  <p className="text-stone-400 text-xs mt-1">DRDO / ISRO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION
          ============================================ */}
      <section id="contact" className="relative py-48 md:py-64 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/kalem-13.jpg"
            alt="Join Kalem Foundation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1C1917]/90" />
        </div>

        {/* Content */}
        <div className="container-wide relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#C96B4A] text-xs uppercase tracking-[0.3em] mb-8 reveal-text">
              Get Involved
            </p>
            <h2 className="reveal-title font-serif text-[clamp(3rem,7vw,7rem)] text-white leading-[0.9] mb-12">
              Change happens<br />together
            </h2>
            <p className="text-white/60 text-xl md:text-2xl leading-relaxed mb-16 reveal-text">
              Whether you want to volunteer, partner with us, or support our 
              mission—every contribution creates ripples of change.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 reveal-text">
              <a 
                href="#" 
                className="group inline-flex items-center justify-center gap-4 bg-[#C96B4A] text-white px-10 py-6 text-sm uppercase tracking-widest hover:bg-[#E08A69] transition-all duration-500"
              >
                <span>Volunteer With Us</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a 
                href="#" 
                className="group inline-flex items-center justify-center gap-4 border border-white/30 text-white px-10 py-6 text-sm uppercase tracking-widest hover:bg-white/10 transition-all duration-500"
              >
                <span>Partner</span>
              </a>
              <a 
                href="#" 
                className="group inline-flex items-center justify-center gap-4 border border-white/30 text-white px-10 py-6 text-sm uppercase tracking-widest hover:bg-white/10 transition-all duration-500"
              >
                <span>Donate</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FOOTER
          ============================================ */}
      <footer className="site-footer py-24 md:py-32 bg-[#1C1917]">
        <div className="container-wide footer-content">
          <div className="grid grid-cols-12 gap-8 md:gap-16 mb-20">
            {/* Logo & About */}
            <div className="col-span-12 lg:col-span-4">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full border-2 border-[#C96B4A] flex items-center justify-center">
                  <span className="text-[#C96B4A] font-serif text-2xl">K</span>
                </div>
                <span className="font-serif text-3xl text-white">Kalem</span>
              </div>
              <p className="text-white/50 leading-relaxed mb-6">
                Kalinga Empowerment Foundation<br />
                Empowering rural Odisha through education,<br />
                one community at a time.
              </p>
              <p className="text-white/30 text-sm">
                Registered Non-Profit Organization
              </p>
            </div>

            {/* Programs */}
            <div className="col-span-6 md:col-span-3 lg:col-span-2 lg:col-start-7">
              <h4 className="text-white font-medium mb-6 text-sm uppercase tracking-widest">Programs</h4>
              <div className="space-y-4 text-white/50">
                <a href="#programs" className="block hover:text-white transition-colors">Rural Education</a>
                <a href="https://whyschool.academy" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">WhySchool.academy</a>
                <a href="#programs" className="block hover:text-white transition-colors">Community Work</a>
                <a href="#programs" className="block hover:text-white transition-colors">Youth Leadership</a>
              </div>
            </div>

            {/* About */}
            <div className="col-span-6 md:col-span-3 lg:col-span-2">
              <h4 className="text-white font-medium mb-6 text-sm uppercase tracking-widest">About</h4>
              <div className="space-y-4 text-white/50">
                <a href="#about" className="block hover:text-white transition-colors">Our Story</a>
                <a href="#team" className="block hover:text-white transition-colors">Team</a>
                <a href="#impact" className="block hover:text-white transition-colors">Impact</a>
                <a href="#" className="block hover:text-white transition-colors">Annual Report</a>
              </div>
            </div>

            {/* Contact */}
            <div className="col-span-12 md:col-span-6 lg:col-span-2">
              <h4 className="text-white font-medium mb-6 text-sm uppercase tracking-widest">Connect</h4>
              <div className="space-y-4 text-white/50 mb-8">
                <a href="mailto:hello@kalemfoundation.org" className="block hover:text-white transition-colors">hello@kalemfoundation.org</a>
                <p>Bhubaneswar, Odisha, India</p>
              </div>
              <div className="flex items-center gap-4">
                <a href="#" className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-white/50 hover:border-[#C96B4A] hover:text-[#C96B4A] transition-all" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-white/50 hover:border-[#C96B4A] hover:text-[#C96B4A] transition-all" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-white/50 hover:border-[#C96B4A] hover:text-[#C96B4A] transition-all" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/30 text-sm">
                © 2024 Kalinga Empowerment Foundation. All rights reserved.
              </p>
              <p className="text-white/20 text-sm">
                Made with purpose in Odisha, India
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
