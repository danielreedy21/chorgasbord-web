import React, { useState, useEffect } from "react";
import Link from "next/link";
import {SignInButton, SignOutButton} from "../components/AuthButtons";
import AuthCheck from "../components/AuthCheck";
import HamburgerMenu from "../components/HamburgerMenu";

const Navbar = () => {
    return (
        <nav className="bg-black text-white fixed top-0 w-full h-14 border-b-2 border-white z-50
                        lg:h-12">
            {/* desktop navbar */}
            <div className="w-full h-full items-center justify-between px-2
                            hidden lg:flex">
                <Link className="text-3xl" href={'/'}>Chorgasbord</Link>
                <ul className="flex space-x-4">
                    <li><Link href={'/myboard'} > My Board </Link></li>
                    <li><Link href={'/following'} > Following </Link></li>
                    <li><Link href={'/users'} > Explore </Link></li>
                </ul>
                <div className="w-fit flex space-x-2 my-1 mx-1">
                    <AuthCheck><SignOutButton/></AuthCheck>
                    <SignInButton/>
                </div>
            </div>
            {/* tablet/mobile navbar */}
            <div className="w-full h-full flex justify-between px-2 align-center 
                            lg:hidden">
                <Link className="text-3xl h-1/2 flex content-center justify-center" href={'/'}>Chorgasbord</Link>
                <HamburgerMenu></HamburgerMenu>
                

            </div>
        </nav>
    )
};

export default Navbar;