import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import "./globals.css";

const openSans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Linepros",
  description: "Created by Sampath Kumara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <div className="h-screen flex flex-col">
          <div className="overflow-auto flex-grow">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
