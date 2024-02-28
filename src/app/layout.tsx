import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import ThemeProvider from "@/components/theme-provider";
const inter = Inter({ subsets: ["latin"] });
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wave",
  description: "eveything but facebook",
};

import ModeToggle from "@/components/toggle";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="nav pt-5 flex w-screen justify-center">
            <div className="w-full">
              <Image
                src="/base-logo.png"
                width={500}
                height={500}
                className="ml-5  object-contain size-9 my-0 flex justify-start"
                alt="Picture of the author"
              />
            </div>
            <div className="absolute">
              <NavBar />
            </div>

            {/* <div className="toggle pr-9"><ModeToggle/></div> */}
          </div>
          <div className="absolute">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
