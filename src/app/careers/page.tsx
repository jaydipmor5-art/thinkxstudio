import { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers at ThinkX Studio | Join our Development & AI Team",
  description: "Explore job openings and career opportunities at ThinkX Studio. Join us in building the future of web development, mobile apps, and AI automation.",
  keywords: [
    "ThinkX Studio careers",
    "ThinkX Studio jobs",
    "software engineering jobs Surat",
    "AI developer jobs",
    "web developer careers",
    "app development jobs",
  ],
  openGraph: {
    title: "Careers at ThinkX Studio",
    description: "Build the future with us. Discover open positions in AI, web development, and design at ThinkX Studio.",
    url: "https://thinkxstudio.com/careers",
    siteName: "ThinkX Studio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ThinkX Studio Careers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <CareersClient />;
}
