'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';

export function MissionVision() {
  return (
    <section id="vision" className="py-16 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeading 
          eyebrow="Foundation & Purpose"
          title="Defining Our Intent"
          centered
          className="mb-20"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mb-24">
          <div className="bg-surface-container-low p-8 lg:p-16 rounded-[2rem] border border-outline-variant/20 hover:border-primary/30 transition-all duration-500 group">
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white mb-10 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">rocket_launch</span>
            </div>
            <h3 className="text-3xl font-extrabold mb-6 text-on-surface">Our Mission</h3>
            <p className="text-xl text-on-surface/70 leading-relaxed font-medium">
              To be the most trusted technology partner, transforming investments into lasting national capability through digital systems and local capacity building.
            </p>
          </div>
          <div className="bg-surface-container-low p-8 lg:p-16 rounded-[2rem] border border-outline-variant/20 hover:border-primary/30 transition-all duration-500 group">
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white mb-10 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">visibility</span>
            </div>
            <h3 className="text-3xl font-extrabold mb-6 text-on-surface">Our Vision</h3>
            <p className="text-xl text-on-surface/70 leading-relaxed font-medium">
              To enable a digitally empowered Ethiopia where intelligent systems, trusted data, and skilled institutions drive inclusive growth and efficient governance.
            </p>
          </div>
        </div>

        {/* Core Values Sub-section */}
        <div className="pt-16 border-t border-outline-variant/10">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-on-surface tracking-tight uppercase">Our Core Principles</h3>
            <p className="text-on-surface/60 mt-2">The architectural pillars that define every OptimoTech engagement.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
            {[
              { icon: 'lightbulb', title: 'Innovation', desc: "Pushing the boundaries of what's architecturally possible." },
              { icon: 'verified', title: 'Excellence', desc: "Setting the global standard for technical precision." },
              { icon: 'balance', title: 'Integrity', desc: "Unwavering ethical commitment in every line of code." },
              { icon: 'handshake', title: 'Collaboration', desc: "Building stronger together through shared vision." },
              { icon: 'groups', title: 'Inclusivity', desc: "Champion technology access and empower communities." },
            ].map((val, i) => (
              <div key={i} className="group bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/10 hover:border-primary/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center ghost-lift">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-2xl">{val.icon}</span>
                </div>
                <h4 className="font-bold text-on-surface mb-3">{val.title}</h4>
                <p className="text-xs text-on-surface/60 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
}
