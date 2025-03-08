import { Inter } from 'next/font/google';
import Sidebar from "@/app/account/sidebar";
import '../globals.css';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pl">
        <body className={`${inter.className} bg-black text-white`}>
        <Sidebar />
        <main className="p-4">{children}</main>
        </body>
        </html>
    );
}
