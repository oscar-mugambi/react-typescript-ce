import { useState } from 'react'

type AuthUser = {
  name: string
  email: string
}

const Users = () => {
  const [user, setUser] = useState({} as AuthUser)
  const handleLogin = () => {
    setUser({
      name: 'Oscar',
      email: 'oscar@mail.com',
    })
  }

  // const handleLogout = () => {
  //   setUser(null)
  // }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email} </div>
    </div>
  )
}

export default Users
