"use client";

import { TopNavBar } from '@/components/feature/TopNavBar';
import { Footer } from '@/components/feature/Footer';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import Image from 'next/image';
import Link from 'next/link';

export default function SolutionsPage() {
  return (
    <>
      <TopNavBar />
      <main className="bg-surface text-on-surface font-body selection:bg-primary/20">
        {/* Hero Section */}
        <header className="relative pt-44 pb-32 px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <label className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6 block">The Digital Architect</label>
              <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight leading-[0.9] text-on-surface mb-8">
                Engineering the <br />Solutions of <span className="text-primary">Tomorrow</span>
              </h1>
              <p className="text-xl md:text-2xl text-on-surface/70 max-w-2xl leading-relaxed font-light">
                We construct resilient digital infrastructure that moves with the speed of thought. Modern enterprises require more than just tools; they require architectural precision.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-end">
              <div className="w-full aspect-square rounded-full bg-surface-container-low p-4">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image 
                    className="w-full h-full object-cover" 
                    alt="Modern architectural glass building" 
                    src="/images/solutions-hero.webp"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Solutions Grid */}
        <section className="py-24 space-y-32">
          {/* Bento Grid Section */}
          <div className="px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* OptimoConnect (Primary Focus) */}
              <div className="md:col-span-2 bg-surface-container-lowest rounded-lg p-10 flex flex-col justify-between min-h-[500px] shadow-[0_20px_40px_rgba(25,28,30,0.06)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity">
                  <Image 
                    className="w-full h-full object-cover" 
                    alt="Abstract neural network visualization" 
                    src="/images/optimoconnect-bg.webp"
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                  />
                </div>
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-primary text-5xl mb-6">hub</span>
                  <h3 className="text-4xl font-bold mb-4">OptimoConnect</h3>
                  <p className="text-on-surface/60 text-lg max-w-md leading-relaxed">
                    A high-performance neural network designed for modern enterprises. Seamlessly bridge the gap between legacy silos and future-ready scaling.
                  </p>
                </div>
                <div className="relative z-10 flex items-end justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl font-black text-primary">99.99%</span>
                      <span className="text-xs font-bold uppercase tracking-widest opacity-60">Uptime Metric</span>
                    </div>
                    <div className="w-48 h-1 bg-surface-container-high">
                      <div className="w-full h-full bg-primary rounded-full"></div>
                    </div>
                  </div>
                  <a className="flex items-center gap-2 font-bold text-primary group/link" href="#">
                    Learn More 
                    <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>

              {/* OptimoTransit */}
              <div className="bg-surface-container-low rounded-lg p-10 flex flex-col justify-between shadow-[0_20px_40px_rgba(25,28,30,0.06)]">
                <div>
                  <span className="material-symbols-outlined text-primary text-4xl mb-6">route</span>
                  <h3 className="text-2xl font-bold mb-4">OptimoTransit</h3>
                  <p className="text-on-surface/60 leading-relaxed">
                    AI-optimized routing engine specifically engineered for metropolitan logistics and complex urban flow.
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex justify-between text-sm font-bold uppercase tracking-wider opacity-60">
                    <span>Efficiency Gain</span>
                    <span>+34%</span>
                  </div>
                  <Link href="/contact">
                    <Button variant="primary" className="w-full justify-center py-4 rounded-full font-bold text-xs uppercase tracking-widest block">
                      Explore Transit
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Maguya */}
              <div className="bg-on-surface text-surface rounded-lg p-10 flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-primary-fixed-dim text-4xl mb-6">account_balance_wallet</span>
                  <h3 className="text-2xl font-bold mb-4">Maguya</h3>
                  <p className="text-surface/80 leading-relaxed">
                    Decentralized asset management for the next generation of digital value. Secure, immutable, and architectural.
                  </p>
                </div>
                <div className="mt-8 border-t border-surface/20 pt-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xl font-bold">128-bit</div>
                      <div className="text-[10px] uppercase tracking-widest opacity-50">Encryption</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold">Global</div>
                      <div className="text-[10px] uppercase tracking-widest opacity-50">Availability</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Warka */}
              <div className="bg-surface-container-lowest rounded-lg p-10 flex flex-col justify-between shadow-[0_20px_40px_rgba(25,28,30,0.06)] border border-outline-variant/10">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="material-symbols-outlined text-primary text-4xl">translate</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold tracking-tighter uppercase">New Era</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Warka</h3>
                  <p className="text-on-surface/60 leading-relaxed">
                    A multilingual digital learning ecosystem that adapts to the user's cognitive rhythm. Educational architecture at scale.
                  </p>
                </div>
                <div className="mt-8">
                  <div className="flex -space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-full border-4 border-surface-container-lowest overflow-hidden bg-slate-200 relative">
                      <Image className="w-full h-full object-cover" alt="User 1" src="/images/warka-avatar-1.webp" fill sizes="40px" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-4 border-surface-container-lowest overflow-hidden bg-slate-200 relative">
                      <Image className="w-full h-full object-cover" alt="User 2" src="/images/warka-avatar-2.webp" fill sizes="40px" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-4 border-surface-container-lowest flex items-center justify-center bg-primary text-[10px] text-white font-bold">
                      +2M
                    </div>
                  </div>
                  <a className="text-sm font-bold text-primary hover:underline" href="#">View Case Study</a>
                </div>
              </div>

              {/* FinTech Suite */}
              <div className="bg-primary text-white rounded-lg p-10 flex flex-col justify-between shadow-xl relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-white text-4xl mb-6">payments</span>
                  <h3 className="text-2xl font-bold mb-4">FinTech Suite</h3>
                  <p className="text-white/80 leading-relaxed">
                    High-velocity digital financial services including cross-border settlements and institutional-grade liquidity pools.
                  </p>
                </div>
                <div className="relative z-10 mt-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Real-time processing active</span>
                  </div>
                  <Link href="/contact">
                    <Button variant="white" className="w-full justify-center py-4 rounded-full font-bold text-xs uppercase tracking-widest">
                      Request Demo
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specs / At a Glance */}
          <section className="bg-surface-container-low py-32">
            <div className="px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <label className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">System Metrics</label>
                <h2 className="text-5xl font-extrabold tracking-tight">Precision in Numbers</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div className="space-y-2">
                  <div className="text-6xl font-black text-on-surface tracking-tighter">0.4ms</div>
                  <div className="text-xs font-bold uppercase tracking-widest opacity-60">Avg. Latency</div>
                </div>
                <div className="space-y-2">
                  <div className="text-6xl font-black text-on-surface tracking-tighter">92%</div>
                  <div className="text-xs font-bold uppercase tracking-widest opacity-60">Cost Reduction</div>
                </div>
                <div className="space-y-2">
                  <div className="text-6xl font-black text-on-surface tracking-tighter">Unlimited</div>
                  <div className="text-xs font-bold uppercase tracking-widest opacity-60">Scalability</div>
                </div>
              </div>
            </div>
          </section>

          {/* Case Studies Section */}
          <section className="px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <label className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Real-World Impact</label>
              <h2 className="text-5xl font-extrabold tracking-tight">Case Studies</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Case Study 1 */}
              <div className="bg-surface-container-lowest rounded-lg p-8 shadow-[0_10px_30px_rgba(25,28,30,0.04)] border border-outline-variant/10 relative overflow-hidden group flex flex-col h-full">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
                <div className="relative z-10 flex-grow">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full mb-6 inline-block">FINTECH</span>
                  <h3 className="text-2xl font-extrabold mb-4 leading-tight">Financial Transformation</h3>
                  <p className="text-on-surface/60 leading-relaxed mb-8">
                    How OptimoConnect unified the banking infrastructure for a leading national bank, reducing latency by 40%.
                  </p>
                </div>
                <div className="relative z-10">
                  <a className="inline-flex items-center gap-2 font-bold text-sm text-primary group/link" href="#">
                    Read Full Case Study
                    <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>
              {/* Case Study 2 --> */}
              <div className="bg-surface-container-lowest rounded-lg p-8 shadow-[0_10px_30px_rgba(25,28,30,0.04)] border border-outline-variant/10 relative overflow-hidden group flex flex-col h-full">
                <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-48 h-48 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
                <div className="relative z-10 flex-grow">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full mb-6 inline-block">LOGISTICS</span>
                  <h3 className="text-2xl font-extrabold mb-4 leading-tight">Smart Logistics</h3>
                  <p className="text-on-surface/60 leading-relaxed mb-8">
                    A deep dive into OptimoTransit's implementation for a metropolitan transport authority, optimizing routes for 2M+ daily commuters.
                  </p>
                </div>
                <div className="relative z-10">
                  <a className="inline-flex items-center gap-2 font-bold text-sm text-primary group/link" href="#">
                    Read Full Case Study
                    <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>
              {/* Case Study 3 --> */}
              <div className="bg-surface-container-lowest rounded-lg p-8 shadow-[0_10px_30px_rgba(25,28,30,0.04)] border border-outline-variant/10 relative overflow-hidden group flex flex-col h-full">
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
                <div className="relative z-10 flex-grow">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full mb-6 inline-block">EDTECH</span>
                  <h3 className="text-2xl font-extrabold mb-4 leading-tight">Digital Education</h3>
                  <p className="text-on-surface/60 leading-relaxed mb-8">
                    The Warka ecosystem rollout: Empowering 500k students with offline-first digital learning tools across rural regions.
                  </p>
                </div>
                <div className="relative z-10">
                  <a className="inline-flex items-center gap-2 font-bold text-sm text-primary group/link" href="#">
                    Read Full Case Study
                    <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="px-6 lg:px-8 max-w-7xl mx-auto py-24">
            <div className="bg-surface-container-lowest rounded-xl p-12 md:p-24 text-center shadow-[0_40px_80px_rgba(25,28,30,0.04)] border border-outline-variant/10 relative overflow-hidden">
              <div className="absolute inset-0 opacity-5 pointer-events-none relative h-[500px]">
                <Image 
                  className="w-full h-full object-cover" 
                  alt="Modern collaborative workspace" 
                  src="/images/solutions-cta-bg.webp"
                  fill
                  sizes="100vw"
                />
              </div>
              <div className="relative z-10">
                <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-10 leading-[1.1]">
                  Ready to build the <br /><span className="text-primary">unshakable?</span>
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  <Link href="/contact">
                    <Button variant="primary" className="px-12 py-5 rounded-full font-bold text-sm uppercase tracking-widest shadow-xl">
                      Start Building
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outlined" className="px-12 py-5 rounded-full font-bold text-sm uppercase tracking-widest">
                      Speak to an Architect
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
