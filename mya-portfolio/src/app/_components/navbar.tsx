'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import { CgMenuRightAlt } from "react-icons/cg";
import { IoInvertMode } from "react-icons/io5";
import { IoInvertModeOutline } from "react-icons/io5";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
    const sideMenuRef = useRef<HTMLDivElement>(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const openSideMenu = () => {
        console.log('Opening menu')
        setIsMenuOpen(true)
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(0)'
        }
    }

    const closeSideMenu = () => {
        console.log('Closing menu')
        setIsMenuOpen(false)
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(100%)'
        }
    }

  return (
    <>
    <nav className='
    w-full fixed top-6 px-5 lg:px-8 xl:px-[8%] py-4
    flex items-center justify-center z-50
    '>
        {/* Desktop Navigation - Centered */}
        <div className='hidden md:flex items-center gap-7 lg:gap-11 rounded-full px-15 py-4 shadow-lg bg-white/10 backdrop-blur-sm'>
            <Link href="#home" className='transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>Home</Link>
            <Link href="#experience" className='transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>Experience</Link>
            <Link href="#projects" className='transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>Projects</Link>
            <Link href="#about" className='transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>About</Link>
        </div>

        {/* Right side buttons */}
        <div className='absolute right-5 lg:right-8 xl:right-[8%] flex items-center gap-3'>
            <button className='rounded-full p-3 shadow-lg bg-white/10 backdrop-blur-sm'>
                <IoInvertModeOutline className="w-6 h-6"/>
            </button>
            
            <button className='block md:hidden rounded-full p-3 shadow-lg bg-white/10 backdrop-blur-sm cursor-pointer' onClick={openSideMenu}>
                <CgMenuRightAlt className="w-6 h-6"/>
            </button>
        </div>

        {/* Mobile Menu */}
        <div ref={sideMenuRef} className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-80 z-50 
        h-screen bg-white/10 backdrop-blur-lg transition-transform duration-500 shadow-lg transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className='absolute top-10 right-10' onClick={closeSideMenu}>
                <CgClose className="w-6 h-6 cursor-pointer"/>
            </div>

            <Link href="#home" onClick={closeSideMenu}>Home</Link>
            <Link href="#experience" onClick={closeSideMenu}>Experience</Link>
            <Link href="#projects" onClick={closeSideMenu}>Projects</Link>
            <Link href="#about" onClick={closeSideMenu}>About</Link>
        </div>
    </nav>
    </> 
  )
}

export default Navbar;