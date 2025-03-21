
import React from 'react'
import { useState } from 'react';
import Image from './Image';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


export default function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <div className='w-full h-16 md:h-20 flex items-center justify-between'>  
            {/* Logo  */}
            <Link to="/" className='flex items-center gap-4 text-2xl font-bold'>
                <Image 
                    src="logo.png"
                    alt="Lama Logo"  
                    w={32}
                    h={32}  
                />
                <span>lama log</span>
            </Link>

            {/* Mobile */}
            <div className='md:hidden'>
                <div className="cursor:pointer text-4xl" onClick={()=>{
                    setOpen(prev=>!prev)
                }}>
                    {open ? "X" : "="}
                </div>
                
                {/* Mobile Link List */}
                <div className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]"}`}>
                    <Link to="/">Home </Link>
                    <Link to="/">Trending </Link>
                    <Link to="/">Most Popular </Link>
                    <Link to="/">About </Link>
                    <SignedOut>
                        <Link to="/login">
                            <button className='py-2 px-4 rounded-3xl text-white bg-blue-800'>Login ✌</button>
                        </Link>      
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>                                  
                </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
                    <Link to="/">Home </Link>
                    <Link to="/">Trending </Link>
                    <Link to="/">Most Popular </Link>
                    <Link to="/">About </Link>
                    <SignedOut>
                        <Link to="/login">
                            <button className='py-2 px-4 rounded-3xl text-white bg-blue-800'>Login ✌</button>
                        </Link>      
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>         
            </div>
            
        </div>
    )
}
