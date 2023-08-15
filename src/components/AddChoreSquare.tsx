'use client'

import ChoreBoard from "./ChoreBoard"
import {useSession} from 'next-auth/react'
import { data } from "autoprefixer"
import { stringifyError } from "next/dist/shared/lib/utils"
import React from "react"

interface Chore {
    title: string;
    description: string;
    created_at: Date;
    updated_at: Date;
    frequency: number;
    public: Boolean;
}


const addChore = async (chore: Chore) => {
    // e.preventDefault();
    chore.title = chore.title + Math.floor(Math.random() * 90000 + 10000).toString()
    const res = await fetch('/api/chores', {
        method: 'POST',
        body: JSON.stringify(chore),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    chore.title = chore.title.slice(0,9)

    await res.json()
}

export default function AddChoreSquare() {
    const chore: Chore = {
        title: 'new chore',
        description: 'testing out adding new chores',
        created_at: new Date(),
        updated_at: new Date(),
        frequency: 999,
        public: true
    }

    return (
        <div className= "bg-slate-50 h-32 text-black flex">Create new Chore!
            <button onClick={ () => addChore(chore)} className="">Add Chore</button>
        </div>
    );
}