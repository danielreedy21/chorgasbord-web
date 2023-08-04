'use client';

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export function SignInButton() {
    const { data: session, status} = useSession();
    console.log(session, status);
    if (status === 'loading') {
        return <>...</>
    }

    if (status === 'authenticated') {
        if (session) {
            return (
                <>{session.user?.name} Signed In!</>
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