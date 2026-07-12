import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { siteConfig } from "@/lib/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default:
      "CivilToolsHub | Construction Calculators & Site Tools",
    template: "%s | CivilToolsHub",
  },

  description: siteConfig.description,

  keywords: [
    "Construction Calculators",
    "Civil Engineering Calculators",
    "Construction Tools",
    "Site Engineer Tools",
    "Concrete Calculator",
    "RMC Calculator",
    "Steel Weight Calculator",
    "Brick Calculator",
    "Plaster Calculator",
    "Construction Material Calculator",
    "Civil Engineering Tools",
  ],

  applicationName: siteConfig.name,

  authors: [
    {
      name: "CivilToolsHub",
    },
  ],

  creator: "CivilToolsHub",
  publisher: "CivilToolsHub",

  category: "Construction",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title:
      "CivilToolsHub | Construction Calculators & Site Tools",
    description: siteConfig.description,
  },

  twitter: {
    card: "summary_large_image",
    title:
      "CivilToolsHub | Construction Calculators & Site Tools",
    description: siteConfig.description,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}