'use client';

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Spinner from '../components/Spinner';

export function SignInButton() {
    const { data: session, status} = useSession();
    console.log(session, status);
    if (status === 'loading') {
        return <Spinner></Spinner>
    }

    if (status === 'authenticated') {
        if (session) {
            return (
                // <>{session.user?.name} Signed In!</>
                <div className="relative w-10 h-10">
                    <img 
                    src={session.user?.image ?? "/profile-icon.jpeg"} 
                    alt={session.user?.name ?? "profile name"}
                    className="rounded-full border border-gray-400 shadow-sm"/>
                </div>
            );
        } else {
            return <>...</>
        }
    } else {
        return <button onClick={() => signIn()}> Sign In</button>;
    }

}

export function SignOutButton(){
    return <button onClick={() => signOut()}>Sign Out</button>;
}