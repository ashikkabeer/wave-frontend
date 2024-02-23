import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import ThemeProvider from "@/components/theme-provider";
const inter = Inter({ subsets: ["latin"] });
import Image from "next/image";
export const metadata: Metadata = {
  
  title: "Wave",
  description: "eveything but facebook",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen fixed inset-0 -z-10 h-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
 
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
          </div>
          <div className="relative ">
          {children}
          </div>
        
      </body>
    </html>
  );
}
