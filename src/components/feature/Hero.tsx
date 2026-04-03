'use client';

import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="pt-32 lg:pt-48 pb-16 lg:pb-32 px-6 lg:px-8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container/10 text-primary text-xs font-bold tracking-widest uppercase mb-8">
              The Future of Systems
            </span>
            <h1 className="text-[clamp(3rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-tighter mb-8 text-on-surface">
              Architecting <br />
              <span className="text-gradient">Digital Permanent</span> <br />
              Infrastructure.
            </h1>
            <p className="text-lg text-on-surface/70 max-w-xl leading-relaxed mb-10">
              We build beyond requirements. OptimoTech engineers the structural ether that powers global smart cities, decentralized logistics, and enterprise scale-up operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button 
                  variant="primary" 
                  className="text-lg px-10 py-4"
                  aria-label="Launch project and contact our team"
                >
                  Launch Project
                </Button>
              </Link>
              <Link href="#">
                <Button 
                  variant="outlined" 
                  className="text-lg px-10 py-4 border-2"
                  aria-label="View our architectural project portfolio"
                >
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative group">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl bg-surface-container-high">
              <Image 
                alt="OptimoTech Digital Infrastructure - Abstract architectural blueprint rendering representing scalable software systems" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-pAW7j1sX8b-o_zSFe8JZM3iSzmB13inuoTQj252OgOn7e0tpS0CLSi7ZQxPEHQHGkcJdsK5jg1ln5Es9qmCiAHfuonTwJjp0LF2FeQIcgogHFzYyB8UGy8nHWru5d3SIuk2k-JQWRZTQeBuDzzgn9-kCYbp2A5EmhFGPdsmynRy86z1iFlnsRDqYDazBpE8mi8RBmxlYdTMjCb8eJtmKnYgMRNs5JIxgdt018ITJSz3TbazRra63Dc3tfgywsP4rnQAEzMlqT7_z"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-surface-container-lowest p-6 rounded-xl shadow-xl border border-outline-variant/10 hidden lg:flex flex-col justify-center gap-2">
              <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
              <div className="text-xs font-bold text-on-surface">Certified Architecture</div>
              <div className="w-full h-1 bg-surface-container-high rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
