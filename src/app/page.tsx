import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-stone-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/95 backdrop-blur-md border-b border-stone-200/50">
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <span className="font-serif text-xl tracking-tight">WhySchool</span>
              <span className="text-[10px] text-stone-400 hidden sm:inline">by Kalem Foundation</span>
            </a>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#program" className="text-sm text-stone-500 hover:text-stone-900 transition-colors">Program</a>
              <a href="#story" className="text-sm text-stone-500 hover:text-stone-900 transition-colors">Story</a>
              <a href="#team" className="text-sm text-stone-500 hover:text-stone-900 transition-colors">Team</a>
              <a href="#impact" className="text-sm text-stone-500 hover:text-stone-900 transition-colors">Impact</a>
              <a href="#contact" className="btn-primary text-xs">Bring to Your School</a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-stone-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Editorial Style */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 lg:py-0">
            {/* Left: Copy */}
            <div className="animate-fade-in-up">
              <p className="label text-terracotta-500 mb-6">
                The 6-Day Career Clarity Bootcamp
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.05] text-stone-900 mb-8">
                Stop learning.<br />
                <span className="text-stone-400">Start building.</span>
              </h1>
              <p className="text-xl md:text-2xl text-stone-500 max-w-lg mb-10 leading-relaxed font-light">
                Six days to turn your curiosity into career clarity. Bridge the gap between 
                classroom theory and real-world confidence.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#program" className="btn bg-stone-900 text-stone-50 hover:bg-stone-800">
                  See the Program
                </a>
                <a href="#contact" className="btn border border-stone-300 text-stone-700 hover:border-stone-900">
                  Book a Demo
                </a>
              </div>
              
              {/* Trust Signal */}
              <div className="mt-12 pt-8 border-t border-stone-200">
                <p className="text-xs text-stone-400 uppercase tracking-wider mb-3">Team from</p>
                <div className="flex flex-wrap gap-6 text-sm text-stone-600">
                  <span className="font-medium">NIT Rourkela</span>
                  <span className="font-medium">BlackRock</span>
                  <span className="font-medium">INSEAD</span>
                  <span className="font-medium">DRDO/ISRO</span>
                </div>
              </div>
            </div>
            
            {/* Right: Image */}
            <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
              <Image
                src="/images/kalem-08.jpg"
                alt="Students learning at WhySchool"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 md:py-32 bg-stone-100">
        <div className="container-wide">
          <div className="max-w-4xl">
            <p className="label text-stone-500 mb-6">The Problem</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-800 mb-8 leading-tight">
              The Endless Learning Loop
            </h2>
            <p className="text-xl md:text-2xl text-stone-500 leading-relaxed mb-12 font-light">
              You&apos;ve memorized formulas. Aced exams. But when someone asks 
              &quot;What will you do after graduation?&quot; — silence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {/* Problem Card 1 */}
            <div className="p-8 bg-white border-l-2 border-terracotta-400">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="font-serif text-xl text-stone-800 mb-3">Missing Hands-On</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                Students learn theory but never connect it to real-world application.
              </p>
            </div>
            
            {/* Problem Card 2 */}
            <div className="p-8 bg-white border-l-2 border-terracotta-400">
              <div className="text-4xl mb-4">👀</div>
              <h3 className="font-serif text-xl text-stone-800 mb-3">Lost Curiosity</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                Interests explored for fun, never realizing they could shape careers.
              </p>
            </div>
            
            {/* Problem Card 3 */}
            <div className="p-8 bg-white border-l-2 border-terracotta-400">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-serif text-xl text-stone-800 mb-3">Broken Flow</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                Graduates struggle with career direction. No bridge between learning and doing.
              </p>
            </div>
            
            {/* Problem Card 4 */}
            <div className="p-8 bg-white border-l-2 border-terracotta-400">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="font-serif text-xl text-stone-800 mb-3">Learn, Forget, Repeat</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                Consuming content without the confidence to apply knowledge meaningfully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Program Section */}
      <section id="program" className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left: Program Description */}
            <div className="lg:sticky lg:top-32">
              <p className="label text-terracotta-500 mb-6">The Program</p>
              <h2 className="heading-large text-stone-800 mb-8">
                Six days.<br />Real tools.<br />Real clarity.
              </h2>
              <p className="body-large mb-8">
                WhySchool.academy isn&apos;t another online course. It&apos;s a hands-on bootcamp 
                where students build real products, learn industry tools, and present to real audiences.
              </p>
              <p className="body-large mb-10">
                We come to your school. Students learn with friends. Not alone behind a screen.
              </p>
              <a href="#contact" className="btn-primary">
                Bring WhySchool to Your Campus
              </a>
            </div>
            
            {/* Right: 6-Day Curriculum */}
            <div className="space-y-6">
              {/* Day 1 */}
              <div className="group p-6 md:p-8 bg-white border border-stone-200 hover:border-terracotta-300 transition-colors">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-stone-100 flex items-center justify-center">
                    <span className="font-serif text-2xl text-stone-400">01</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-stone-800 mb-2">Discover the WHY</h3>
                    <p className="text-sm text-stone-500 mb-3">Problem Discovery & Opportunity Mapping</p>
                    <p className="text-sm text-stone-400">Use ChatGPT & Gemini for idea validation, market research</p>
                  </div>
                </div>
              </div>
              
              {/* Day 2 */}
              <div className="group p-6 md:p-8 bg-white border border-stone-200 hover:border-terracotta-300 transition-colors">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-stone-100 flex items-center justify-center">
                    <span className="font-serif text-2xl text-stone-400">02</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-stone-800 mb-2">Imagine & Design</h3>
                    <p className="text-sm text-stone-500 mb-3">Solution Design & MVP Planning</p>
                    <p className="text-sm text-stone-400">Build prototypes with Figma AI, Framer AI, Uizard</p>
                  </div>
                </div>
              </div>
              
              {/* Day 3 */}
              <div className="group p-6 md:p-8 bg-white border border-stone-200 hover:border-terracotta-300 transition-colors">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-stone-100 flex items-center justify-center">
                    <span className="font-serif text-2xl text-stone-400">03</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-stone-800 mb-2">Build & Appify</h3>
                    <p className="text-sm text-stone-500 mb-3">Product Development & MVP Execution</p>
                    <p className="text-sm text-stone-400">Create working MVPs with real interactivity</p>
                  </div>
                </div>
              </div>
              
              {/* Day 4 */}
              <div className="group p-6 md:p-8 bg-white border border-stone-200 hover:border-terracotta-300 transition-colors">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-stone-100 flex items-center justify-center">
                    <span className="font-serif text-2xl text-stone-400">04</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-stone-800 mb-2">Work Smarter with AI</h3>
                    <p className="text-sm text-stone-500 mb-3">Productivity & Prompt Engineering</p>
                    <p className="text-sm text-stone-400">Build your personal Prompt Library for creative tasks</p>
                  </div>
                </div>
              </div>
              
              {/* Day 5 */}
              <div className="group p-6 md:p-8 bg-white border border-stone-200 hover:border-terracotta-300 transition-colors">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-stone-100 flex items-center justify-center">
                    <span className="font-serif text-2xl text-stone-400">05</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-stone-800 mb-2">Brand It & Launch</h3>
                    <p className="text-sm text-stone-500 mb-3">Business Model, Branding & Go-To-Market</p>
                    <p className="text-sm text-stone-400">Create brand assets with Canva Magic Studio, Looka, Notion AI</p>
                  </div>
                </div>
              </div>
              
              {/* Day 6 */}
              <div className="group p-6 md:p-8 bg-terracotta-50 border border-terracotta-200">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-terracotta-100 flex items-center justify-center">
                    <span className="font-serif text-2xl text-terracotta-600">06</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-stone-800 mb-2">Demo Day: From WHY to WOW</h3>
                    <p className="text-sm text-terracotta-700 mb-3">Pitching, Storytelling & Presenting</p>
                    <p className="text-sm text-stone-500">Deliver a compelling pitch and showcase your innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-wide">
        <div className="divider" />
      </div>

      {/* Founder Story Section */}
      <section id="story" className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/kalem-05.jpg"
                alt="Ritik Prajjwal Sahu, Founder of WhySchool"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <p className="label text-stone-500 mb-6">The Story</p>
              <h2 className="heading-large text-stone-800 mb-8">
                &quot;I was that confused student.&quot;
              </h2>
              <div className="space-y-6 body-large">
                <p>
                  At NIT Rourkela, Ritik Prajjwal Sahu had the credentials. The grades. 
                  The prestigious engineering seat. But like millions of Indian students, 
                  he had one haunting question: <em>&quot;What will I actually DO with this?&quot;</em>
                </p>
                <p>
                  The realization hit hard: years of learning, but no clarity on why. 
                  The education system taught him <em>what</em> and <em>how</em> — 
                  but never the crucial <em>why</em>.
                </p>
                <p>
                  So he built WhySchool.academy. Not another online course. 
                  A hands-on program that connects curiosity to careers, 
                  classrooms to the real world.
                </p>
                <p className="text-stone-800 font-medium">
                  Now, through the Kalinga Empowerment Foundation, he&apos;s bringing 
                  this clarity to schools across Odisha — one bootcamp at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 md:py-32 bg-stone-100">
        <div className="container-wide">
          <div className="max-w-2xl mb-16">
            <p className="label text-stone-500 mb-6">The Team</p>
            <h2 className="heading-large text-stone-800 mb-6">
              Built by people who&apos;ve been there
            </h2>
            <p className="body-large">
              From NIT to BlackRock, from INSEAD to ISRO. We didn&apos;t just study 
              the problem — we lived it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Team Member 1 - Ritik */}
            <div className="group">
              <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-stone-200">
                <Image
                  src="/images/kalem-05.jpg"
                  alt="Ritik Prajjwal Sahu"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-lg text-stone-800">Ritik Prajjwal Sahu</h3>
              <p className="text-sm text-terracotta-600 mb-1">Founder</p>
              <p className="text-xs text-stone-400">NIT Rourkela</p>
            </div>

            {/* Team Member 2 - Shashmit */}
            <div className="group">
              <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-stone-200">
                <Image
                  src="/images/kalem-07.jpg"
                  alt="Shashmit"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-lg text-stone-800">Shashmit</h3>
              <p className="text-sm text-terracotta-600 mb-1">CTO</p>
              <p className="text-xs text-stone-400">The Tech Guy</p>
            </div>

            {/* Team Member 3 - Anwesha */}
            <div className="group">
              <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-stone-200">
                <Image
                  src="/images/kalem-03.jpg"
                  alt="Anwesha Swain"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-lg text-stone-800">Anwesha Swain</h3>
              <p className="text-sm text-terracotta-600 mb-1">Marketing</p>
              <p className="text-xs text-stone-400">BlackRock</p>
            </div>

            {/* Team Member 4 - Alankrita */}
            <div className="group">
              <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-stone-200">
                <Image
                  src="/images/kalem-01.jpg"
                  alt="Alankrita Yadav"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-lg text-stone-800">Alankrita Yadav</h3>
              <p className="text-sm text-terracotta-600 mb-1">Strategy</p>
              <p className="text-xs text-stone-400">INSEAD</p>
            </div>

            {/* Team Member 5 - Pritesh */}
            <div className="group">
              <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-stone-200">
                <Image
                  src="/images/kalem-04.jpg"
                  alt="Pritesh Raj"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-lg text-stone-800">Pritesh Raj</h3>
              <p className="text-sm text-terracotta-600 mb-1">Research</p>
              <p className="text-xs text-stone-400">DRDO / ISRO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Gallery */}
      <section id="impact" className="section-padding">
        <div className="container-wide">
          <div className="max-w-2xl mb-16">
            <p className="label text-stone-500 mb-6">Impact</p>
            <h2 className="heading-large text-stone-800">
              From &quot;What will I do?&quot;<br />to &quot;Watch what I built.&quot;
            </h2>
          </div>

          {/* Masonry Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            <div className="relative overflow-hidden aspect-[4/5] md:row-span-2">
              <Image
                src="/images/kalem-02.jpg"
                alt="Students presenting their projects"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative overflow-hidden aspect-square">
              <Image
                src="/images/kalem-09.jpg"
                alt="Workshop session"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative overflow-hidden aspect-[4/3]">
              <Image
                src="/images/kalem-06.jpg"
                alt="Team collaboration"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative overflow-hidden aspect-[3/4]">
              <Image
                src="/images/kalem-10.jpg"
                alt="Demo day presentation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative overflow-hidden aspect-square">
              <Image
                src="/images/kalem-11.jpg"
                alt="Learning in action"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative overflow-hidden aspect-[4/3]">
              <Image
                src="/images/kalem-12.jpg"
                alt="Community building"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-stone-900 text-stone-50">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            <div>
              <h3 className="font-serif text-2xl mb-4">On-Site, Not Online</h3>
              <p className="text-stone-400 leading-relaxed">
                We come to your school. Students learn with their friends, 
                not alone behind a screen. Real presence, real connection.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl mb-4">Peer-to-Peer Learning</h3>
              <p className="text-stone-400 leading-relaxed">
                Learning happens best when you&apos;re building alongside friends. 
                Our bootcamp creates collaborative teams, not isolated learners.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl mb-4">Real Tools, Real Skills</h3>
              <p className="text-stone-400 leading-relaxed">
                ChatGPT, Figma, Framer, Canva — the same tools used in startups 
                and corporations. No outdated syllabi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-32 lg:py-40 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/kalem-13.jpg"
            alt="Join WhySchool"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/80" />
        </div>

        <div className="container-narrow relative z-10 text-center">
          <p className="label text-terracotta-300 mb-6">For Schools & Colleges</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-50 mb-6 leading-tight">
            Bring WhySchool<br />to your campus
          </h2>
          <p className="text-xl text-stone-300 mb-10 max-w-xl mx-auto">
            Six days. Real transformation. Let&apos;s give your students 
            the clarity they deserve.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:ritik@whyschool.academy" className="btn bg-stone-50 text-stone-900 hover:bg-white">
              Get in Touch
            </a>
            <a href="https://whyschool.academy" target="_blank" rel="noopener noreferrer" className="btn border border-stone-50/30 text-stone-50 hover:bg-stone-50/10">
              Visit WhySchool.academy
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-stone-100 border-t border-stone-200">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-serif text-xl">WhySchool.academy</span>
              </div>
              <p className="text-sm text-stone-500 max-w-sm mb-4">
                A program by Kalinga Empowerment Foundation (Kalem), 
                bringing real-world clarity to students across Odisha.
              </p>
              <p className="text-xs text-stone-400">
                Connecting curiosity → clarity → confidence
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-medium text-stone-800 mb-4">Program</h4>
              <div className="space-y-2">
                <a href="#program" className="block text-sm text-stone-500 hover:text-stone-800 transition-colors">6-Day Curriculum</a>
                <a href="#story" className="block text-sm text-stone-500 hover:text-stone-800 transition-colors">Our Story</a>
                <a href="#team" className="block text-sm text-stone-500 hover:text-stone-800 transition-colors">Meet the Team</a>
                <a href="#impact" className="block text-sm text-stone-500 hover:text-stone-800 transition-colors">Impact Gallery</a>
              </div>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="font-medium text-stone-800 mb-4">Get in Touch</h4>
              <div className="space-y-2">
                <a href="mailto:ritik@whyschool.academy" className="block text-sm text-stone-500 hover:text-stone-800 transition-colors">ritik@whyschool.academy</a>
                <a href="https://whyschool.academy" target="_blank" rel="noopener noreferrer" className="block text-sm text-stone-500 hover:text-stone-800 transition-colors">whyschool.academy</a>
              </div>
              {/* Social */}
              <div className="flex items-center gap-4 mt-6">
                <a href="#" className="text-stone-400 hover:text-stone-700 transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-stone-400 hover:text-stone-700 transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-stone-400">
              © 2024 Kalinga Empowerment Foundation. All rights reserved.
            </p>
            <p className="text-xs text-stone-400">
              Made with purpose in Odisha, India
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
