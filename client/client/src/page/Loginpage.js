import React from 'react'
import Navtop from '../components/Navtop'
import Login from '../components/Login'
import Navbottom from '../components/Navbottom'

export default function Loginpage() {
  return (
    <div>
      <Navtop/>
      <div className='login-container'>
      <Login/>

      </div>
      <Navbottom/>
    </div>
  )
}
