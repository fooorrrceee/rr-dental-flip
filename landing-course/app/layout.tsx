import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BackToTopButton } from "./components/BackToTopButton";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dentist in RS Puram, Coimbatore – Sample Dental Clinic",
  description: "Sample Dental Clinic in RS Puram, Coimbatore provides gentle dental care for families, from check-ups and child dentistry to braces, implants, and emergency treatment.",

  openGraph: {
    title: "Dentist in RS Puram, Coimbatore – Sample Dental Clinic",
    description:
      "Gentle, family-friendly dental care in RS Puram, Coimbatore. Check-ups, child dentistry, braces, root canals, implants, and more under one roof.",
    url: "https://example.com", // placeholder; change when you deploy
    siteName: "Sample Dental Clinic",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://example.com/og-image.jpg", // placeholder
        width: 1200,
        height: 630,
        alt: "Sample Dental Clinic in RS Puram, Coimbatore",
      },
    ],
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
        <BackToTopButton />
      </body>
    </html>
  );
}
