import { useState } from 'react'

type AuthUser = {
  name: string
  email: string
}

const Users = () => {
  const [user, setUser] = useState()
  const handleLogin = () => {}

  const handleLogout = () => []

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is</div>
    </div>
  )
}

export default Users
