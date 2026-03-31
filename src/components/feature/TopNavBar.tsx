"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { useTheme } from 'next-themes';

export function TopNavBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  const navLinks = [
    { name: 'Solutions', href: '/solutions' },
    { name: 'Services', href: '/services' },
    { name: 'Vision', href: '/vision' },
    { name: 'Partners', href: '/#partners' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f7f9fb]/80 dark:bg-[#191c1e]/80 glass-nav shadow-[0_20px_40px_rgba(25,28,30,0.06)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
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
        <div className="hidden md:flex items-center space-x-6">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-surface-variant text-on-surface transition-colors flex items-center justify-center opacity-70 hover:opacity-100"
              aria-label="Toggle theme"
            >
              <span className="material-symbols-outlined">{theme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
            </button>
          )}
          <Button variant="primary" className="text-sm px-8 py-3">
            Get Started
          </Button>
        </div>
        <button 
          className="md:hidden flex flex-col items-center justify-center p-2 text-on-surface"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-[#f7f9fb] dark:bg-[#191c1e] shadow-2xl border-t border-outline-variant/10 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 py-6 flex flex-col space-y-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-3 text-lg transition-all duration-300 ${isActive ? 'text-primary font-bold' : 'text-on-surface hover:text-primary'}`}
              >
                {link.name}
              </Link>
            )
          })}
          <div className="pt-4 mt-2 border-t border-outline-variant/10 flex flex-col gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="flex items-center justify-between py-3 text-lg text-on-surface"
              >
                <span>Theme</span>
                <span className="material-symbols-outlined">{theme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
              </button>
            )}
            <Button variant="primary" className="w-full justify-center text-base py-4">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
