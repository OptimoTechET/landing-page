import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { BackToTop } from "@/components/ui/BackToTop";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://optimotech.et'),
  title: {
    default: "OptimoTech - Architecting Digital Infrastructure & Data Highways",
    template: "%s | OptimoTech"
  },
  description: "OptimoTech engineers the structural ether for smart cities, decentralized logistics, and global enterprise operations. Architecting the future of systems in Ethiopia and beyond.",
  keywords: ["Digital Infrastructure", "Software Architecture Ethiopia", "Smart City Systems", "Decentralized Logistics", "Enterprise Scalability", "System Activation", "Ethiopian Tech Ecosystem", "Tech Solutions", "Bespoke Enterprise Software"],
  authors: [{ name: "OptimoTech Team" }],
  creator: "OptimoTech",
  publisher: "OptimoTech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://optimotech.et',
    siteName: 'OptimoTech',
    title: 'OptimoTech - Architecting Your Digital Future',
    description: 'Explore high-availability systems designed with modular resilience and zero-bottleneck data pipelines for global scale.',
    images: [{
      url: '/images/og-image.webp',
      width: 1200,
      height: 630,
      alt: 'OptimoTech - Digital Infrastructure Architecture'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OptimoTech - Architecting Digital Infrastructure',
    description: 'We turn systems on. The backbone of a connected nation.',
    images: ['/images/og-image.webp'],
    creator: '@OptimoTech',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-placeholder',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} font-sans antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning className="bg-background text-on-surface min-h-screen font-body selection:bg-primary-container selection:text-white flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <JsonLd />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
