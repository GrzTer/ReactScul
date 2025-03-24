"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

    const links = [
        { href: '/', label: 'Strona główna', exact: true },
        { href: '/about', label: 'O nas', exact: true },
        { href: '/contact', label: 'Kontakt', exact: true },
        { href: '/account', label: 'Konto', exact: false },
    ];

    return (
        <header className="border-b flex justify-between items-center p-4 bg-black text-white">
            <Image src={"/logo.jpg"} alt="Logo" width={50} height={50}/>
            <nav>
                <ul className="flex space-x-4">
                    {links.map(({ href, label, exact }) => {
                        const isActive = exact ? pathname === href : pathname.startsWith(href);
                        return (
                            <li key={href}>
                                {isActive ? (
                                    <span className="font-bold text-blue-500" aria-current="page">
                                        {label}
                                    </span>
                                ) : (
                                    <Link href={href} className="text-white hover:underline">
                                        {label}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}