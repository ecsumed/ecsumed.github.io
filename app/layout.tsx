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


          <div className="h-screen flex flex-col  overflow-y-auto"  style={{ scrollbarGutter: "stable" }}>
            <div className="grid grid-cols-[3fr_94fr_3fr] mt-8">
              <div className=""></div>
              <div className="col-start-2 pr-3 md:pr-5">
                <Header></Header>
              </div>
              <div className=""></div>
            </div>

            <div className="flex-1 grid grid-cols-[3fr_94fr_3fr]">
              <div className=""></div>
              <div className="col-start-2 flex-col border-solid border border-stone-700 dark:border-[#e5e1e1]">
                {children}
              </div>
              <div className="sticky">
                <div className="fixed vertical-text content-end pt-1">
                  <ThemeSwitch></ThemeSwitch>
                </div>

              </div>
            </div>

            <div className="grid grid-cols-[3fr_94fr_3fr] mb-10">
              <div className="col-start-2">
                <span className="pl-1 font-thin text-sm text-slate-500 dark:text-neutral-400">
                  All code my own. Snippets borrowed here and there. Inspired by <a className="underline" href="https://p5aholic.me/">Keita Yamada</a>
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

/* <div>
            <div className="relative m-8 md:m-16 border-solid border border-stone-700 dark:border-[#e5e1e1]">
              <div className="-mt-6">
                <Header></Header>
              </div>
              <div className="">
                {children}
              </div>

            </div>
            <div className="mt-6 fixed top-2 right-2 md:top-10 md:right-10 vertical-text">
              <ThemeSwitch></ThemeSwitch>
            </div>
            <div className="mt-6 fixed bottom-2 left-2 md:bottom-12 md:left-16 font-thin">
              <span className="font-thin text-sm text-slate-500 dark:text-neutral-400">
              All code my own. Snippets borrowed here and there. Inspired by <a className="underline" href="https://p5aholic.me/">Keita Yamada</a>
              </span>
            </div>
          </div> */
