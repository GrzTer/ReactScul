import Link from 'next/link';

export default function Sidebar() {
    return (
        <header className="flex items-center justify-between p-4 bg-gray-900 text-white">
            <nav>
                <ul className="flex space-x-4">
                    <li><Link href="/account">Konto</Link></li>
                    <li><Link href="/account/account_settings">Ustawienia konta</Link></li>
                    <li><Link href="/account/account_notes" on>Notatki</Link></li>
                </ul>
            </nav>
        </header>
    );
}