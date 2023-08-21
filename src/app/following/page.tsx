import { Metadata } from "next";
import { getServerSession } from 'next-auth'
import { authOptions } from "../api/auth/[...nextauth]/route"

export const metadata: Metadata = {
    title: 'About Us',
    description: 'About Chorgusbord',
}

export default async function About() {

    const session = await getServerSession(authOptions)
    const userId = session?.user.id
    if (!session) {
        return (
            <main className="mt-16 min-h-screen">
                <h3> Please Log In to Use this Feature! </h3>
            </main>
        )
    }
    if (!userId || userId == 'undefined') {
        return (
            <main className="mt-16 min-h-screen">
                <h3>Issue with account.</h3>
            </main>
        )
    }

    return (
        <main className="min-h-screen mt-16">
            <h1>Following:</h1>
            <p>This section will showcase the users that you are following</p>
            <p>The first followers you see are your favorited users</p>
        </main>
    );
}