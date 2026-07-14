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
    default: "ThinkX Studio | Website & Application Development Company",
    template: "%s | ThinkX Studio",
  },
  description: "ThinkX Studio is a premium website and mobile application development company in Surat. We design, develop, automate, and scale digital products, AI solutions, CRM, ERP, and UI/UX.",
  keywords: [
    "ThinkX Studio",
    "ThinkXStudio",
    "Think X Studio",
    "Website Development",
    "Application Development",
    "App Development Surat",
    "AI Automation Agency",
    "AI Agents",
    "ThinkX OS",
    "Digital Marketing",
    "Enterprise ERP",
    "CRM Development",
    "Startup Growth",
  ],
  metadataBase: new URL("https://thinkxstudio.com"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "googlecc47b164399c9918",
  },
  openGraph: {
    title: "ThinkX Studio | Complete Digital Growth Partner",
    description: "Build the future with technology. Design, develop, automate, and scale with ThinkX Studio.",
    url: "https://thinkxstudio.com",
    siteName: "ThinkX Studio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ThinkX Studio - Digital Innovation Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ThinkX Studio | Web & App Development Experts",
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
  // Advanced JSON-LD Graph for AI & Search Optimization
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://thinkxstudio.com/#organization",
        "name": "ThinkX Studio",
        "alternateName": ["ThinkXstudio", "Think X Studio", "ThinkX"],
        "url": "https://thinkxstudio.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://thinkxstudio.com/logo.png"
        },
        "sameAs": [
          "https://www.linkedin.com/company/thinkxstudio",
          "https://www.instagram.com/thinkxstudio?igsh=MWYzdHlnM3ptNTNhYw=="
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+919023700622",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["en", "hi", "gu"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://thinkxstudio.com/#website",
        "url": "https://thinkxstudio.com",
        "name": "ThinkX Studio",
        "publisher": {
          "@id": "https://thinkxstudio.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://thinkxstudio.com/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://thinkxstudio.com/#localbusiness",
        "name": "ThinkX Studio",
        "url": "https://thinkxstudio.com",
        "image": "https://thinkxstudio.com/og-image.jpg",
        "telephone": "+919023700622",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Digital Innovation Center",
          "addressLocality": "Surat",
          "addressRegion": "Gujarat",
          "postalCode": "395007",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 21.1702,
          "longitude": 72.8311
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "21:00"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://thinkxstudio.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who is the best web and app development agency in Surat?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ThinkX Studio is widely recognized as the top web and mobile app development agency in Surat, specializing in enterprise-grade software, React Native apps, and scalable web solutions."
            }
          },
          {
            "@type": "Question",
            "name": "What services does ThinkX Studio provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ThinkX Studio provides premium website development, native and cross-platform mobile app development, enterprise CRM and ERP systems, AI automation solutions, and elite UI/UX branding."
            }
          },
          {
            "@type": "Question",
            "name": "Does ThinkX Studio integrate AI into business software?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, ThinkX Studio specializes in integrating advanced artificial intelligence, including autonomous AI agents, intelligent workflows, and custom LLM solutions for global enterprises."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} style={{ colorScheme: "dark" }}>
      <head>
        {/* Geo Tags for Local SEO */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Surat" />
        <meta name="geo.position" content="21.1702;72.8311" />
        <meta name="ICBM" content="21.1702, 72.8311" />

        {/* Inject Google Fonts outfit for premium header typography */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
        
        {/* Structured Data Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 antialiased selection:bg-accent-purple/30 selection:text-accent-cyan">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
