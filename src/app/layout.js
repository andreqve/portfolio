import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "../fonts/Inter.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-inter",
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
  other: {
    "google-site-verification": "IamODqoYpyicMTnNcgn31-3Y3s939AZs4mmt6L7r8DU"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f7f8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
