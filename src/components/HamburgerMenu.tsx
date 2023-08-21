"use client";

import { useState } from "react"
import Link from "next/link";
import AuthCheck from "../components/AuthCheck";
import {SignInButton, SignOutButton} from "../components/AuthButtons";


export default function HamburgerMenu() {
    const [navIsOpen, setNavIsOpen] = useState(false)

    return (
        <div className="flex place-items-center">
            <div className="space-y-2"
                onClick={() => setNavIsOpen((prev) => !prev)}>
                <span className="block h-0.5 w-8 bg-white"></span>
                <span className="block h-0.5 w-8 bg-white"></span>
                <span className="block h-0.5 w-8 bg-white"></span>
            </div>
            <div className={navIsOpen ? "absolute w-full h-screen top-0 left-0 bg-black z-10 flex flex-col justify-evenly align-center": "hidden"}>
                <div className="absolute top-0 right-0 px-8 py-8 "
                    onClick={() => setNavIsOpen(false)}
                >
                    <svg
                        className="h-8 w-8 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </div>

                <ul className="flex flex-col items-center justify-between min-h-24 gap-12">
                    <li className="text-xl"
                        onClick={() => setNavIsOpen(false)}><Link href={'/myboard'}> My Board </Link></li>
                    <li className="text-xl"
                        onClick={() => setNavIsOpen(false)}><Link href={'/following'}> Following </Link></li>
                    <li className="text-xl"
                        onClick={() => setNavIsOpen(false)}><Link href={'/users'}> Explore </Link></li>
                    <li className="text-xl flex gap-2">
                        <AuthCheck><SignOutButton/></AuthCheck>
                        <SignInButton/>
                    </li>
                </ul>
            </div>
        </div>
    );

}