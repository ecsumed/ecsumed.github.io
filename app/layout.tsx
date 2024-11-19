import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes'

import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Fahad S.",
  description: "F.S. personal site",
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
      >

        <div className="lg:mx-52 px-4 mt-5">
          <ThemeProvider><Header></Header></ThemeProvider>
        </div>

        <div className="lg:mx-52 px-4 mt-12 mx-auto">
          <ThemeProvider>{children}</ThemeProvider>
        </div>

      </body>
    </html >
  );
}
