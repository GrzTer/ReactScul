import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header";
import React from "react";
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className={`${inter.className} border bg-black text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
