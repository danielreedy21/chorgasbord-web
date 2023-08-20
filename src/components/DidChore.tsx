'use client';

import {didChore} from '../app/myboard/actions'
import {useTransition} from 'react'

interface Props {
    title: string;
}

export default function DidChore({title}: Props) {
    const [isPending, startTransition] = useTransition();


    return (
        <button 
            onClick={() => startTransition(() => didChore(title))}
            className="bg-gray-100 w-[40%] h-16 rounded-md shadow-md invisible group-hover:visible"
        >
            {!isPending? 'Completed Chore': '...'}
        </button>
    )
}