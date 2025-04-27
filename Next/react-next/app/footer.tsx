'use client'
import Link from 'next/link'
import {FaDiscord, FaGithub, FaInbox} from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="bg-black text-white border-t border-white border-r border-l">
            <div className="container mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-2 gap-1 w-full">
                <div className="space-y-2">
                    <h3 className="font-semibold text-lg">Kontakt</h3>
                    <p>JAjaJAja@gmail.com</p>
                    <p>+48 123 456 789</p>
                </div>

                <div className="space-y-2 text-center">
                    <h3 className="font-semibold text-lg">Znajdź nas</h3>
                    <div className="flex justify-center space-x-4 text-2xl">
                        <Link href="#"><FaGithub/></Link>
                        <Link href="#"><FaDiscord/></Link>
                        <Link href="#"><FaInbox/></Link>
                    </div>
                </div>
            </div>

            <div className="border-t border-white mt-4 pt-4 text-sm border-b text-center">
                © 2025 Moja Apka. Wszelkie prawa zastrzeżone.
            </div>
        </footer>
    )
}
