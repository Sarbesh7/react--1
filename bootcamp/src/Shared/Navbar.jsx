import React from 'react'
import { Button } from './Navbar.css.jsx'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex items-center justify-between">


        <section className="Logo"></section>


      <ul className="flex space-x-4">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/services">Services</a></li>
        <li><Button bgColor="green" color="pink">click me</Button></li>
      </ul>
    </nav>
  )
}

export default Navbar