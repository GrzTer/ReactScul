'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
    const pathname = usePathname()
    const links = [
        { href: '/', label: 'Strona główna', exact: true },
        { href: '/about', label: 'O nas', exact: true },
        { href: '/contact', label: 'Kontakt', exact: true },
        { href: '/account/profile/1', label: 'Konto', exact: false },
    ]
    return (
        <header className="border-b flex justify-between items-center p-4 bg-black text-white border-1">
            <Link href="/"><Image src="/logo.jpg" alt="Logo" width={50} height={50} /></Link>
            <nav>
                <ul className="flex space-x-4">
                    {links.map(({ href, label, exact }) => {
                        const active = exact ? pathname === href : pathname.startsWith(href)
                        return (
                            <li key={href}>
                                {active ? (
                                    <span className="font-bold text-blue-500 pointer-events-none" aria-current="page">{label}</span>
                                ) : (
                                    <Link href={href} className="text-white hover:underline">{label}</Link>
                                )}
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}