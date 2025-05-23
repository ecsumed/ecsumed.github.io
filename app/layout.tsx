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


          <div className="h-screen flex flex-col">
            <div className="grid grid-cols-[3fr_94fr_3fr] mt-8 overflow-y-auto" style={{ scrollbarGutter: "stable" }}>
              <div className=""></div>
              <div className="col-start-2 pr-3 md:pr-5 border-solid border-b border-stone-700 dark:border-[#e5e1e1]">
                <Header></Header>
              </div>
              <div className=""></div>
            </div>

            <div className="flex-1 grid grid-cols-[3fr_94fr_3fr] overflow-y-auto" style={{ scrollbarGutter: "stable" }}>
              <div className=""></div>
              <div className="col-start-2 flex-col border-solid border-x border-stone-700 dark:border-[#e5e1e1]">
                {children}
              </div>
              <div className="sticky max-sm:mr-6">
                <div className="fixed vertical-text content-end pt-1">
                  <ThemeSwitch></ThemeSwitch>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[3fr_94fr_3fr] mb-10 overflow-y-auto" style={{ scrollbarGutter: "stable" }}>
              <div className="col-start-2 border-solid border-t border-stone-700 dark:border-[#e5e1e1]">
                <span className="pl-1 font-thin text-sm text-slate-500 dark:text-neutral-400">
                  All code my own. Design inspired by <a className="underline" href="https://p5aholic.me/">Keita Yamada</a>
                </span>
              </div>
              <div className=""></div>
            </div>
          </div>

        </ThemeProvider>
      </body>
    </html >
  );
}
