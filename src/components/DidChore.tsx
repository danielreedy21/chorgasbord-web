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
            className="bg-gray-100 w-[40%] min-h-8 rounded-md shadow-md absolute bottom-1 left-1
                    lg:hidden lg:group-hover:block"
        >
            {!isPending? 'Y': '...'}
        </button>
    )
}