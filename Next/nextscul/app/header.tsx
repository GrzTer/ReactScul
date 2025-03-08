import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="border-b flex items-center justify-between p-4 bg-black text-white">
            <Image src="/logo.jpg" alt="Logo" width={50} height={50} />
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className="no-underline text-white">
                            Strona główna
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="no-underline text-white">
                            O nas
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="no-underline text-white">
                            Kontakt
                        </Link>
                    </li>
                    <li>
                        <Link href="/account" className="no-underline text-white">
                            Konto
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
