'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { CgMenuRightAlt } from "react-icons/cg";
import { IoInvertMode } from "react-icons/io5";
import { IoInvertModeOutline } from "react-icons/io5";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
    const sideMenuRef = useRef<HTMLDivElement>(null)

    const openSideMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(-16rem)'
        }
    }

    const closeSideMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(16rem)'
        }
    }

  return (
    <>
    <nav className='
    w-full fixed top-6 px-5 lg:px-8 xl:px-[8%] py-4
    flex items-center justify-between z-50
    '>
        <div>
            {/* Nothing here */}
        </div>

        <div className='hidden md:flex items-center gap-7 lg:gap-11 rounded-full px-15 py-4 shadow-lg bg-white/10 backdrop-blur-sm'>
            <Link href="/">Home</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>
        </div>

        <div className='flex items-center gap-'>
            <button className='rounded-full p-3 shadow-lg bg-white/10 backdrop-blur-sm'>
                <IoInvertModeOutline className="w-6 h-6"/>
            </button>

            <button className='block md:hidden ml-3 cursor-pointer rounded-full p-3 shadow-lg bg-white/10 backdrop-blur-sm' onClick={openSideMenu}>
                <CgMenuRightAlt className="w-6 h-6"/>
            </button>
        </div>

        {/* Mobile Menu */}
        <div ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-80 z-50 
        h-screen bg-white/10 backdrop-blur-lg transition duration-500 shadow-lg">
            <div className='absolute top-10 right-10' onClick={closeSideMenu}>
                <CgClose className="w-6 h-6 cursor-pointer"/>
            </div>

            <Link href="/" onClick={closeSideMenu}>Home</Link>
            <Link href="#projects" onClick={closeSideMenu}>Projects</Link>
            <Link href="#about" onClick={closeSideMenu}>About</Link>
            <Link href="#contact" onClick={closeSideMenu}>Contact</Link>
        </div>
    </nav>
    </> 
  )
}

export default Navbar;