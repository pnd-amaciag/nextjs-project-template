import SignIn from "./sign-in";
import SignOut from "./sign-out";
import { auth } from "../auth"

export default async function UserMenu() {
  const session = await auth()
  
  if (!session?.user) {
    return <SignIn />
  } else {
    return <SignOut />
  }
} 