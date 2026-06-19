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

export const metadata: Metadata = {
  metadataBase: new URL("https://exvoraagency.com"),
  title: "EXVORA — Marketing Agency | Strategy. Creativity. Results.",
  description:
    "EXVORA is a results-driven marketing agency. We build brands that grow through strategy, branding, digital marketing and performance. Your vision. Our strategy. Extraordinary results.",
  keywords: [
    "marketing agency",
    "SMMA",
    "social media marketing",
    "branding",
    "digital marketing",
    "EXVORA",
    "performance marketing",
  ],
  openGraph: {
    title: "EXVORA — Marketing Agency",
    description: "Strategy. Creativity. Results. We build brands that grow.",
    url: "https://exvoraagency.com",
    siteName: "EXVORA Agency",
    images: [{ url: "/images/banner2.png", width: 1942, height: 809 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EXVORA — Marketing Agency",
    description: "Strategy. Creativity. Results. We build brands that grow.",
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
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
