export default function Profile({ params }: { params: { id: string } }) {
    return <h1>Profil użytkownika {params.id}</h1>;
}
