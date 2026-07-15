import type { Metadata } from "next";
import "./globals.css";
import ClientLayoutWrapper from "../components/common/ClientLayoutWrapper";

// Local fallback font variables for offline compiler compatibility
const geistSans = {
  variable: "font-sans",
};

const geistMono = {
  variable: "font-mono",
};

export const metadata: Metadata = {
  title: {
    default: "ThinkXstudio | Digital Innovation Company",
    template: "%s | ThinkXstudio",
  },
  description: "ThinkXstudio: Design • Develop • Automate • Scale. Your Complete Digital Growth Partner. Premium Websites, Apps, CRM, AI solutions, and Content Marketing.",
  keywords: [
    // Core brand
    "ThinkXstudio", "Think X Studio", "ThinkX",
    // Services
    "Web Development", "App Development", "AI Automation", "AI Agents",
    "CRM Development", "ERP Software", "Business Software",
    "UI UX Design", "Branding Agency", "Digital Marketing",
    // Location-based (GEO)
    "Web Development Surat", "App Development Surat", "Digital Agency Surat",
    "Software Company Surat", "IT Company Gujarat", "Web Design Gujarat",
    "Startup Agency India", "AI Company India",
    // Answer Engine (AEO)
    "best web development company in Surat",
    "top digital agency in Gujarat",
    "who builds AI websites in India",
    "affordable web design Surat",
    "custom app development India",
    // Long-tail
    "ThinkX OS Portal", "Gemini AI Integration", "Enterprise ERP India",
  ],
  metadataBase: new URL("https://thinkxstudio.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ThinkXstudio | Complete Digital Growth Partner",
    description: "Build the future with technology. Design, develop, automate, and scale with ThinkXstudio.",
    url: "https://thinkxstudio.com",
    siteName: "ThinkXstudio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ThinkXstudio - Digital Innovation Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ThinkXstudio | Complete Digital Growth Partner",
    description: "We build the future with technology. Websites, apps, AI, automation, and branding.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} style={{ colorScheme: "dark" }}>
      <head>
        {/* Inject Google Fonts outfit for premium header typography */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
        {/* Structured Data Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "name": "ThinkXstudio",
                "image": "https://thinkxstudio.com/og-image.jpg",
                "@id": "https://thinkxstudio.com/#organization",
                "url": "https://thinkxstudio.com",
                "telephone": "+919023700622",
                "priceRange": "₹₹",
                "description": "ThinkXstudio is a premium digital agency in Surat, Gujarat offering web development, app development, AI automation, CRM/ERP software, branding, and digital marketing services.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Digital Innovation Center",
                  "addressLocality": "Surat",
                  "addressRegion": "Gujarat",
                  "postalCode": "395007",
                  "addressCountry": "IN",
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 21.1702,
                  "longitude": 72.8311,
                },
                "areaServed": [
                  { "@type": "City", "name": "Surat" },
                  { "@type": "State", "name": "Gujarat" },
                  { "@type": "Country", "name": "India" },
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Digital Services",
                  "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Automation & Agents" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM & ERP Software" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UI/UX Design & Branding" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Premium Content & Marketing" } },
                  ],
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                  "opens": "09:00",
                  "closes": "21:00",
                },
                "sameAs": [
                  "https://www.linkedin.com/company/thinkxstudio",
                  "https://www.instagram.com/thinkxstudio?igsh=MWYzdHlnM3ptNTNhYw==",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What services does ThinkXstudio offer?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "ThinkXstudio offers website development, mobile app development (Android & iOS), AI automation, CRM/ERP software, UI/UX design, branding, and premium content marketing."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Where is ThinkXstudio located?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "ThinkXstudio is based in Surat, Gujarat, India and serves clients across India and internationally."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How can I contact ThinkXstudio?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You can contact ThinkXstudio via WhatsApp at +91 90237 00622, or by visiting thinkxstudio.com and filling in the contact form."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does ThinkXstudio build AI-powered websites?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. ThinkXstudio specializes in AI-integrated websites powered by Google Gemini, including AI chatbots, autonomous agents, workflow automation, and ThinkX OS client portals."
                    }
                  },
                ]
              }
            ])
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 antialiased selection:bg-accent-purple/30 selection:text-accent-cyan">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
