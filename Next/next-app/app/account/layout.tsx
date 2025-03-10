import Link from "next/link";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <aside className="w-64 p-4 border-r">
        <h2 className="text-2xl font-bold mb-4">Menu</h2>
        <ul>
          <li className="mb-2">
            <Link href="/account/notes">
              <span className="hover:underline">Notatki</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/account/settings">
              <span className="hover:underline">Ustawienia konta</span>
            </Link>
          </li>
        </ul>
      </aside>
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}
