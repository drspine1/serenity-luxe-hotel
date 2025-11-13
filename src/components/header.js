"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import dynamic from "next/dynamic"
import { usePathname } from "next/navigation";
const UserButton = dynamic(() => import("@clerk/nextjs").then((m) => m.UserButton), { ssr: false });
const SignedIn = dynamic(() => import("@clerk/nextjs").then((m) => m.SignedIn), { ssr: false });
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
   const pathName= usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
  
       <nav className="fixed top-0 left-0 w-full z-50 bg-[#25003c]/90 backdrop-blur-md shadow-lg">
      <div className="flex justify-between items-center px-5 md:px-16 py-4">
        {/* Logo */}
        <Link href="/home" className="text-[orangered] uppercase text-2xl font-bold tracking-wide">
          luxe<span className="text-white">haven</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          
            <>

              <Link href="/home" className={`hover:text-[orangered]  transition-all font-semibold ${pathName === '/home' ? 'text-[orangered]' : 'text-white'}`}>
                Home
              </Link>
              <Link href="/about" className={`hover:text-[orangered] transition-all font-semibold ${pathName === '/about' ? 'text-[orangered]' : 'text-white'}`}>
                About
              </Link>
              <Link href="/amenities" className={`hover:text-[orangered] transition-all font-semibold ${pathName === '/amenities' ? 'text-[orangered]' : 'text-white'}`}>
                Amenities
              </Link>
              <Link href="/contact" className={`hover:text-[orangered] transition-all font-semibold ${pathName === '/contact' ? 'text-[orangered]' : 'text-white'}`}>
                Contact
              </Link>
               <Link href="/booking-details" className={`hover:text-[orangered] transition-all font-semibold ${pathName === '/booking-details' ? 'text-[orangered]' : 'text-white'}`}>
                Details
              </Link>
                <SignedIn>
                <UserButton signOutOptions={{ redirectUrl: "/" }}/>
              </SignedIn>
            </>
          
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#36005a] flex flex-col items-center gap-6 py-8 text-white">
          
            <>
              <Link href="/home" onClick={toggleMenu} className={`hover:text-[orangered] text-white transition-all ${pathName === '/home' ? 'text-[orangered]' : ''}`}>
                Home
              </Link>
              
              <Link href="/about" onClick={toggleMenu} className={`hover:text-[orangered] text-white transition-all ${pathName === '/about' ? 'text-[orangered]' : ''}`}>
                About
              </Link>
              <Link href="/amenities" onClick={toggleMenu} className={`hover:text-[orangered] text-white transition-all ${pathName === '/amenities' ? 'text-[orangered]' : ''}`}>
                Amenities
              </Link>
              <Link href="/contact" onClick={toggleMenu} className={`hover:text-[orangered] text-white transition-all ${pathName === '/contact' ? 'text-[orangered]' : ''}`}>
                Contact
              </Link>
              <Link href="/booking-details" onClick={toggleMenu}  className={`hover:text-[orangered] text-white  transition-all ${pathName === '/booking-details' ? 'text-[orangered]' : ''}`}>
                Details
              </Link>
              <SignedIn>
                <UserButton signOutOptions={{ redirectUrl: "/" }}/>
              </SignedIn>
              
            </>
          
        </div>
      )}
    </nav>
    
   
  );
};

export default Navbar;
