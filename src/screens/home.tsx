import { useQuery } from "@tanstack/react-query";
import { UsersList } from "../components/users-list"
import axios from "axios";
type User = {
  id: number
  name: string
  email: string
}
const Home = () => {
  const {data, isLoading, isError} = useQuery({ queryKey: ['todos'], queryFn: async () => {
    return await axios.get<User[]>(`${import.meta.env.VITE_API_URL}/users`)
  } })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError || !data?.data) {
    return <div>Error</div>
  }

  return (
    <div>
    <UsersList users={data.data} />
    </div>
  )
}

export {Home};