import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest pt-24 pb-12 border-t border-outline-variant/10 mt-auto">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1">
            <div className="text-2xl font-bold tracking-tighter text-on-surface mb-6">OptimoTech</div>
            <p className="text-sm text-on-surface/60 leading-relaxed mb-8">
              © 2026 OptimoTech. Built for the Digital Architect.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-on-surface mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-sm text-on-surface/60 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-on-surface/60 hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-sm text-on-surface/60 hover:text-primary transition-colors">Cookie Settings</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-on-surface mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-sm text-on-surface/60 hover:text-primary transition-colors">Global Offices</Link></li>
              <li><Link href="#" className="text-sm text-on-surface/60 hover:text-primary transition-colors">Career</Link></li>
              <li><Link href="#" className="text-sm text-on-surface/60 hover:text-primary transition-colors">Press Kit</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-on-surface mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="text-sm text-on-surface/60">Kazanchis Osac Building 1st floor, Addis Ababa, Ethiopia</li>
              <li><a href="mailto:operations@optimotech.et" className="text-sm text-primary font-bold hover:underline">operations@optimotech.et</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-outline-variant/10 flex justify-between items-center gap-6">
          <div className="flex gap-8">
            <span className="material-symbols-outlined text-on-surface/40 hover:text-primary cursor-pointer transition-colors">share</span>
            <span className="material-symbols-outlined text-on-surface/40 hover:text-primary cursor-pointer transition-colors">public</span>
          </div>
          <div className="text-xs text-on-surface/40 font-medium">
            Designing the digital foundations of tomorrow.
          </div>
        </div>
      </div>
    </footer>
  );
}
