'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      <div className="w-20 h-20 rounded-full bg-error/10 flex items-center justify-center text-error mb-8">
        <span className="material-symbols-outlined text-4xl">error</span>
      </div>
      <h1 className="text-4xl font-extrabold text-on-surface mb-4 tracking-tight">
        Architecture Alert
      </h1>
      <p className="text-on-surface/60 max-w-md mb-10 leading-relaxed font-light text-lg">
        We've encountered a structural anomaly in the system. Our engineers are investigating. 
        In the meantime, we can attempt to re-stabilize the viewport.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          variant="primary" 
          onClick={() => reset()}
          className="px-10 py-4 font-bold"
        >
          Re-stabilize System
        </Button>
        <Button 
          variant="outlined" 
          onClick={() => window.location.href = '/'}
          className="px-10 py-4 font-bold"
        >
          Return to Dashboard
        </Button>
      </div>
    </div>
  );
}
