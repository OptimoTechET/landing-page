'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';

export function StrategicResponse() {
  return (
    <section className="py-16 lg:py-32 bg-background border-y border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading 
          eyebrow="Strategic Realignment"
          title="The Challenge & Our Response"
          centered
          className="mb-20"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-outline-variant/20 rounded-3xl overflow-hidden border border-outline-variant/20 shadow-sm">
          {/* Problem */}
          <div className="bg-surface-container-lowest p-8 lg:p-16">
            <div className="mb-10">
              <span className="text-error font-bold text-xs tracking-widest uppercase mb-4 block">The Problem</span>
              <h3 className="text-3xl font-extrabold text-on-surface">Fragmented Systems</h3>
            </div>
            <ul className="space-y-6">
              {[
                { t: 'Data Silos & Information Gaps', d: 'Isolated datasets preventing unified institutional intelligence.' },
                { t: 'High Operational Inefficiency', d: 'Manual processes and legacy bottlenecks slowing down growth.' },
                { t: 'Legacy Security Vulnerabilities', d: 'Outdated protocols posing significant risk to digital sovereignty.' },
                { t: 'Expensive Maintenance Overheads', d: 'High technical debt draining resources from innovation.' }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <span className="material-symbols-outlined text-error/60 mt-0.5">close</span>
                  <div>
                    <h4 className="font-bold text-on-surface">{item.t}</h4>
                    <p className="text-sm text-on-surface/60 mt-1">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Solution */}
          <div className="bg-surface-container-lowest p-8 lg:p-16 border-t lg:border-t-0 lg:border-l border-outline-variant/20">
            <div className="mb-10">
              <span className="text-primary font-bold text-xs tracking-widest uppercase mb-4 block">The Solution</span>
              <h3 className="text-3xl font-extrabold text-on-surface">Unified Ecosystems</h3>
            </div>
            <ul className="space-y-6">
              {[
                { t: 'Interoperable Data Highways', d: 'Seamless data flow across departments via standardized APIs.' },
                { t: 'Automated Cross-Agency Workflows', d: 'Intelligent automation reducing manual overhead by up to 60%.' },
                { t: 'Zero-Trust Security Protocols', d: 'Military-grade protection for critical digital infrastructure.' },
                { t: 'Scalable Open-Source Architectures', d: 'Future-proof frameworks built for exponential scale.' }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <div>
                    <h4 className="font-bold text-on-surface">{item.t}</h4>
                    <p className="text-sm text-on-surface/60 mt-1">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
