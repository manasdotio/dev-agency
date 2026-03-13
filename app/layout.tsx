import type { Metadata } from "next";
import type { ReactNode } from "react";

import "../css/times-marvelous-site-029ff4.webflow.shared.364f781a9.css";
import "../css/lenis.css";
import "./globals.css";

import { RuntimeBootstrap } from "@/components/shared/runtime-bootstrap";

const siteTitle = "Awake - Webflow HTML website template";
const siteDescription =
  "A sleek and modern Webflow template designed for creative agencies, startups, and freelancers. Elevate your online presence with stunning animations, responsive design, and seamless user experience.";

export const metadata: Metadata = {
  metadataBase: new URL("https://awakeagency.webflow.io"),
  title: siteTitle,
  description: siteDescription,
  applicationName: "Awake",
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/images/69afb0934a0a9b77eaf024d1_favicon.svg",
    apple: "/images/69afb0934a0a9b77eaf024d2_webclip.svg"
  },
  openGraph: {
    type: "website",
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Awake"
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://awakeagency.webflow.io/",
  name: "Awake",
  description: siteDescription,
  publisher: {
    "@type": "Organization",
    name: "Awake"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="w-mod-js"
      data-wf-domain="times-marvelous-site-029ff4.webflow.io"
      data-wf-page="69afb0934a0a9b77eaf02474"
      data-wf-site="69afb0914a0a9b77eaf02433"
      data-wf-status="1"
      suppressHydrationWarning
    >
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/69afb0934a0a9b77eaf024d8_background-gradient.webp"
          fetchPriority="high"
          media="(min-width: 992px)"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body className="body">
        {children}
        <RuntimeBootstrap />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}