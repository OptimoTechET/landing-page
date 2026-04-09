"use client";

import { useState } from 'react';
import { TopNavBar } from '@/components/feature/TopNavBar';
import { Footer } from '@/components/feature/Footer';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.message.trim()) newErrors.message = 'Message architecture is required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      <TopNavBar />
      <main className="pt-20 bg-background text-on-background font-body selection:bg-primary-container selection:text-on-primary-container">
        {/* ... Hero Section unchanged ... */}
        <section className="px-6 lg:px-8 py-24 md:py-32 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase mb-6">
                Contact Architecture
              </span>
              <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-8 leading-[0.95]">
                Get in <br />Touch
              </h1>
              <p className="text-xl text-on-surface/70 font-light max-w-lg leading-relaxed">
                We are ready to collaborate on your next architectural digital shift. Reach out to our systems engineering team to start building the future together.
              </p>
              <div className="mt-12 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-60">Email Inquiry</p>
                    <p className="text-lg font-medium text-on-surface">operations@optimotech.et</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-60">Sales Department</p>
                    <p className="text-lg font-medium text-on-surface">+251 95 427 1746</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden bg-surface-container shadow-2xl">
                <Image 
                  alt="Modern Office" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  src="/images/contact-hero.webp"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-surface-container-low py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4">
                <h2 className="text-4xl font-extrabold tracking-tight text-on-surface mb-6">Structural Inquiry</h2>
                <p className="text-on-surface/70 leading-relaxed">
                  Complete the architectural brief below. Our technical advisors respond to all qualified inquiries within 24 operational hours.
                </p>
              </div>
              <div className="lg:col-span-8">
                {isSubmitted ? (
                  <div className="bg-surface-container-lowest p-12 md:p-20 rounded-xl shadow-2xl text-center flex flex-col items-center justify-center animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-8">
                      <span className="material-symbols-outlined text-4xl">check_circle</span>
                    </div>
                    <h3 className="text-3xl font-extrabold mb-4">Transmission Successful</h3>
                    <p className="text-on-surface/60 max-w-sm mb-10">
                      Your architectural brief has been integrated into our queue. A system architect will reach out shortly.
                    </p>
                    <Button variant="outlined" onClick={() => setIsSubmitted(false)}>Send another brief</Button>
                  </div>
                ) : (
                  <div className="bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-[0_20px_40px_rgba(25,28,30,0.04)]">
                    <form className="space-y-8" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-on-surface/40 ml-4">Full Name</label>
                          <input 
                            className={`w-full bg-surface-container-high border-none rounded-full px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-on-surface/30 ${errors.name ? 'ring-2 ring-error/50' : ''}`}
                            placeholder="John Doe" 
                            type="text" 
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                          />
                          {errors.name && <p className="text-[10px] text-error font-bold ml-4 uppercase tracking-tighter">{errors.name}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-on-surface/40 ml-4">Corporate Email</label>
                          <input 
                            className={`w-full bg-surface-container-high border-none rounded-full px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-on-surface/30 ${errors.email ? 'ring-2 ring-error/50' : ''}`}
                            placeholder="j.doe@company.com" 
                            type="email" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                          />
                          {errors.email && <p className="text-[10px] text-error font-bold ml-4 uppercase tracking-tighter">{errors.email}</p>}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface/40 ml-4">Company Name</label>
                        <input 
                          className={`w-full bg-surface-container-high border-none rounded-full px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-on-surface/30 ${errors.company ? 'ring-2 ring-error/50' : ''}`}
                          placeholder="OptimoTech Systems" 
                          type="text" 
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                        />
                        {errors.company && <p className="text-[10px] text-error font-bold ml-4 uppercase tracking-tighter">{errors.company}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface/40 ml-4">Message Architecture</label>
                        <textarea 
                          className={`w-full bg-surface-container-high border-none rounded-3xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-on-surface/30 ${errors.message ? 'ring-2 ring-error/50' : ''}`}
                          placeholder="Describe your project requirements..." 
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                        ></textarea>
                        {errors.message && <p className="text-[10px] text-error font-bold ml-4 uppercase tracking-tighter">{errors.message}</p>}
                      </div>
                      <div className="pt-4">
                        <Button 
                          variant="primary" 
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full md:w-auto px-12 py-4 rounded-full font-bold tracking-tight shadow-xl shadow-primary/20 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                              Transmitting...
                            </>
                          ) : 'Submit Architecture'}
                        </Button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations Section */}
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold tracking-tight text-on-surface mb-16 text-center">Global Nodes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="group col-span-1 md:col-span-2 max-w-2xl mx-auto w-full">
                <div className="aspect-video rounded-xl overflow-hidden mb-8 bg-surface-container relative">
                  <Image 
                    alt="Addis Ababa" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                    src="/images/office-addis.webp"
                    fill
                    sizes="(max-width: 1024px) 100vw, 80vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-2xl font-bold text-white">Global Headquarters</h3>
                    <p className="text-white/70">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
                <div className="px-4 text-center">
                  <p className="text-on-surface/60 leading-relaxed mb-4">
                    Kazanchis Osac Building 1st floor<br />
                    Addis Ababa, Ethiopia
                  </p>
                  <a className="text-primary font-bold text-sm uppercase tracking-widest inline-flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
                    View Map <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Direct Contact Info (Bento Style) --> */}
        <section className="pb-24 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-low p-8 rounded-xl hover:bg-surface-container-high transition-all">
              <span className="material-symbols-outlined text-primary text-3xl mb-6">support_agent</span>
              <h4 className="text-xl font-bold mb-2 text-on-surface">Technical Support</h4>
              <p className="text-on-surface/60 text-sm mb-6">24/7 dedicated engineering support for active systems.</p>
              <p className="text-primary font-medium">operations@optimotech.et</p>
            </div>
            <div className="bg-surface-container-low p-8 rounded-xl hover:bg-surface-container-high transition-all">
              <span className="material-symbols-outlined text-primary text-3xl mb-6">payments</span>
              <h4 className="text-xl font-bold mb-2 text-on-surface">Billing & Finance</h4>
              <p className="text-on-surface/60 text-sm mb-6">Inquiries regarding procurement and invoicing.</p>
              <p className="text-primary font-medium">operations@optimotech.et</p>
            </div>
            <div className="bg-surface-container-low p-8 rounded-xl hover:bg-surface-container-high transition-all">
              <span className="material-symbols-outlined text-primary text-3xl mb-6">groups</span>
              <h4 className="text-xl font-bold mb-2 text-on-surface">Media Relations</h4>
              <p className="text-on-surface/60 text-sm mb-6">Press kits and architectural feature requests.</p>
              <p className="text-primary font-medium">operations@optimotech.et</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
