import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
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
  metadataBase: new URL("https://www.infoperumahansemarang.com"),

  title: {
    default: "Jual Beli Rumah Semarang | Info Perumahan Semarang",
    template: "%s | Info Perumahan Semarang",
  },
  
  description: "Portal sewa jual beli rumah di Semarang dan sekitarnya dengan mudah. Temukan rumah terbaru, harga terbaik, dan layanan titip jual properti terpercaya di Semarang dan sekitarnya.",
  
  keywords: [
    "jual rumah semarang",
    "beli rumah semarang",
    "perumahan semarang",
    "agen properti semarang",
    "titip jual rumah semarang",
    "rumah murah semarang",
  ],

  authors: [{ name: "Info Perumahan Semarang" }],
  creator: "Info Perumahan Semarang",
  publisher: "Info Perumahan Semarang",

  icons: {
    icon: "favicon/info-perumahan-semarang.svg", // your favicon path
    apple: "favicon/info-perumahan-semarang.svg",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Jual Beli Rumah Semarang | Info Perumahan Semarang",
    description:
      "Platform terpercaya untuk sewa jual beli dan titip jual rumah di Semarang dan sekitarnya. Dapatkan pembeli potensial lebih cepat.",
    url: "https://www.infoperumahansemarang.com",
    siteName: "Info Perumahan Semarang",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://www.infoperumahansemarang.com/illustration/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jual Rumah Semarang",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Jual Rumah Semarang Cepat & Mudah",
    description:
      "Pasang iklan properti Anda dan temukan pembeli potensial di Semarang.",
    images: ["/illustration/og-image.png"],
  },

  alternates: {
    canonical: "https://www.infoperumahansemarang.com",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Theme>
          {children}
          <Analytics />
          <SpeedInsights />
        </Theme>
      </body>
    </html>
  );
}
