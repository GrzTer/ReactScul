'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";
import React from "react";

export default function AccountLayout({children,}: {children: React.ReactNode;}) {

  const pathname = usePathname();

  const links = [
    { href: '/account/profile', label: 'Konto', exact: false },
    { href: '/account/notes', label: 'Notatki', exact: true },
    { href: '/account/settings', label: 'Ustawienia konta', exact: true },
  ];
  return (
    <div className="flex min-h-screen bg-black text-white">
      <aside className="w-64 p-4 border-r">
        <h2 className="text-2xl font-bold mb-4">Menu</h2>
        <ul>
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
      </aside>
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}
