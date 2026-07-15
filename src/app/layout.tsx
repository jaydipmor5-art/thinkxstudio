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
    "Digital Innovation",
    "Web Development",
    "App Development",
    "AI Automation",
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "ThinkXstudio",
              "image": "https://thinkxstudio.com/og-image.jpg",
              "@id": "https://thinkxstudio.com/#organization",
              "url": "https://thinkxstudio.com",
              "telephone": "+919023700622",
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
                "latitude": 23.0225,
                "longitude": 72.5714,
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "21:00",
              },
              "sameAs": [
                "https://www.linkedin.com/company/thinkxstudio",
                "https://www.instagram.com/thinkxstudio?igsh=MWYzdHlnM3ptNTNhYw==",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 antialiased selection:bg-accent-purple/30 selection:text-accent-cyan">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
