import { TopNavBar } from '@/components/feature/TopNavBar';
import { Footer } from '@/components/feature/Footer';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PartnersSection } from '@/components/feature/PartnersSection';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <TopNavBar />
      <main>
        {/* Hero Section */}
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
                    <Button variant="primary" className="text-lg px-10 py-4">
                      Launch Project
                    </Button>
                  </Link>
                  <Link href="#">
                    <Button variant="outlined" className="text-lg px-10 py-4 border-2">
                      View Portfolio
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    alt="abstract architectural blueprint rendering" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-pAW7j1sX8b-o_zSFe8JZM3iSzmB13inuoTQj252OgOn7e0tpS0CLSi7ZQxPEHQHGkcJdsK5jg1ln5Es9qmCiAHfuonTwJjp0LF2FeQIcgogHFzYyB8UGy8nHWru5d3SIuk2k-JQWRZTQeBuDzzgn9-kCYbp2A5EmhFGPdsmynRy86z1iFlnsRDqYDazBpE8mi8RBmxlYdTMjCb8eJtmKnYgMRNs5JIxgdt018ITJSz3TbazRra63Dc3tfgywsP4rnQAEzMlqT7_z"
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

        {/* Mission and Vision Section */}
        <section className="py-16 lg:py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <SectionHeading 
              eyebrow="Foundation & Purpose"
              title="Defining Our Intent"
              centered
              className="mb-20"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mb-24">
              <div className="bg-surface-container-low p-8 lg:p-16 rounded-[2rem] border border-outline-variant/20 hover:border-primary/30 transition-all duration-500 group">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white mb-10 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">rocket_launch</span>
                </div>
                <h3 className="text-3xl font-extrabold mb-6 text-on-surface">Our Mission</h3>
                <p className="text-xl text-on-surface/70 leading-relaxed font-medium">
                  To architect the backbone of a connected nation, ensuring no citizen is left behind in the global digital economy.
                </p>
              </div>
              <div className="bg-surface-container-low p-8 lg:p-16 rounded-[2rem] border border-outline-variant/20 hover:border-primary/30 transition-all duration-500 group">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white mb-10 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">visibility</span>
                </div>
                <h3 className="text-3xl font-extrabold mb-6 text-on-surface">Our Vision</h3>
                <p className="text-xl text-on-surface/70 leading-relaxed font-medium">
                  A fully interoperable Ethiopia where technology fuels prosperity, governance, and social equity through intelligent systems.
                </p>
              </div>
            </div>

            {/* Core Values Sub-section */}
            <div className="pt-16 border-t border-outline-variant/10">
              <div className="text-center mb-16">
                <h3 className="text-2xl font-bold text-on-surface tracking-tight uppercase">Our Core Principles</h3>
                <p className="text-on-surface/60 mt-2">The architectural pillars that define every OptimoTech engagement.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
                {[
                  { icon: 'lightbulb', title: 'Innovation', desc: "Pushing the boundaries of what's architecturally possible." },
                  { icon: 'verified', title: 'Excellence', desc: "Setting the global standard for technical precision." },
                  { icon: 'balance', title: 'Integrity', desc: "Unwavering ethical commitment in every line of code." },
                  { icon: 'handshake', title: 'Collaboration', desc: "Building stronger together through shared vision." },
                  { icon: 'eco', title: 'Sustainability', desc: "Designing for the long-term impact on our planet." },
                ].map((val, i) => (
                  <div key={i} className="group bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/10 hover:border-primary/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center ghost-lift">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <span className="material-symbols-outlined text-2xl">{val.icon}</span>
                    </div>
                    <h4 className="font-bold text-on-surface mb-3">{val.title}</h4>
                    <p className="text-xs text-on-surface/60 leading-relaxed">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
        </section>

        {/* Core Service Pillars */}
        <section className="py-16 lg:py-32 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <SectionHeading 
                eyebrow="Core Expertise"
                title="Service Pillars"
                dividerLocation="none"
              />
              <p className="text-lg text-on-surface/60 max-w-sm mb-2">Foundationally sound, operationally superior. Our core specializations define the modern standard for tech integration.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: 'architecture', num: '01', title: 'Software Architecture', desc: 'High-availability systems designed with modular resilience and zero-bottleneck data pipelines for global scale.' },
                { icon: 'hub', num: '02', title: 'Smart Infrastructure', desc: 'IoT-driven ecosystems that transform physical assets into intelligent, responsive, and secure network nodes.' },
                { icon: 'settings_suggest', num: '03', title: 'Proprietary Solutions', desc: 'Bespoke software frameworks engineered for specific industry challenges, ensuring a competitive advantage.' },
                { icon: 'trending_up', num: '04', title: 'Capacity Building', desc: 'Empowering internal teams with tools, training, and workflows required to manage future-proof architectures.' },
              ].map((pillar, i) => (
                <div key={i} className="group bg-white p-6 md:p-10 rounded-2xl border border-outline-variant/30 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-10">
                    <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <span className="material-symbols-outlined text-3xl">{pillar.icon}</span>
                    </div>
                    <span className="text-4xl font-black text-on-surface/5 group-hover:text-primary/10 transition-colors">{pillar.num}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-on-surface">{pillar.title}</h3>
                  <p className="text-on-surface/60 leading-relaxed text-sm mb-8 flex-grow">{pillar.desc}</p>
                  <div className="w-12 h-1 bg-primary/20 group-hover:w-full group-hover:bg-primary transition-all duration-700"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Redesigned "We Turn Systems On" Section */}
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

        {/* Challenge & Our Response Section */}
        <section className="py-16 lg:py-32 bg-background border-y border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionHeading 
              eyebrow="Strategic Realignment"
              title="The Challenge & Our Response"
              centered
              className="mb-20"
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-outline-variant/20 rounded-3xl overflow-hidden border border-outline-variant/20 shadow-sm">
              {/* Problem */}
              <div className="bg-surface-container-lowest p-8 lg:p-16">
                <div className="mb-10">
                  <span className="text-error font-bold text-xs tracking-widest uppercase mb-4 block">The Problem</span>
                  <h3 className="text-3xl font-extrabold text-on-surface">Fragmented Systems</h3>
                </div>
                <ul className="space-y-6">
                  {[
                    { t: 'Data Silos & Information Gaps', d: 'Isolated datasets preventing unified institutional intelligence.' },
                    { t: 'High Operational Inefficiency', d: 'Manual processes and legacy bottlenecks slowing down growth.' },
                    { t: 'Legacy Security Vulnerabilities', d: 'Outdated protocols posing significant risk to digital sovereignty.' },
                    { t: 'Expensive Maintenance Overheads', d: 'High technical debt draining resources from innovation.' }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 group">
                      <span className="material-symbols-outlined text-error/60 mt-0.5">close</span>
                      <div>
                        <h4 className="font-bold text-on-surface">{item.t}</h4>
                        <p className="text-sm text-on-surface/60 mt-1">{item.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Solution */}
              <div className="bg-surface-container-lowest p-8 lg:p-16 border-t lg:border-t-0 lg:border-l border-outline-variant/20">
                <div className="mb-10">
                  <span className="text-primary font-bold text-xs tracking-widest uppercase mb-4 block">The Solution</span>
                  <h3 className="text-3xl font-extrabold text-on-surface">Unified Ecosystems</h3>
                </div>
                <ul className="space-y-6">
                  {[
                    { t: 'Interoperable Data Highways', d: 'Seamless data flow across departments via standardized APIs.' },
                    { t: 'Automated Cross-Agency Workflows', d: 'Intelligent automation reducing manual overhead by up to 60%.' },
                    { t: 'Zero-Trust Security Protocols', d: 'Military-grade protection for critical digital infrastructure.' },
                    { t: 'Scalable Open-Source Architectures', d: 'Future-proof frameworks built for exponential scale.' }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 group">
                      <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                      <div>
                        <h4 className="font-bold text-on-surface">{item.t}</h4>
                        <p className="text-sm text-on-surface/60 mt-1">{item.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Solutions Bento Grid */}
        <section className="py-16 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">Product Ecosystem</h2>
                <p className="text-lg text-on-surface/60 max-w-xl">Bespoke tools designed for critical infrastructure and logistics.</p>
              </div>
              <Link href="/solutions" className="text-primary font-bold flex items-center gap-2 group">
                Explore All Solutions <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
              <div className="md:col-span-7 relative group overflow-hidden rounded-lg bg-surface-container-high">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  alt="high-tech dashboard interface" 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEs9dfwJK6b0wsTfRPq5usViBZaoNvtR7QBpBSylXJsbvKUq4bOpxx5EhRz29w4g_vzxDmDmdH8zLasKyYUcSXg5KnlT6CwDpeblHskwI24gQUavz0ZdbZ-ncCB7SPrb16ZOJOhwRi0_TfYcTOh37AfcNAdAqlFfZWcY5iP3jAqtM0LX395ai5vPmeTaRLDfZxJB7rsqMaGq2E4Q7Ri1CdDLgDIck-APsEHmtSnYqlw5HP2yLJPOQ-FW0p5d8h9g7MfE9ZvgrPUugP"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="relative h-full p-8 lg:p-12 flex flex-col justify-end text-white z-10">
                  <span className="text-xs font-bold tracking-widest uppercase mb-4 text-primary-fixed">Enterprise Mesh</span>
                  <h3 className="text-4xl font-extrabold mb-4">OptimoConnect</h3>
                  <p className="text-on-primary-container/80 max-w-md mb-8">The neural network for modern enterprises. Seamlessly bridging legacy hardware with cloud-native intelligence.</p>
                  <div>
                    <Link href="/solutions">
                      <Button variant="white" className="font-bold">Learn More</Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-5 bg-surface-container-highest rounded-lg p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-8 shadow-sm">
                    <span className="material-symbols-outlined text-primary">commute</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">OptimoTransit</h3>
                  <p className="text-on-surface/60 mb-8">AI-optimized routing for metropolitan logistics. Reducing emission footprints by 42% globally.</p>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  alt="clean overhead view of city transit map" 
                  className="rounded-lg w-full h-40 object-cover shadow-lg" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2OMox1YhzT7ZIYcvOzeoi8H59wouyw-92QphwH5scWft2LqTgu-1D9JE2l5uy778254yT7f8_JUTsZOUedSK1_7HxZn8TW2hHBblXVCA0RUudiejGgy6y0VBaYl-rzQXbXeJNdxnido7BvGIvTl8PH81IbvAwkH2oJRUpZkgL28dGe4Tq7FH6g_lzrMNCRYqaOgRs6dwSssLn0CYFVndMBlnR3vK6oiafaO1QmN685o5brZ7ZQuS52fzKTgVkyggBosfO0Qqi-XP6"
                />
              </div>
              
              <div className="md:col-span-4 bg-white rounded-lg p-8 lg:p-10 border border-outline-variant/10 shadow-sm hover:shadow-xl transition-shadow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-4">Maguya</h3>
                  <p className="text-on-surface/60 text-sm leading-relaxed mb-6">Decentralized asset management for high-value physical goods. Immutable tracking via OptimoChain.</p>
                </div>
                <Link href="/solutions" className="flex items-center gap-4 text-primary font-bold text-sm cursor-pointer">
                  Case Study <span className="material-symbols-outlined text-sm">open_in_new</span>
                </Link>
              </div>
              
              <div className="md:col-span-8 bg-surface-container-low rounded-lg p-8 lg:p-10 overflow-hidden relative">
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 h-full">
                  <div className="max-w-md">
                    <h3 className="text-2xl font-bold mb-4">Strategic Advisory</h3>
                    <p className="text-on-surface/60 mb-6">We don't just sell software; we design growth cycles. Our architects consult at the board level to align tech with vision.</p>
                    <Link href="#" className="text-on-surface font-bold border-b-2 border-on-surface pb-1">Our Methodology</Link>
                  </div>
                  <div className="hidden md:block w-48 h-48 bg-primary rounded-full blur-[100px] opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <PartnersSection />

        {/* Uncompromising Service Delivery Section */}
        <section className="py-16 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-on-surface">Uncompromising Service Delivery</h2>
              <div className="w-16 h-1 bg-primary mt-6 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { icon: 'trending_up', title: 'Digital Strategy', desc: 'Roadmapping your digital evolution with market-specific insights.' },
                { icon: 'code', title: 'Custom Software', desc: 'High-performance applications tailored to unique operational needs.' },
                { icon: 'hub', title: 'Smart Infra', desc: 'Deploying IoT & edge computing for real-time asset management.' },
                { icon: 'school', title: 'Talent Dev', desc: 'Bridging the skills gap with immersion technical curriculum.' },
                { icon: 'security', title: 'Managed IT', desc: '24/7 infrastructure oversight and elite cybersecurity protection.' }
              ].map((item, i) => (
                <div key={i} className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center text-primary mb-6">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-4">{item.title}</h3>
                  <p className="text-sm text-on-surface/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 lg:py-32 bg-white relative overflow-hidden border-t border-outline-variant/10">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <span className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4 block">Contact Us</span>
            <h2 className="text-5xl lg:text-7xl font-black tracking-tight text-on-surface mb-8">
              Ready to build <br/>the <span className="text-primary">unshakable?</span>
            </h2>
            <p className="text-xl text-on-surface/60 mb-12 max-w-2xl mx-auto">
              Join over 400 global leaders who have trusted OptimoTech to handle their most complex digital transitions.
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
      </main>
      <Footer />
    </>
  );
}
