import React, { useState, useEffect } from "react";
import Link from "next/link";
// import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
    return (
        <nav>
            <Link href={'/'}>Home</Link>
            <ul>
                <li><Link href={'/explore'}> Explore </Link></li>
                <li><Link href={'/board'}> My Board </Link></li>
                <li><Link href={'/about'}> About </Link></li>
            </ul>
        </nav>
    )
};

export default Navbar;