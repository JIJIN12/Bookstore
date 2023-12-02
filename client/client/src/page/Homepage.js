import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Navtop from '../components/Navtop'
import Homer from '../components/Homer'
import Navbottom from '../components/Navbottom'

function Homepage() {
  return (
    <div>
      <Navtop/>
      <Homer/>
      <Navbottom/>
    </div>
  )
}

export default Homepage
