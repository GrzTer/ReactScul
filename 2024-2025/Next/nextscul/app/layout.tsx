import { Inter } from 'next/font/google';
import Header from "@/app/header";
import './globals.css';
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pl">
        <body className={`${inter.className} bg-black text-white`} suppressHydrationWarning>
        <Header />
        {children}
        </body>
        </html>
    );
}
