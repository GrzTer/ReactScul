import { useParams } from 'react-router'

const Profile = () => {
  const { id } = useParams()
  return (
    <div>
      <h1 className="mb-6 text-center text-5xl font-bold">Profile</h1>
      <hr />
      <p className="text-center">Profile {id}</p>
    </div>
  )
}
export default Profile
