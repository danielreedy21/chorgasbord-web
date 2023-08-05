import React, { useState, useEffect } from "react";
import Link from "next/link";
import {SignInButton, SignOutButton} from "../components/AuthButtons";
import AuthCheck from "../components/AuthCheck";

const Navbar = () => {
    return (
        <nav>
            <Link href={'/'}>Home</Link>
            <ul>
                <li><Link href={'/users'}> Users </Link></li>
                <li><Link href={'/board'}> My Board </Link></li>
                <li><Link href={'/about'}> About </Link></li>
                <li><SignInButton/></li>
                <li><AuthCheck><SignOutButton/></AuthCheck></li>
            </ul>
        </nav>
    )
};

export default Navbar;