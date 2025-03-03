import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="flex items-center justify-between p-4 bg-gray-900 text-white">
            <Image src="/logo.jpg" alt="Logo" width={50} height={50} />
            <nav>
                <ul className="flex space-x-4">
                    <li><Link href="/">Strona główna</Link></li>
                    <li><Link href="/about">O nas</Link></li>
                    <li><Link href="/contact">Kontakt</Link></li>
                    <li><Link href="/account">Konto</Link></li>
                </ul>
            </nav>
        </header>
    );
}