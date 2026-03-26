import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Theme } from "@radix-ui/themes";
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
  title: "Info Perumahan Semarang",
  description: "Portal informasi perumahan di Semarang dan sekitarnya, menyediakan daftar properti terbaru dan terpercaya.",
  icons: {
    icon: "/logo-info-perumahan-semarang.svg", // your favicon path
    apple: "/logo-info-perumahan-semarang.svg",
  },
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
        </Theme>
      </body>
    </html>
  );
}
