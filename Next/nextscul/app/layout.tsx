import { Inter } from 'next/font/google';
import Header from "@/app/header";

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pl">
        <body className={inter.className}>
        <Header/>
        {children}
        </body>
        </html>
    );
}