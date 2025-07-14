"use client"
import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import NavLinks from "./navlinks";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <nav 
        className="
            fixed top-0 left-1/2 -translate-x-1/2 w-2/5 max-w-7xl z-50 p-4
            mt-7 
            flex items-center flex-col
            rounded-full 
            bg-background/20  backdrop-blur-md border-b border-white/20
            shadow-lg 
            md:rounded-full">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-15">
                <NavLinks />
        </div>
        
        <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
                <HiMenuAlt1 className="text-black size-7" />
            </button>
        </div>

        {isOpen && (
            <div>
                <NavLinks />
            </div>
        )}
        </nav>
    )
}

export default Navbar;