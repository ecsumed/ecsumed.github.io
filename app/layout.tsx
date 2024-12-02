import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes'

import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import ThemeSwitch from "./components/theme_switcher";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <div>
            <div className="relative m-16 border-solid border-2 border-stone-700 dark:border-stone-100">
              <div className="-mt-6">
                <Header></Header>
              </div>
              <div className="">
                {children}
              </div>

            </div>
            <div className="mt-6 absolute top-10 right-10 vertical-text">
              <ThemeSwitch></ThemeSwitch>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html >
  );
}