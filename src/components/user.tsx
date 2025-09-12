import { auth } from "../auth"
 
export default async function User() {
  const session = await auth()
 
  if (!session?.user) return <div>Not logged in</div>
 
  return (
    <div>
      Logged in as {session.user.name}
    </div>
  )
}