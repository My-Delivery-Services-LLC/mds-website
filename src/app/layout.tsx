import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "myDelivery Services Co - UAE Best Delivery Service",
    template: "%s | MDS - UAE Best Delivery Service"
  },
  description: "My Delivery Services provides comprehensive delivery solutions to business customers in the United Arab Emirates. Fast, reliable, and dependable delivery services across Dubai, Sharjah, and the UAE.",
  keywords: ["delivery service UAE", "Dubai delivery", "Sharjah delivery", "logistics UAE", "courier service", "same day delivery", "express delivery"],
  authors: [{ name: "myDelivery Services Co" }],
  creator: "myDelivery Services Co",
  publisher: "myDelivery Services Co",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mdsco.ae"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://mdsco.ae",
    title: "myDelivery Services Co - UAE Best Delivery Service",
    description: "Fast, reliable delivery services across the UAE. Specialized in grocery, pharmacy, ecommerce, and restaurant deliveries.",
    siteName: "myDelivery Services Co",
    images: [
      {
        url: "/assets/hero_delivery_scene.png",
        width: 1400,
        height: 565,
        alt: "MDS Delivery Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "myDelivery Services Co - UAE Best Delivery Service",
    description: "Fast, reliable delivery services across the UAE",
    images: ["/assets/hero_delivery_scene.png"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

