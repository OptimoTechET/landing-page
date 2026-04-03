'use client';

import Link from 'next/link';

export function SystemActivation() {
  return (
    <section className="py-16 lg:py-32 relative bg-surface-container-lowest overflow-hidden">
      <div className="absolute inset-0 grid-pattern pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-primary font-bold text-sm tracking-widest uppercase mb-4">
              <span className="h-px w-8 bg-primary"></span>
              System Activation
            </div>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-on-surface leading-tight">
              We Turn <br/><span className="text-primary">Systems On.</span>
            </h2>
          </div>
          <p className="text-on-surface/60 text-lg max-w-sm">Deploying the architectural blueprint for institutional success and societal progress.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-outline-variant/20 border border-outline-variant/20 rounded-2xl overflow-hidden shadow-sm">
          {[
            { 
              icon: 'corporate_fare', title: 'For Organizations', 
              desc: 'Unlocking enterprise scalability through comprehensive digital transformation and architectural efficiency.',
              points: ['Enterprise Scalability', 'Digital Transformation', 'Operational Efficiency'],
              cta: 'Architect Growth'
            },
            { 
              icon: 'account_balance', title: 'For Government', 
              desc: 'Ensuring sovereignty and public trust through the digitization of services and secure, resilient infrastructure.',
              points: ['Sovereign Infrastructure', 'Public Service Digitization', 'Secure Governance'],
              cta: 'Enable Sovereignty'
            },
            { 
              icon: 'groups', title: 'For People', 
              desc: 'Empowering the next generation via digital inclusion, talent development, and decentralized opportunity.',
              points: ['Digital Inclusion', 'Talent Development', 'Future-Proof Skills'],
              cta: 'Empower Inclusion'
            }
          ].map((col, i) => (
            <div key={i} className="bg-surface-container-lowest p-8 lg:p-12 hover:bg-surface-container-low transition-colors group">
              <div className="mb-12">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined text-2xl">{col.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{col.title}</h3>
                <p className="text-on-surface/60 leading-relaxed mb-8">{col.desc}</p>
              </div>
              <ul className="space-y-4 mb-10">
                {col.points.map((pt, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm font-medium text-on-surface/80">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                    {pt}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-4 transition-all">
                {col.cta} <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
