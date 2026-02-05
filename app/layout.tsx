import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/ui/CookieBanner";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://taxgrid.co.uk'), // Replace with actual production URL
  title: {
    default: "UK Director Salary vs Dividend Calculator | 2025/26 & 2026/27",
    template: "%s | Tax_Grid"
  },
  description: "Calculate the most tax-efficient salary and dividend mix for UK limited company directors. Updated for April 2025 and 2026 dividend tax rises. Precise NIC and Corporation Tax modeling.",
  keywords: ["director tax calculator", "salary vs dividends 2025", "dividend tax 2026", "optimal director salary", "limited company tax calculator", "HMRC 2025 thresholds"],
  authors: [{ name: "Sarah Mitchell, CTA" }],
  creator: "Tax_Grid Systems",
  publisher: "Tax_Grid Systems",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "UK Director Salary vs Dividend Calculator | 2025/26 & 2026/27",
    description: "Calculate the most tax-efficient salary and dividend mix. Real-time projection with marginal rate HUD.",
    url: "https://tax-calculator-uk.co.uk", // Placeholder URL
    siteName: "Tax_Grid",
    images: [
      {
        url: "/og-image.png", // Ensure this exists or add a placeholder
        width: 1200,
        height: 630,
        alt: "Tax_Grid Precision HUD Interface",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Director Salary vs Dividend Calculator",
    description: "Precision financial modeling for UK Limited Company Directors.",
    images: ["/og-image.png"],
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
    <html lang="en" className={`${plusJakarta.variable} ${outfit.variable}`}>
      <body className="min-h-screen font-sans selection:bg-indigo-500/30">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
