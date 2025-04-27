import { users } from '@/app/utils/data'
import React from 'react'

interface Props {
    params: { id: string }
    searchParams: { id?: string }
}

export default function Profile({ params, searchParams }: Props) {
    const userId = Number(params.id)
    const user = users.find(u => u.id === userId)

    if (!user) {
        return (
            <div className=" outline-dashedflex items-center justify-center min-h-screen bg-black text-white p-4">
                <div className="border border-white p-8 rounded-lg text-center">
                    <h1 className="text-2xl font-semibold">Użytkownik nie istnieje</h1>
                </div>
            </div>
        )
    }

    const detailId = searchParams.id ? Number(searchParams.id) : null
    const detail = detailId !== null
        ? user.details.find(d => d.id === detailId) || null
        : null

    return (
        <div className=" outline-dashed flex items-center justify-center min-h-screen bg-black text-white p-4">
            <div className="w-full max-w-3xl space-y-6">
                <section className="border border-white p-6 rounded-lg">
                    <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
                    <p>
                        <span className="font-medium">Email:</span> {user.email}
                    </p>
                </section>

                <section className="border border-white p-6 rounded-lg">
                    {detailId !== null ? (
                        detail ? (
                            <>
                                <h2 className="text-2xl font-semibold mb-2">{detail.title}</h2>
                                <p>{detail.description}</p>
                            </>
                        ) : (
                            <p className="text-red-500">Nie znaleziono elementu o podanym id</p>
                        )
                    ) : (
                        <>
                            <h2 className="text-2xl font-semibold mb-4">Detale</h2>
                            <ul className="space-y-3">
                                {user.details.map(d => (
                                    <li
                                        key={d.id}
                                        className="border border-white p-4 rounded transition"
                                    >
                                        <h3 className="font-medium">{d.title}</h3>
                                        <p>{d.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </section>
            </div>
        </div>
    )
}
