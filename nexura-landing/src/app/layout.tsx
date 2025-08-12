import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Project Nexura - Next-Generation Energy Intelligence",
  description: "Revolutionary energy management combining cutting-edge hardware monitoring with EOS software analytics. From residential smart homes to enterprise facilities, delivering unprecedented energy insights and control.",
  keywords: "energy optimization, smart home, enterprise energy, IoT sensors, energy analytics, power monitoring, EOS platform",
  authors: [{ name: "Project Nexura Team" }],
  creator: "Project Nexura",
  publisher: "Project Nexura",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Project Nexura - Next-Generation Energy Intelligence",
    description: "Revolutionary energy management combining cutting-edge hardware monitoring with EOS software analytics.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Nexura - Next-Generation Energy Intelligence",
    description: "Revolutionary energy management combining cutting-edge hardware monitoring with EOS software analytics.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}