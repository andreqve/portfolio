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

export const metadata = {
  title: "Andre – Digital Marketer & Google Sheets Creator",
  description:
    "Andre's portfolio – Digital marketer, SaaS builder, and Google Sheets creator. Explore top templates, digital marketing experience, and practical resources for creators and businesses.",
  keywords: [
    "Andre",
    "Digital Marketing",
    "Google Sheets",
    "Portfolio",
    "SaaS",
    "Template",
    "Indonesia",
    "Productivity"
  ],
  openGraph: {
    title: "Andre – Digital Marketer & Google Sheets Creator",
    description:
      "Digital marketer, SaaS builder, and Google Sheets expert. Discover top templates, marketing experience, and more.",
    url: "https://andre.id",
    siteName: "andre.id",
    images: [
      {
        url: "https://andre.id/image/andre.jpg",
        width: 800,
        height: 600,
        alt: "Andre – Digital Marketer & Google Sheets Creator"
      }
    ],
    locale: "en_ID",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    site: "@andreqve",
    title: "Andre – Digital Marketer & Google Sheets Creator",
    description:
      "Digital marketer, SaaS builder, and Google Sheets expert. Discover top templates, marketing experience, and more.",
    images: ["https://andre.id/image/andre.jpg"]
  },
  // Tambahkan bagian ini:
  other: {
    "google-site-verification": "IamODqoYpyicMTnNcgn31-3Y3s939AZs4mmt6L7r8DU"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Meta tags for SEO & mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Next.js akan auto inject title, desc, OpenGraph, dsb dari metadata */}
        {/* Favicon otomatis dari /public/favicon.ico */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
