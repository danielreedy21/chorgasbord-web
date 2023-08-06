import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About Us',
    description: 'About Chorgusbord',
}

export default function About() {
    return (
        <main className="mt-16">
            <h1>About Chorgasbord</h1>
            <p>This is an application that lets users view and create timed chores and tasks</p>
        </main>
    );
}