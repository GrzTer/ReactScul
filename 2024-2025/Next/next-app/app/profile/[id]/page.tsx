// export default function Profile({ params }: { params: { id: string } }) {
//     return (
//         <div className="min-h-screen bg-black text-white p-4">
//             <h1>Profil użytkownika: {params.id}</h1>
//         </div>
//     );
// }
function Profile

= async ({params, searchParams}) => {
    const {id} = await params
    const {searchId} = await searchParams

    return (
        <p>{`${id} ${searchId}`}</p>
    )
}

export default Profile