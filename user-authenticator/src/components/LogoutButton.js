import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'

const LogoutButton = () => {
    const{logout} = useAuth0();
  return (
    <div>
      <button 
    class="bg-green-700 hover:bg-green-400 text-white font-bold py-2 px-4 rounded mx-2"
    onClick={()=>logout()}
    >
  Log Out
</button>
    </div>
  )
}

export default LogoutButton