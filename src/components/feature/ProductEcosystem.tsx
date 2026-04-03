'use client';

import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export function ProductEcosystem() {
  return (
    <section className="py-16 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">Product Ecosystem</h2>
            <p className="text-lg text-on-surface/60 max-w-xl">Bespoke tools designed for critical infrastructure and logistics.</p>
          </div>
          <Link 
            href="/solutions" 
            className="text-primary font-bold flex items-center gap-2 group"
            aria-label="Explore all OptimoTech solutions and products"
          >
            Explore All Solutions <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
          <div className="md:col-span-7 relative group overflow-hidden rounded-lg bg-surface-container-high">
            <Image 
              alt="OptimoConnect Enterprise Mesh Interface - High-tech dashboard representing neural network connectivity for modern enterprises" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:scale-105 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEs9dfwJK6b0wsTfRPq5usViBZaoNvtR7QBpBSylXJsbvKUq4bOpxx5EhRz29w4g_vzxDmDmdH8zLasKyYUcSXg5KnlT6CwDpeblHskwI24gQUavz0ZdbZ-ncCB7SPrb16ZOJOhwRi0_TfYcTOh37AfcNAdAqlFfZWcY5iP3jAqtM0LX395ai5vPmeTaRLDfZxJB7rsqMaGq2E4Q7Ri1CdDLgDIck-APsEHmtSnYqlw5HP2yLJPOQ-FW0p5d8h9g7MfE9ZvgrPUugP"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="relative h-full p-8 lg:p-12 flex flex-col justify-end text-white z-10">
              <span className="text-xs font-bold tracking-widest uppercase mb-4 text-primary-fixed">Enterprise Mesh</span>
              <h3 className="text-4xl font-extrabold mb-4">OptimoConnect</h3>
              <p className="text-on-primary-container/80 max-w-md mb-8">The neural network for modern enterprises. Seamlessly bridging legacy hardware with cloud-native intelligence.</p>
              <div>
                <Link href="/solutions">
                  <Button variant="white" className="font-bold" aria-label="Learn more about OptimoConnect enterprise mesh">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-5 bg-surface-container-highest rounded-lg p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-8 shadow-sm">
                <span className="material-symbols-outlined text-primary">commute</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">OptimoTransit</h3>
              <p className="text-on-surface/60 mb-8">AI-optimized routing for metropolitan logistics. Reducing emission footprints by 42% globally.</p>
            </div>
            <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-lg">
              <Image 
                alt="OptimoTransit Metro Logistics Map - AI-optimized routing visualization for smart city transportation systems" 
                className="object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2OMox1YhzT7ZIYcvOzeoi8H59wouyw-92QphwH5scWft2LqTgu-1D9JE2l5uy778254yT7f8_JUTsZOUedSK1_7HxZn8TW2hHBblXVCA0RUudiejGgy6y0VBaYl-rzQXbXeJNdxnido7BvGIvTl8PH81IbvAwkH2oJRUpZkgL28dGe4Tq7FH6g_lzrMNCRYqaOgRs6dwSssLn0CYFVndMBlnR3vK6oiafaO1QmN685o5brZ7ZQuS52fzKTgVkyggBosfO0Qqi-XP6"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
              />
            </div>
          </div>
          
          <div className="md:col-span-4 bg-white rounded-lg p-8 lg:p-10 border border-outline-variant/10 shadow-sm hover:shadow-xl transition-shadow flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4">Maguya</h3>
              <p className="text-on-surface/60 text-sm leading-relaxed mb-6">Decentralized asset management for high-value physical goods. Immutable tracking via OptimoChain.</p>
            </div>
            <Link 
              href="/solutions" 
              className="flex items-center gap-4 text-primary font-bold text-sm cursor-pointer"
              aria-label="Read the Maguya decentralized asset management case study"
            >
              Case Study <span className="material-symbols-outlined text-sm">open_in_new</span>
            </Link>
          </div>
          
          <div className="md:col-span-8 bg-surface-container-low rounded-lg p-8 lg:p-10 overflow-hidden relative">
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 h-full">
              <div className="max-w-md">
                <h3 className="text-2xl font-bold mb-4">Strategic Advisory</h3>
                <p className="text-on-surface/60 mb-6">We don't just sell software; we design growth cycles. Our architects consult at the board level to align tech with vision.</p>
                <Link href="#" className="text-on-surface font-bold border-b-2 border-on-surface pb-1">Our Methodology</Link>
              </div>
              <div className="hidden md:block w-48 h-48 bg-primary rounded-full blur-[100px] opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
