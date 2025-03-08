"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const pathname = usePathname();
    const links = [
        { href: '/account', label: 'Konto' },
        { href: '/account/account_settings', label: 'Ustawienia konta' },
        { href: '/account/account_notes', label: 'Notatki' },
    ];

    return (
        <aside className="bg-black text-white p-4">
            <nav>
                <ul className="flex space-x-4">
                    {links.map(link => {
                        const isActive = pathname === link.href;
                        return (
                            <li key={link.href}>
                                {isActive ? (
                                    <span
                                        className="font-bold text-blue-500 cursor-default pointer-events-none"
                                        aria-disabled="true"
                                        tabIndex={-1}
                                    >
                    {link.label}
                  </span>
                                ) : (
                                    <Link href={link.href} className="hover:underline">
                                        {link.label}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
}
