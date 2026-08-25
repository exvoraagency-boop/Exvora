import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sora = localFont({
  src: [
    { path: "./fonts/sora-300.woff2", weight: "300", style: "normal" },
    { path: "./fonts/sora-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/sora-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/sora-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/sora-700.woff2", weight: "700", style: "normal" },
    { path: "./fonts/sora-800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});

const inter = localFont({
  src: [
    { path: "./fonts/inter-300.woff2", weight: "300", style: "normal" },
    { path: "./fonts/inter-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/inter-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/inter-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

const fraunces = localFont({
  src: [
    { path: "./fonts/fraunces-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/fraunces-italic-400.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.exvoraagency.com"),
  title: "EXVORA — Ad Campaigns That Bring Clinics Patients | Bahrain",
  description:
    "EXVORA is a Bahrain-based agency running strategic, data-driven ad campaigns that put your clinic in front of the right patients — and turn them into booked appointments. Your vision. Our strategy. Extraordinary results.",
  keywords: [
    "clinic marketing",
    "patient acquisition",
    "clinic advertising Bahrain",
    "aesthetic clinic marketing",
    "healthcare advertising",
    "EXVORA",
    "medical marketing agency",
  ],
  alternates: {
    canonical: "/",
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
  openGraph: {
    title: "EXVORA — Ad Campaigns That Bring Clinics Patients",
    description:
      "Strategic, data-driven advertising that puts your clinic in front of the right patients — and turns them into booked appointments.",
    url: "https://www.exvoraagency.com",
    siteName: "EXVORA Agency",
    images: [{ url: "/images/banner2.png", width: 1942, height: 809 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EXVORA — Ad Campaigns That Bring Clinics Patients",
    description:
      "Strategic, data-driven advertising that puts your clinic in front of the right patients — and turns them into booked appointments.",
    images: ["/images/banner2.png"],
  },
  icons: { icon: "/images/logo.png" },
    verification: {
          google: "Hl-w0J6MzTnF1jsB4DpsyVdDrPpv4qBheHUfQIoFQ_U",
    },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
