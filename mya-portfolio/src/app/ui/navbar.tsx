import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='
    w-full fixed top-6 px-5 lg:px-8 xl:px-[8%] py-4
    flex items-center justify-between
    '>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="#projects">Projects</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#contact">Contact</Link></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar