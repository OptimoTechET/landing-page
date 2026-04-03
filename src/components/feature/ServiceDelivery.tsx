'use client';

export function ServiceDelivery() {
  return (
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
  );
}
