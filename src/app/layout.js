import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Arabic Open University.",
  description: "Website for Arabic Open University.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Arabic Open University." />
        <meta
          property="og:description"
          content="Website for Arabic Open University."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.arabaou.com/" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Arabic Open University." />
        <meta
          name="twitter:description"
          content="Website for Arabic Open University."
        />
        <meta name="twitter:image" content="/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
