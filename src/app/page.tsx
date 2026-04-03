import dynamic from 'next/dynamic';
import { TopNavBar } from '@/components/feature/TopNavBar';
import { Footer } from '@/components/feature/Footer';
import { Hero } from '@/components/feature/Hero';

// Loading states for dynamic components
const SectionLoader = () => (
  <div className="w-full h-96 flex items-center justify-center bg-background/50 animate-pulse">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Dynamic imports for below-the-fold sections
const MissionVision = dynamic(() => import('@/components/feature/MissionVision').then(mod => mod.MissionVision), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const ServicePillars = dynamic(() => import('@/components/feature/ServicePillars').then(mod => mod.ServicePillars), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const SystemActivation = dynamic(() => import('@/components/feature/SystemActivation').then(mod => mod.SystemActivation), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const StrategicResponse = dynamic(() => import('@/components/feature/StrategicResponse').then(mod => mod.StrategicResponse), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const ProductEcosystem = dynamic(() => import('@/components/feature/ProductEcosystem').then(mod => mod.ProductEcosystem), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const PartnersSection = dynamic(() => import('@/components/feature/PartnersSection').then(mod => mod.PartnersSection), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const ServiceDelivery = dynamic(() => import('@/components/feature/ServiceDelivery').then(mod => mod.ServiceDelivery), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const FinalCTA = dynamic(() => import('@/components/feature/FinalCTA').then(mod => mod.FinalCTA), {
  loading: () => <SectionLoader />,
  ssr: true,
});

export default function Home() {
  return (
    <>
      <TopNavBar />
      <main>
        <Hero />
        <MissionVision />
        <ServicePillars />
        <SystemActivation />
        <StrategicResponse />
        <ProductEcosystem />
        <PartnersSection />
        <ServiceDelivery />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
