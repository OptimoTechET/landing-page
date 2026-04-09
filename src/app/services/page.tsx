import { TopNavBar } from '@/components/feature/TopNavBar';
import { Footer } from '@/components/feature/Footer';
import { Button } from '@/components/ui/Button';

export default function ServicesPage() {
  return (
    <>
      <TopNavBar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[819px] flex items-center px-6 lg:px-8 overflow-hidden">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-grow">
            <div className="z-10">
              <span className="label-md uppercase tracking-[0.2em] text-primary font-bold mb-6 block text-sm">
                Our Expertise
              </span>
              <h1 className="text-4xl md:text-[3.5rem] leading-[1.1] font-extrabold tracking-tighter mb-8 text-on-surface">
                Architecting Your <br />
                <span className="text-primary-container">Digital Future</span>
              </h1>
              <p className="text-lg text-on-surface/70 leading-relaxed max-w-xl mb-10">
                OptimoTech engineers high-performance, resilient infrastructure designed to scale at the speed of your vision. We transform complex digital challenges into monumental structural advantages.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" className="text-lg px-8 py-4 shadow-lg">
                  Explore Frameworks
                </Button>
                <Button variant="outlined" className="text-lg px-8 py-4">
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden aspect-[4/5] shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  alt="Modern architectural structure" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0ZxvmBzAG24_IBtIr4kmQSSbUYedTlQoB_p4ODfJSb34hxXj4byN9d_q4dWLWHCJKr776IKrCvBr6Q7hYoA14qjOdtWNuftpHM_0JSHb8hcW7HI5j-pOArS_UvNs9gkoYj-KLyDdb6fteTnZn0ZW4-oYJC4aFR3FDLZcrMfkDBzG9Ni1IwYlPVivxMv56bbLW8k3B9xzwpgUYWgBXW0Mzqsdl0pHDCVIuuOGS2W4zmrppoukcSTWVfSHBMuGeBjbzRmlJdrl-HHGN"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </section>

        {/* Service Pillars Section */}
        <section className="py-16 lg:py-32 bg-surface-container-low">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
            <div className="mb-20">
              <h2 className="text-4xl font-black tracking-tight mb-4 text-on-surface">Core Pillars of Excellence</h2>
              <div className="w-24 h-1 bg-primary rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  icon: 'architecture', title: 'Smart Architecture', 
                  desc: 'High-availability systems designed with modular resilience and zero-bottleneck data pipelines.',
                  capabilities: ['Fault Tolerance', 'Real-time Scalability', 'Modular Integrity']
                },
                { 
                  icon: 'settings_input_component', title: 'Smart Infrastructure', 
                  desc: 'We deliver AI-ready, resilient IT architectures and automated workflows that enhance governance and operational efficiency while ensuring sustainable, managed digital ecosystems.',
                  capabilities: ['Edge Computing', 'Sensor Integration', 'Autonomous Nodes']
                },
                { 
                  icon: 'verified_user', title: 'Proprietary Solutions', 
                  desc: 'Bespoke software frameworks engineered for specific industry challengers to ensure advantage.',
                  capabilities: ['Custom Frameworks', 'IP Development', 'Market Differentiation']
                },
                { 
                  icon: 'model_training', title: 'Capacity Building', 
                  desc: 'Empowering internal teams with tools, training, and workflows required to manage future-proof tech.',
                  capabilities: ['Knowledge Transfer', 'DevSecOps Culture', 'Long-term Support']
                }
              ].map((pillar, i) => (
                <div key={i} className="bg-surface-container-lowest p-8 lg:p-10 rounded-lg ghost-lift flex flex-col h-full border border-outline-variant/10 hover:border-primary/30 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-8">
                    <span className="material-symbols-outlined text-3xl">{pillar.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-on-surface">{pillar.title}</h3>
                  <p className="text-on-surface/60 mb-8 leading-relaxed flex-grow">{pillar.desc}</p>
                  
                  <div className="mt-auto">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-primary block mb-4">
                      Key Capabilities
                    </span>
                    <ul className="space-y-3">
                      {pillar.capabilities.map((cap, j) => (
                        <li key={j} className="flex items-center text-sm gap-2 text-on-surface/80 font-medium">
                          <span className="material-symbols-outlined text-sm text-primary">check_circle</span> 
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16 lg:py-32 bg-surface">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-24">
              <h2 className="text-3xl md:text-[2.75rem] font-black tracking-tighter mb-4 text-on-surface">The Architectural Process</h2>
              <p className="text-lg text-on-surface/50 max-w-2xl mx-auto">
                A systematic approach to constructing digital foundations that never falter.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
              {/* Progress Line */}
              <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-surface-container-high z-0"></div>
              
              {[
                { num: '01', title: 'Discovery & Audit', desc: 'Deep dive into current limitations and future ambitions to identify latent structural opportunities.' },
                { num: '02', title: 'Strategic Blueprint', desc: 'Visualizing the end-state architecture with precise technical specifications and scalability paths.' },
                { num: '03', title: 'Implementation', desc: 'Rigorous assembly of components with continuous testing to ensure day-one operational excellence.' },
                { num: '04', title: 'Continuous Optimization', desc: 'Ongoing refinements powered by real-time analytics to keep your infrastructure ahead of demand.' }
              ].map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center px-4 mb-16 md:mb-0 group">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white font-bold mb-8 shadow-lg ring-8 ring-background group-hover:scale-110 transition-transform">
                    {step.num}
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-on-surface">{step.title}</h4>
                  <p className="text-sm text-on-surface/60 leading-relaxed max-w-xs">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-32 px-6 lg:px-8">
          <div className="max-w-[1440px] mx-auto">
            <div className="bg-primary p-8 sm:p-12 md:p-24 rounded-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl shadow-primary/20">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
              </div>
              <div className="relative z-10 text-white max-w-2xl text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">Read to build the unshakable?</h2>
                <p className="text-on-primary-container/80 text-xl leading-relaxed">
                  Partner with the digital architects and transform your technical debt into your greatest competitive asset.
                </p>
              </div>
              <div className="relative z-10">
                <Button variant="white" className="px-12 py-5 text-lg">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
