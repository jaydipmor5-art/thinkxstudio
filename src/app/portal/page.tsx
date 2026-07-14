import { Metadata } from "next";
import PortalClient from "./PortalClient";

export const metadata: Metadata = {
  title: "Client Portal Login | ThinkX Studio",
  description: "Log in to the ThinkX Studio client portal to track your project development progress, design milestones, and deployment status in real-time.",
  keywords: [
    "ThinkX Studio portal",
    "client login",
    "ThinkX OS",
    "project tracking",
    "real-time development updates",
  ],
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <PortalClient />;
}
