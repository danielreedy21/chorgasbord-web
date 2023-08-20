import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About Us',
    description: 'About Chorgusbord',
}

export default function About() {
    return (
        <main className="min-h-screen mt-16">
            <h1>Following:</h1>
            <p>This section will showcase the users that you are following</p>
            <p>The first followers you see are your favorited users</p>
        </main>
    );
}