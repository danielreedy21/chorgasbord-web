'use client';

import {didChore} from '../app/myboard/actions'
import {useTransition} from 'react'

interface Props {
    title: string;
}

export default function DidChore({title}: Props) {
    const [isPending, startTransition] = useTransition();


    return (
        <button onClick={() => startTransition(() => didChore(title))}>
            {!isPending? 'Completed Chore': '...'}
        </button>
    )
}