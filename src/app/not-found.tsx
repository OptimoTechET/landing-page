import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-black text-on-surface/[0.03] select-none pointer-events-none">
        404
      </div>
      
      <div className="relative z-10">
        <div className="w-16 h-1 bg-primary mb-10 mx-auto rounded-full"></div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-on-surface mb-6 tracking-tighter">
          Route Not Found
        </h1>
        <p className="text-on-surface/60 max-w-lg mb-12 text-lg font-light leading-relaxed">
          The requested architectural node does not exist in the current system deployment. 
          Please verify the URI or return to the central architecture.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <Button variant="primary" className="px-10 py-4 font-bold rounded-full shadow-xl shadow-primary/20">
              Return Home
            </Button>
          </Link>
          <Link href="/solutions">
            <Button variant="outlined" className="px-10 py-4 font-bold rounded-full">
              Explore Solutions
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-12 text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface/30">
        OptimoTech Architecture | Terminal 404
      </div>
    </div>
  );
}
