import React, { useState, useEffect } from "react";
import Link from "next/link";
import {SignInButton, SignOutButton} from "../components/AuthButtons";
import AuthCheck from "../components/AuthCheck";

const Navbar = () => {
    return (
        <nav className="bg-black fixed top-0 w-full flex items-center justify-between h-12 border-b-2 border-white">
            <Link className="text-3xl" href={'/'}>Chorgasbord</Link>
            <ul className="flex space-x-4">
                <li><Link href={'/myboard'}> My Board </Link></li>
                <li><Link href={'/following'}> Following </Link></li>
                <li><Link href={'/users'}> Explore </Link></li>
            </ul>
            <div className="w-fit flex space-x-2 my-1 mx-1">
                <AuthCheck><SignOutButton/></AuthCheck>
                <SignInButton/>
            </div>
        </nav>
    )
};

export default Navbar;