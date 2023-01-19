import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const LoginButton = () => {
    const{loginWithRedirect} = useAuth0();
  return (
    <div>
    <button 
    class="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded mx-2"
    onClick={()=>loginWithRedirect()}
    >
  Log In
</button>
    </div>
  )
}

export default LoginButton