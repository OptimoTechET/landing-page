'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function FinalCTA() {
  return (
    <section className="py-16 lg:py-32 bg-white relative overflow-hidden border-t border-outline-variant/10">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <span className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4 block">Contact Us</span>
        <h2 className="text-5xl lg:text-7xl font-black tracking-tight text-on-surface mb-8">
          Ready to build <br/>the <span className="text-primary">unshakable?</span>
        </h2>
        <p className="text-xl text-on-surface/60 mb-12 max-w-2xl mx-auto">
          Partner with OptimoTech to build lasting national capability and drive institutional modernization through intelligent digital systems.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/contact">
            <Button variant="primary" className="text-lg px-12 py-5 shadow-2xl scale-100 hover:scale-105">
              Start Your Architecture
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outlined" className="text-lg px-12 py-5 border-2 border-primary text-primary bg-transparent">
              Contact Sales
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Decorative Blobs */}
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
}
