"use client";

import Image from 'next/image';

export function PartnersSection() {
  const partners = [
    { name: 'TELECOM' },
    { name: 'GOV.ET' },
    { name: 'FINANCEHUB' },
    { name: 'ENERGY CORP' },
    { name: 'LOGISTICS PRO' },
  ];

  return (
    <section className="py-16 lg:py-32 bg-background relative overflow-hidden" id="partners">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Part 1: Why Ethiopia's Leaders Partner With Us */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <span className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4 block">Strategic Alignment</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-on-surface mb-10 leading-tight">
              Why Ethiopia's Leaders <br />
              Partner With Us
            </h2>
            <div className="space-y-10">
              <div className="flex gap-6 group">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-white border border-outline-variant/20 dark:bg-surface-container flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-2xl">public</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-on-surface mb-2">Contextual Innovation</h3>
                  <p className="text-on-surface/60 leading-relaxed text-sm lg:text-base">
                    We don't just import tech; we localize it for the unique geographic and cultural needs of Ethiopia.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 group">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-white border border-outline-variant/20 dark:bg-surface-container flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-2xl">sync_alt</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-on-surface mb-2">Unified Interoperability</h3>
                  <p className="text-on-surface/60 leading-relaxed text-sm lg:text-base">
                    Our systems are built to talk to each other, ending the era of disjointed digital workflows.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-white border border-outline-variant/20 dark:bg-surface-container flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-2xl">neurology</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-on-surface mb-2">AI-Native</h3>
                  <p className="text-on-surface/60 leading-relaxed text-sm lg:text-base">
                    Harnessing machine learning for predictive maintenance and automated service optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative bg-on-surface">
              <Image 
                alt="Abstract high-tech visualization of digital neural networks" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                src="/images/partners-visualization.webp"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-overlay"></div>
            </div>
          </div>
        </div>

        {/* Strategic Partners & Clients Section */}
        <div className="pt-24 border-t border-outline-variant/10">
          <div className="text-center mb-16">
            <span className="text-on-surface/40 font-bold text-xs tracking-widest uppercase block mb-8">Strategic Partners & Clients</span>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              {partners.map((partner) => (
                <span key={partner.name} className="text-xl md:text-2xl font-black tracking-tighter text-on-surface select-none">
                  {partner.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
