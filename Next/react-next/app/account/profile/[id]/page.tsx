import {users} from '@/app/utils/data'

export default function Profile({params, searchParams}: { params: { id: string }; searchParams: { id?: string } }) {
    const id = Number(params.id)
    const user = users.find(u => u.id === id)
    if (!user) return <div className="flex justify-center items-center min-h-screen bg-black text-white">
        <h1>Użytkownik nie istnieje</h1>
    </div>
    const dId = searchParams.id ? Number(searchParams.id) : null
    return (
        <div className="flex justify-center items-center min-h-screen bg-black text-white border-2 border-dashed">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">{user.name} – Profil</h1>
                <p className="mb-4">Email: {user.email}</p>
                {dId !== null ? (() => {
                    const d = user.details.find(x => x.id === dId)
                    return d ? <div>
                            <h2 className="text-xl font-semibold">{d.title}</h2>
                            <p>{d.description}</p>
                        </div> :
                        <p className="text-red-400">Nie znaleziono elementu o podanym id</p>
                })() : <div>
                    <h2 className="text-xl font-semibold mb-2">Lista elementów:</h2>
                    <ul className="list-disc list-inside">{user.details.map(x =>
                        <li key={x.id}>
                        <span className="font-medium">
                            {x.title}
                        </span>:
                            {x.description}
                        </li>
                    )}
                    </ul>
                </div>
                }
            </div>
        </div>
    )
}