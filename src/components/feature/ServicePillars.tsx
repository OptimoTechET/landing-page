'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';

export function ServicePillars() {
  return (
    <section id="services" className="py-16 lg:py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <SectionHeading 
            eyebrow="Core Expertise"
            title="Service Pillars"
            dividerLocation="none"
          />
          <p className="text-lg text-on-surface/60 max-w-sm mb-2">Foundationally sound, operationally superior. Our core specializations define the modern standard for tech integration.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: 'architecture', num: '01', title: 'Software Architecture', desc: 'High-availability systems designed with modular resilience and zero-bottleneck data pipelines for global scale.' },
            { icon: 'hub', num: '02', title: 'Smart Infrastructure', desc: 'IoT-driven ecosystems that transform physical assets into intelligent, responsive, and secure network nodes.' },
            { icon: 'settings_suggest', num: '03', title: 'Proprietary Solutions', desc: 'Bespoke software frameworks engineered for specific industry challenges, ensuring a competitive advantage.' },
            { icon: 'trending_up', num: '04', title: 'Capacity Building', desc: 'Empowering internal teams with tools, training, and workflows required to manage future-proof architectures.' },
          ].map((pillar, i) => (
            <div key={i} className="group bg-white p-6 md:p-10 rounded-2xl border border-outline-variant/30 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full">
              <div className="flex justify-between items-start mb-10">
                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <span className="material-symbols-outlined text-3xl">{pillar.icon}</span>
                </div>
                <span className="text-4xl font-black text-on-surface/5 group-hover:text-primary/10 transition-colors">{pillar.num}</span>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-on-surface">{pillar.title}</h3>
              <p className="text-on-surface/60 leading-relaxed text-sm mb-8 flex-grow">{pillar.desc}</p>
              <div className="w-12 h-1 bg-primary/20 group-hover:w-full group-hover:bg-primary transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
