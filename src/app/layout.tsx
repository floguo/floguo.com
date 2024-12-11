import type { Metadata } from "next";
import "./globals.css";
import { Crimson_Pro } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import { Instrument_Sans } from "next/font/google";
// import localFont from "next/font/local";

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson-pro",
  fallback: ["serif"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jet-brains-mono",
  fallback: ["monospace"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  fallback: ["sans-serif"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "floguo",
  description: "Independent designer in Toronto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${crimsonPro.variable} ${jetBrainsMono.variable} ${instrumentSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
