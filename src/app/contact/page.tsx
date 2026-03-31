"use client";

import { TopNavBar } from '@/components/feature/TopNavBar';
import { Footer } from '@/components/feature/Footer';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <>
      <TopNavBar />
      <main className="pt-20 bg-background text-on-background font-body selection:bg-primary-container selection:text-on-primary-container">
        {/* Hero Section */}
        <section className="px-6 lg:px-8 py-24 md:py-32 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase mb-6">
                Contact Architecture
              </span>
              <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-8 leading-[0.95]">
                Get in <br />Touch
              </h1>
              <p className="text-xl text-on-surface/70 font-light max-w-lg leading-relaxed">
                We are ready to collaborate on your next architectural digital shift. Reach out to our systems engineering team to start building the future together.
              </p>
              <div className="mt-12 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-60">Email Inquiry</p>
                    <p className="text-lg font-medium text-on-surface">hello@optimotech.io</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-60">Sales Department</p>
                    <p className="text-lg font-medium text-on-surface">+1 (888) OPTIMO-TECH</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden bg-surface-container shadow-2xl">
                <Image 
                  alt="Modern Office" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  src="/images/contact-hero.webp"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-surface-container-low py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4">
                <h2 className="text-4xl font-extrabold tracking-tight text-on-surface mb-6">Structural Inquiry</h2>
                <p className="text-on-surface/70 leading-relaxed">
                  Complete the architectural brief below. Our technical advisors respond to all qualified inquiries within 24 operational hours.
                </p>
              </div>
              <div className="lg:col-span-8">
                <div className="bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-[0_20px_40px_rgba(25,28,30,0.04)]">
                  <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface/40 ml-4">Full Name</label>
                        <input className="w-full bg-surface-container-high border-none rounded-full px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-on-surface/30" placeholder="John Doe" type="text" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface/40 ml-4">Corporate Email</label>
                        <input className="w-full bg-surface-container-high border-none rounded-full px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-on-surface/30" placeholder="j.doe@company.com" type="email" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-on-surface/40 ml-4">Company Name</label>
                      <input className="w-full bg-surface-container-high border-none rounded-full px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-on-surface/30" placeholder="OptimoTech Systems" type="text" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-on-surface/40 ml-4">Message Architecture</label>
                      <textarea className="w-full bg-surface-container-high border-none rounded-3xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-on-surface/30" placeholder="Describe your project requirements..." rows={5}></textarea>
                    </div>
                    <div className="pt-4">
                      <Button variant="primary" className="w-full md:w-auto px-12 py-4 rounded-full font-bold tracking-tight shadow-xl shadow-primary/20">
                        Submit Architecture
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations Section */}
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold tracking-tight text-on-surface mb-16 text-center">Global Nodes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* NY HQ */}
              <div className="group">
                <div className="aspect-video rounded-xl overflow-hidden mb-8 bg-surface-container relative">
                  <Image 
                    alt="New York City" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                    src="/images/office-ny.webp"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-2xl font-bold text-white">Global Headquarters</h3>
                    <p className="text-white/70">New York, USA</p>
                  </div>
                </div>
                <div className="px-4">
                  <p className="text-on-surface/60 leading-relaxed mb-4">
                    5th Avenue Tech Plaza, Suite 400<br />
                    New York, NY 10001
                  </p>
                  <a className="text-primary font-bold text-sm uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
                    View Map <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>
              {/* Addis Ababa Hub --> */}
              <div className="group">
                <div className="aspect-video rounded-xl overflow-hidden mb-8 bg-surface-container relative">
                  <Image 
                    alt="Addis Ababa" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                    src="/images/office-addis.webp"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-2xl font-bold text-white">Regional Hub</h3>
                    <p className="text-white/70">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
                <div className="px-4">
                  <p className="text-on-surface/60 leading-relaxed mb-4">
                    Bole Tele Plaza, East Wing<br />
                    Addis Ababa, Ethiopia
                  </p>
                  <a className="text-primary font-bold text-sm uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
                    View Map <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Direct Contact Info (Bento Style) --> */}
        <section className="pb-24 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-low p-8 rounded-xl hover:bg-surface-container-high transition-all">
              <span className="material-symbols-outlined text-primary text-3xl mb-6">support_agent</span>
              <h4 className="text-xl font-bold mb-2 text-on-surface">Technical Support</h4>
              <p className="text-on-surface/60 text-sm mb-6">24/7 dedicated engineering support for active systems.</p>
              <p className="text-primary font-medium">support@optimotech.io</p>
            </div>
            <div className="bg-surface-container-low p-8 rounded-xl hover:bg-surface-container-high transition-all">
              <span className="material-symbols-outlined text-primary text-3xl mb-6">payments</span>
              <h4 className="text-xl font-bold mb-2 text-on-surface">Billing & Finance</h4>
              <p className="text-on-surface/60 text-sm mb-6">Inquiries regarding procurement and invoicing.</p>
              <p className="text-primary font-medium">billing@optimotech.io</p>
            </div>
            <div className="bg-surface-container-low p-8 rounded-xl hover:bg-surface-container-high transition-all">
              <span className="material-symbols-outlined text-primary text-3xl mb-6">groups</span>
              <h4 className="text-xl font-bold mb-2 text-on-surface">Media Relations</h4>
              <p className="text-on-surface/60 text-sm mb-6">Press kits and architectural feature requests.</p>
              <p className="text-primary font-medium">press@optimotech.io</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
