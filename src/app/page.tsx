'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

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

    // Page load animation
    setIsLoaded(true);

    // GSAP Animations
    const ctx = gsap.context(() => {
      // Hero parallax
      gsap.to('.hero-image', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Nav background on scroll
      ScrollTrigger.create({
        start: 100,
        onUpdate: (self) => {
          if (navRef.current) {
            navRef.current.classList.toggle('scrolled', self.direction === 1 && self.progress > 0);
          }
        },
      });

      // Fade up animations
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

      // Scale reveal for images
      gsap.utils.toArray('.scale-reveal').forEach((el: any) => {
        gsap.from(el, {
          scale: 0.9,
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
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      // Line reveal
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

      // Horizontal scroll for gallery
      const gallerySection = document.querySelector('.gallery-scroll');
      if (gallerySection) {
        const galleryTrack = gallerySection.querySelector('.gallery-track');
        if (galleryTrack) {
          gsap.to(galleryTrack, {
            x: () => -(galleryTrack.scrollWidth - window.innerWidth + 100),
            ease: 'none',
            scrollTrigger: {
              trigger: gallerySection,
              start: 'top top',
              end: () => `+=${galleryTrack.scrollWidth}`,
              scrub: 1,
              pin: true,
            },
          });
        }
      }

      // Counter animation
      gsap.utils.toArray('.counter-value').forEach((el: any) => {
        const target = parseInt(el.dataset.target || '0');
        gsap.to(el, {
          textContent: target,
          duration: 2.5,
          ease: 'power1.inOut',
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      });

    }, containerRef);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className={`bg-stone-50 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
      {/* Navigation */}
      <nav 
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 [&.scrolled]:bg-stone-50/95 [&.scrolled]:backdrop-blur-xl [&.scrolled]:border-b [&.scrolled]:border-stone-200"
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-20 md:h-24">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-terracotta-500 rounded-full flex items-center justify-center">
                <span className="text-white font-serif text-xl">K</span>
              </div>
              <div>
                <span className="font-serif text-xl tracking-tight text-stone-900">Kalem</span>
                <span className="hidden sm:inline text-xs text-stone-400 ml-2">Foundation</span>
              </div>
            </a>
            
            <div className="hidden md:flex items-center gap-10">
              <a href="#about" className="nav-link">About</a>
              <a href="#programs" className="nav-link">Programs</a>
              <a href="#impact" className="nav-link">Impact</a>
              <a href="#team" className="nav-link">Team</a>
              <a href="#contact" className="btn-primary">
                <span>Get Involved</span>
              </a>
            </div>

            <button className="md:hidden p-2 text-stone-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-end overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="hero-image absolute inset-0 scale-110">
            <Image
              src="/images/kalem-08.jpg"
              alt="Children learning at Kalem Foundation school"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="container-wide relative z-10 pb-16 md:pb-24 pt-32">
          <div className="max-w-5xl">
            <p className="label text-terracotta-300 mb-6 fade-up">Kalinga Empowerment Foundation</p>
            <h1 className="display-large text-white mb-8 fade-up">
              Transforming lives<br />
              <span className="text-stone-400">one village at a time.</span>
            </h1>
            <p className="body-xl text-stone-300 max-w-2xl mb-10 fade-up">
              From rural classrooms to youth empowerment programs, we&#39;re building 
              a future where every child in Odisha has access to quality education 
              and the confidence to dream bigger.
            </p>
            <div className="flex flex-wrap gap-4 fade-up">
              <a href="#programs" className="btn-primary">
                <span>Our Programs</span>
              </a>
              <a href="#about" className="btn border border-white/30 text-white hover:bg-white/10">
                <span>Our Story</span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 z-10 hidden lg:block">
          <div className="scroll-indicator" />
        </div>
      </section>

      {/* Mission Strip */}
      <section className="py-8 bg-terracotta-500 overflow-hidden">
        <div className="marquee">
          <div className="marquee-content">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-white/90 text-sm uppercase tracking-[0.3em] mx-8">
                Education • Empowerment • Community • Change •
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container-wide">
          <div className="editorial-grid items-center">
            <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
              <div className="aspect-[3/4] relative scale-reveal">
                <Image
                  src="/images/kalem-05.jpg"
                  alt="Ritik Prajjwal Sahu speaking to students"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7 order-1 lg:order-2 mb-12 lg:mb-0">
              <p className="label text-terracotta-500 mb-6 fade-up">About Kalem</p>
              <h2 className="heading-xl text-stone-900 mb-8 fade-up">
                Born from a simple question:<br />
                <em className="text-stone-400">"Why are we learning this?"</em>
              </h2>
              <div className="space-y-6 body-lg text-stone-600 fade-up">
                <p>
                  Ritik Prajjwal Sahu sat in classrooms at NIT Rourkela — one of India&#39;s 
                  premier engineering institutes — and felt a profound disconnect. Years of 
                  study, but no clarity on purpose. Excellent grades, but no real-world skills.
                </p>
                <p>
                  The realization sparked something bigger: if students at elite institutions 
                  struggle with direction, what about children in rural Odisha? Those who 
                  sit on mats in under-resourced schools, learning from outdated textbooks?
                </p>
                <p className="text-stone-800 font-medium">
                  Kalem Foundation — Kalinga Empowerment Foundation — was born to bridge 
                  this gap. We work at the grassroots, bringing quality education, career 
                  clarity, and community support to those who need it most.
                </p>
              </div>
              <div className="h-px bg-stone-200 my-10 line-reveal" />
              <div className="flex items-center gap-6 fade-up">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src="/images/kalem-07.jpg"
                    alt="Ritik Prajjwal Sahu"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-serif text-lg text-stone-900">Ritik Prajjwal Sahu</p>
                  <p className="text-sm text-stone-500">Founder, NIT Rourkela</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 md:py-32 bg-stone-900 text-white">
        <div className="container-wide">
          <div className="text-center mb-16 fade-up">
            <p className="label text-terracotta-400 mb-4">Our Impact</p>
            <h2 className="heading-lg text-white">
              Numbers that represent<br />real lives changed.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 stagger-container">
            <div className="text-center stagger-item">
              <p className="display-medium text-terracotta-400 mb-2">
                <span className="counter-value" data-target="500">0</span>+
              </p>
              <p className="text-stone-400 text-sm uppercase tracking-wider">Students Reached</p>
            </div>
            <div className="text-center stagger-item">
              <p className="display-medium text-terracotta-400 mb-2">
                <span className="counter-value" data-target="12">0</span>
              </p>
              <p className="text-stone-400 text-sm uppercase tracking-wider">Rural Schools</p>
            </div>
            <div className="text-center stagger-item">
              <p className="display-medium text-terracotta-400 mb-2">
                <span className="counter-value" data-target="25">0</span>+
              </p>
              <p className="text-stone-400 text-sm uppercase tracking-wider">Volunteers</p>
            </div>
            <div className="text-center stagger-item">
              <p className="display-medium text-terracotta-400 mb-2">
                <span className="counter-value" data-target="4">0</span>
              </p>
              <p className="text-stone-400 text-sm uppercase tracking-wider">Programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mb-16 md:mb-24">
            <p className="label text-terracotta-500 mb-6 fade-up">What We Do</p>
            <h2 className="heading-xl text-stone-900 mb-8 fade-up">
              Four pillars of<br />transformation.
            </h2>
            <p className="body-lg text-stone-600 fade-up">
              From early education to career readiness, our programs address 
              different stages of a young person&#39;s journey.
            </p>
          </div>

          <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 gap-8 stagger-container">
            {/* Program 1: Rural Education */}
            <div className="group relative overflow-hidden stagger-item">
              <div className="aspect-[16/10] relative">
                <Image
                  src="/images/kalem-02.jpg"
                  alt="Rural classroom education"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="label text-terracotta-300 mb-3 block">Program 01</span>
                <h3 className="heading-md text-white mb-3">Rural Education Initiative</h3>
                <p className="text-stone-300 text-sm leading-relaxed max-w-md">
                  We bring quality learning to under-resourced village schools. 
                  Interactive sessions, modern teaching methods, and supplementary 
                  materials that make education engaging.
                </p>
              </div>
            </div>

            {/* Program 2: WhySchool.academy */}
            <div className="group relative overflow-hidden stagger-item">
              <div className="aspect-[16/10] relative">
                <Image
                  src="/images/kalem-09.jpg"
                  alt="WhySchool bootcamp session"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="label text-terracotta-300 mb-3 block">Program 02</span>
                <h3 className="heading-md text-white mb-3">WhySchool.academy</h3>
                <p className="text-stone-300 text-sm leading-relaxed max-w-md mb-4">
                  A 6-day career clarity bootcamp that teaches students to stop 
                  learning passively and start building actively. Real tools, 
                  real projects, real confidence.
                </p>
                <a 
                  href="https://whyschool.academy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-terracotta-300 text-sm hover:text-white transition-colors"
                >
                  Visit WhySchool.academy
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Program 3: Community Empowerment */}
            <div className="group relative overflow-hidden stagger-item">
              <div className="aspect-[16/10] relative">
                <Image
                  src="/images/kalem-11.jpg"
                  alt="Community empowerment session"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="label text-terracotta-300 mb-3 block">Program 03</span>
                <h3 className="heading-md text-white mb-3">Community Empowerment</h3>
                <p className="text-stone-300 text-sm leading-relaxed max-w-md">
                  Beyond students — we work with families and communities. 
                  Parent engagement sessions, community gatherings, and programs 
                  that build collective ownership of education.
                </p>
              </div>
            </div>

            {/* Program 4: Youth Leadership */}
            <div className="group relative overflow-hidden stagger-item">
              <div className="aspect-[16/10] relative">
                <Image
                  src="/images/kalem-10.jpg"
                  alt="Youth leadership program"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="label text-terracotta-300 mb-3 block">Program 04</span>
                <h3 className="heading-md text-white mb-3">Youth Leadership</h3>
                <p className="text-stone-300 text-sm leading-relaxed max-w-md">
                  We mentor college students to become change-makers themselves. 
                  Volunteer training, leadership development, and creating a 
                  pipeline of educators who understand ground realities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery - Horizontal Scroll */}
      <section className="gallery-scroll relative h-screen bg-stone-100">
        <div className="h-full flex items-center">
          <div className="gallery-track flex gap-6 pl-8 md:pl-16">
            <div className="flex-shrink-0 w-[80vw] md:w-[50vw] lg:w-[40vw] h-[70vh] relative">
              <Image src="/images/kalem-01.jpg" alt="Kalem Foundation" fill className="object-cover" />
            </div>
            <div className="flex-shrink-0 w-[60vw] md:w-[40vw] lg:w-[30vw] h-[70vh] relative">
              <Image src="/images/kalem-03.jpg" alt="Kalem Foundation" fill className="object-cover" />
            </div>
            <div className="flex-shrink-0 w-[80vw] md:w-[50vw] lg:w-[45vw] h-[70vh] relative">
              <Image src="/images/kalem-04.jpg" alt="Kalem Foundation" fill className="object-cover" />
            </div>
            <div className="flex-shrink-0 w-[60vw] md:w-[35vw] lg:w-[35vw] h-[70vh] relative">
              <Image src="/images/kalem-06.jpg" alt="Kalem Foundation" fill className="object-cover" />
            </div>
            <div className="flex-shrink-0 w-[80vw] md:w-[50vw] lg:w-[40vw] h-[70vh] relative">
              <Image src="/images/kalem-12.jpg" alt="Kalem Foundation" fill className="object-cover" />
            </div>
            <div className="flex-shrink-0 w-[60vw] md:w-[40vw] lg:w-[35vw] h-[70vh] relative">
              <Image src="/images/kalem-13.jpg" alt="Kalem Foundation" fill className="object-cover" />
            </div>
          </div>
        </div>
        <div className="absolute top-8 left-8 md:left-16 z-10">
          <p className="label text-stone-500 mb-2">Gallery</p>
          <p className="text-sm text-stone-400">Scroll to explore →</p>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding">
        <div className="container-wide">
          <div className="editorial-grid">
            <div className="col-span-12 lg:col-span-4 mb-12 lg:mb-0">
              <p className="label text-terracotta-500 mb-6 fade-up">The Team</p>
              <h2 className="heading-xl text-stone-900 mb-6 fade-up">
                People who<br />believe in change.
              </h2>
              <p className="body-lg text-stone-600 fade-up">
                From NIT Rourkela to BlackRock, from INSEAD to ISRO — our team 
                combines diverse expertise with a shared commitment to education.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 stagger-container">
                {/* Team Member 1 */}
                <div className="stagger-item">
                  <div className="aspect-[3/4] relative mb-4 overflow-hidden">
                    <Image
                      src="/images/kalem-05.jpg"
                      alt="Ritik Prajjwal Sahu"
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <h3 className="font-serif text-lg text-stone-900">Ritik Prajjwal Sahu</h3>
                  <p className="text-sm text-terracotta-500">Founder</p>
                  <p className="text-xs text-stone-400 mt-1">NIT Rourkela</p>
                </div>

                {/* Team Member 2 */}
                <div className="stagger-item">
                  <div className="aspect-[3/4] relative mb-4 overflow-hidden">
                    <Image
                      src="/images/kalem-07.jpg"
                      alt="Shashmit"
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <h3 className="font-serif text-lg text-stone-900">Shashmit</h3>
                  <p className="text-sm text-terracotta-500">CTO</p>
                  <p className="text-xs text-stone-400 mt-1">Technology Lead</p>
                </div>

                {/* Team Member 3 */}
                <div className="stagger-item">
                  <div className="aspect-[3/4] relative mb-4 overflow-hidden">
                    <Image
                      src="/images/kalem-03.jpg"
                      alt="Anwesha Swain"
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <h3 className="font-serif text-lg text-stone-900">Anwesha Swain</h3>
                  <p className="text-sm text-terracotta-500">Marketing</p>
                  <p className="text-xs text-stone-400 mt-1">BlackRock</p>
                </div>

                {/* Team Member 4 */}
                <div className="stagger-item">
                  <div className="aspect-[3/4] relative mb-4 overflow-hidden">
                    <Image
                      src="/images/kalem-01.jpg"
                      alt="Alankrita Yadav"
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <h3 className="font-serif text-lg text-stone-900">Alankrita Yadav</h3>
                  <p className="text-sm text-terracotta-500">Strategy</p>
                  <p className="text-xs text-stone-400 mt-1">INSEAD</p>
                </div>

                {/* Team Member 5 */}
                <div className="stagger-item">
                  <div className="aspect-[3/4] relative mb-4 overflow-hidden">
                    <Image
                      src="/images/kalem-04.jpg"
                      alt="Pritesh Raj"
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <h3 className="font-serif text-lg text-stone-900">Pritesh Raj</h3>
                  <p className="text-sm text-terracotta-500">Research</p>
                  <p className="text-xs text-stone-400 mt-1">DRDO / ISRO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="contact" className="relative py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/kalem-13.jpg"
            alt="Join Kalem Foundation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/85" />
        </div>

        <div className="container-wide relative z-10">
          <div className="editorial-grid">
            <div className="col-span-12 lg:col-span-6 mb-12 lg:mb-0">
              <p className="label text-terracotta-300 mb-6 fade-up">Get Involved</p>
              <h2 className="display-medium text-white mb-8 fade-up">
                Change happens<br />together.
              </h2>
              <p className="body-lg text-stone-300 fade-up">
                Whether you want to volunteer, partner with us, or support our 
                mission financially — every contribution creates ripples of change.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-5 lg:col-start-8 stagger-container">
              <div className="space-y-4">
                <a href="#" className="block p-6 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors stagger-item group">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-xl text-white mb-1">Volunteer</h3>
                      <p className="text-sm text-stone-400">Join our team on the ground</p>
                    </div>
                    <svg className="w-5 h-5 text-terracotta-400 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </a>
                <a href="#" className="block p-6 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors stagger-item group">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-xl text-white mb-1">Partner</h3>
                      <p className="text-sm text-stone-400">Collaborate as an institution</p>
                    </div>
                    <svg className="w-5 h-5 text-terracotta-400 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </a>
                <a href="#" className="block p-6 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors stagger-item group">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-xl text-white mb-1">Donate</h3>
                      <p className="text-sm text-stone-400">Support our programs directly</p>
                    </div>
                    <svg className="w-5 h-5 text-terracotta-400 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 md:py-24 bg-stone-900 text-stone-400">
        <div className="container-wide">
          <div className="editorial-grid mb-16">
            <div className="col-span-12 lg:col-span-4 mb-12 lg:mb-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-terracotta-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-serif text-xl">K</span>
                </div>
                <span className="font-serif text-2xl text-white">Kalem</span>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Kalinga Empowerment Foundation<br />
                Empowering rural Odisha through education,<br />
                one community at a time.
              </p>
              <p className="text-xs text-stone-500">
                Registered Non-Profit Organization
              </p>
            </div>

            <div className="col-span-6 md:col-span-3 lg:col-span-2 lg:col-start-7">
              <h4 className="text-white font-medium mb-4">Programs</h4>
              <div className="space-y-2 text-sm">
                <a href="#programs" className="block hover:text-white transition-colors">Rural Education</a>
                <a href="https://whyschool.academy" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">WhySchool.academy</a>
                <a href="#programs" className="block hover:text-white transition-colors">Community Work</a>
                <a href="#programs" className="block hover:text-white transition-colors">Youth Leadership</a>
              </div>
            </div>

            <div className="col-span-6 md:col-span-3 lg:col-span-2">
              <h4 className="text-white font-medium mb-4">About</h4>
              <div className="space-y-2 text-sm">
                <a href="#about" className="block hover:text-white transition-colors">Our Story</a>
                <a href="#team" className="block hover:text-white transition-colors">Team</a>
                <a href="#impact" className="block hover:text-white transition-colors">Impact</a>
                <a href="#" className="block hover:text-white transition-colors">Annual Report</a>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-2">
              <h4 className="text-white font-medium mb-4">Connect</h4>
              <div className="space-y-2 text-sm mb-6">
                <a href="mailto:hello@kalemfoundation.org" className="block hover:text-white transition-colors">hello@kalemfoundation.org</a>
                <p>Bhubaneswar, Odisha, India</p>
              </div>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 border border-stone-700 rounded-full flex items-center justify-center hover:border-terracotta-500 hover:text-terracotta-500 transition-colors" aria-label="Instagram">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 border border-stone-700 rounded-full flex items-center justify-center hover:border-terracotta-500 hover:text-terracotta-500 transition-colors" aria-label="LinkedIn">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 border border-stone-700 rounded-full flex items-center justify-center hover:border-terracotta-500 hover:text-terracotta-500 transition-colors" aria-label="Twitter">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="h-px bg-stone-800 mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs">
              © 2024 Kalinga Empowerment Foundation. All rights reserved.
            </p>
            <p className="text-xs text-stone-500">
              Made with purpose in Odisha, India
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
