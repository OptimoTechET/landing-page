"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';

export function TopNavBar() {
  const pathname = usePathname();
  
  const navLinks = [
    { name: 'Solutions', href: '/solutions' },
    { name: 'Services', href: '/services' },
    { name: 'Vision', href: '/vision' },
    { name: 'Partners', href: '/partners' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f7f9fb]/80 dark:bg-[#191c1e]/80 glass-nav shadow-[0_20px_40px_rgba(25,28,30,0.06)]">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-on-surface">
          OptimoTech
        </Link>
        <div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-tight">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`transition-all duration-300 ${isActive ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface/80 hover:text-primary'}`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
        <Button variant="primary" className="text-sm px-8 py-3">
          Get Started
        </Button>
      </div>
    </nav>
  );
}
