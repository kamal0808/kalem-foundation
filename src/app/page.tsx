import Image from "next/image";

// Metadata is in layout.tsx for App Router

export default function Home() {
  return (
    <main className="bg-stone-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200/50">
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-stone-800 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8 12c0-2 2-4 4-4s4 2 4 4-2 4-4 4" />
                  <path d="M12 8v1M12 15v1" />
                </svg>
              </div>
              <span className="font-serif text-lg">Kalem</span>
            </a>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm text-stone-600 hover:text-stone-900 transition-colors">About</a>
              <a href="#work" className="text-sm text-stone-600 hover:text-stone-900 transition-colors">Our Work</a>
              <a href="#gallery" className="text-sm text-stone-600 hover:text-stone-900 transition-colors">Gallery</a>
              <a href="#contact" className="btn-primary">Get Involved</a>
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end pb-20 pt-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/kalem-08.jpg"
            alt="Kalem Foundation community gathering"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/30 to-transparent" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <p className="label text-stone-300 mb-6">
              Kalinga Empowerment Foundation
            </p>
            <h1 className="heading-display text-stone-50 mb-6">
              Empowering youth, <br />
              building futures
            </h1>
            <p className="text-xl text-stone-200 max-w-xl mb-10 leading-relaxed">
              Working with communities in Odisha to create lasting change through education, 
              skill development, and youth leadership.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#about" className="btn bg-stone-50 text-stone-900 hover:bg-white">
                Our Story
              </a>
              <a href="#contact" className="btn border border-stone-50/30 text-stone-50 hover:bg-stone-50/10">
                Support Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/kalem-05.jpg"
                alt="Ritik, Founder of Kalem Foundation"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <p className="label mb-6">About the Foundation</p>
              <h2 className="heading-large text-stone-800 mb-8">
                From one person&apos;s vision to a movement
              </h2>
              <div className="space-y-6 body-large">
                <p>
                  The Kalem Foundation was born from a simple belief: every young person 
                  deserves the opportunity to reach their potential, regardless of where they come from.
                </p>
                <p>
                  Founded by Ritik in Odisha, we work directly with rural schools and 
                  communities to provide educational support, mentorship, and the tools 
                  young people need to build better futures.
                </p>
                <p>
                  Our approach is grassroots and personal. We don&apos;t just provide resources—we 
                  build relationships, understand local needs, and create programs that 
                  truly serve the communities we work with.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-wide">
        <div className="divider" />
      </div>

      {/* What We Do */}
      <section id="work" className="section-padding">
        <div className="container-wide">
          <div className="max-w-2xl mb-16 lg:mb-24">
            <p className="label mb-6">What We Do</p>
            <h2 className="heading-large text-stone-800 mb-6">
              Building foundations for change
            </h2>
            <p className="body-large">
              Our programs focus on three interconnected areas that create lasting impact 
              in the communities we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Program 1 */}
            <div className="group">
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <Image
                  src="/images/kalem-01.jpg"
                  alt="Educational programs"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="heading-medium text-stone-800 mb-3">Education</h3>
              <p className="body-regular">
                Supporting rural schools with learning materials, infrastructure, 
                and teacher training to improve educational outcomes.
              </p>
            </div>

            {/* Program 2 */}
            <div className="group">
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <Image
                  src="/images/kalem-07.jpg"
                  alt="Youth empowerment"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="heading-medium text-stone-800 mb-3">Youth Empowerment</h3>
              <p className="body-regular">
                Leadership workshops, skill development programs, and mentorship 
                to help young people become agents of change.
              </p>
            </div>

            {/* Program 3 */}
            <div className="group">
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <Image
                  src="/images/kalem-03.jpg"
                  alt="Community building"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="heading-medium text-stone-800 mb-3">Community Building</h3>
              <p className="body-regular">
                Creating spaces for connection, dialogue, and collective action 
                that strengthen the fabric of rural communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-stone-100">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="font-serif text-4xl md:text-5xl text-stone-800 mb-2">500+</div>
              <div className="text-sm text-stone-500">Students Supported</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl md:text-5xl text-stone-800 mb-2">12</div>
              <div className="text-sm text-stone-500">Schools Partnered</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl md:text-5xl text-stone-800 mb-2">50+</div>
              <div className="text-sm text-stone-500">Workshops Held</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl md:text-5xl text-stone-800 mb-2">5</div>
              <div className="text-sm text-stone-500">Years of Impact</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-padding">
        <div className="container-wide">
          <div className="max-w-2xl mb-16">
            <p className="label mb-6">Our Work in Action</p>
            <h2 className="heading-large text-stone-800">
              Moments that matter
            </h2>
          </div>

          {/* Masonry-style Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            <div className="relative overflow-hidden aspect-[4/5] md:row-span-2">
              <Image
                src="/images/kalem-02.jpg"
                alt="Kalem Foundation work"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative overflow-hidden aspect-square">
              <Image
                src="/images/kalem-04.jpg"
                alt="Kalem Foundation work"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative overflow-hidden aspect-[4/3]">
              <Image
                src="/images/kalem-06.jpg"
                alt="Kalem Foundation work"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative overflow-hidden aspect-[3/4]">
              <Image
                src="/images/kalem-09.jpg"
                alt="Kalem Foundation work"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative overflow-hidden aspect-square">
              <Image
                src="/images/kalem-10.jpg"
                alt="Kalem Foundation work"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative overflow-hidden aspect-[4/3]">
              <Image
                src="/images/kalem-11.jpg"
                alt="Kalem Foundation work"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-32 lg:py-40 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/kalem-12.jpg"
            alt="Join Kalem Foundation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/75" />
        </div>

        <div className="container-narrow relative z-10 text-center">
          <h2 className="heading-large text-stone-50 mb-6">
            Be part of the change
          </h2>
          <p className="text-xl text-stone-300 mb-10 max-w-xl mx-auto">
            Whether through volunteering, donations, or spreading the word—every 
            contribution helps us reach more young people.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:contact@kalemfoundation.org" className="btn bg-stone-50 text-stone-900 hover:bg-white">
              Contact Us
            </a>
            <a href="#" className="btn border border-stone-50/30 text-stone-50 hover:bg-stone-50/10">
              Donate
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-stone-100 border-t border-stone-200">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-stone-400 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8 12c0-2 2-4 4-4s4 2 4 4-2 4-4 4" />
                </svg>
              </div>
              <span className="font-serif text-lg text-stone-700">Kalem Foundation</span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-sm text-stone-500">
              <a href="#about" className="hover:text-stone-800 transition-colors">About</a>
              <a href="#work" className="hover:text-stone-800 transition-colors">Our Work</a>
              <a href="#contact" className="hover:text-stone-800 transition-colors">Contact</a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-stone-400 hover:text-stone-700 transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-stone-400 hover:text-stone-700 transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-stone-200 text-center text-sm text-stone-400">
            © 2024 Kalem Foundation. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
