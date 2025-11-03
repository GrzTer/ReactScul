'use client'
import Image from 'next/image'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import React, {useState} from 'react'

export default function Header() {
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false)

    const links = [
        {href: '/', label: 'Strona główna', exact: true},
        {href: '/about', label: 'O nas', exact: true},
        {href: '/contact', label: 'Kontakt', exact: true},
        {href: '/account/profile', label: 'Konto', exact: false},
    ]

    return (
        <header className="bg-black border-b border-white border-t border-r border-l">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
                <Link href="/">
                    <Image src="/logo.jpg" alt="Logo" width={50} height={50}/>
                </Link>

                <nav className="hidden md:block">
                    <ul className="flex space-x-6">
                        {links.map(({href, label, exact}) => {
                            const active = exact ? pathname === href : pathname.startsWith(href)
                            return (
                                <li key={href}>
                                    {active ? (
                                        <span
                                            className="font-bold text-blue-500 pointer-events-none"
                                            aria-current="page"
                                        >{label}</span>) : (
                                        <Link href={href} className="hover:underline">
                                            {label}
                                        </Link>
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setMenuOpen(prev => !prev)}
                    aria-label="Toggle menu">
                    {menuOpen ? (
                        <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>) : (
                        <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                            <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2"
                                  strokeLinecap="round"/>
                        </svg>
                    )}
                </button>
            </div>

            {menuOpen && (
                <nav className="md:hidden bg-black border-t border-white">
                    <ul className="space-y-2 px-4 py-3">
                        {links.map(({href, label, exact}) => {
                            const active = exact ? pathname === href : pathname.startsWith(href)
                            return (
                                <li key={href}>
                                    {active ? (
                                        <span
                                            className="block font-bold text-blue-500 pointer-events-none">{label}</span>) : (
                                        <Link href={href} className="block py-1 hover:underline">
                                            {label}
                                        </Link>
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            )}
        </header>
    )
}
