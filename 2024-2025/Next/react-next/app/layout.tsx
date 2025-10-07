import {Inter} from "next/font/google";
import "./globals.css";
import Header from "./header";
import React from "react";
import Footer from "@/app/footer";

const inter = Inter({subsets: ["latin"], weight: ["400", "700"]});

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <html lang="pl">
            <body className={`${inter.className} bg-black text-white font-sans min-h-screen flex flex-col`}>
                <Header/>
                <main className="flex-1 border-l border-r">
                    {children}
                </main>
                <Footer/>
            </body>
        </html>
    );
}
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/