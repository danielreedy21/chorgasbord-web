'use client'
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { start } from 'repl';
import { deleteChore } from '../app/myboard/actions'

interface Props {
    title: string;
}

export default function DeleteChore({title}: Props) {
    const router = useRouter();
    const [isFetching, setIsFetching] = useState(false);
    const [isPending, startTransition] = useTransition();
    const isMutating = isFetching || isPending;



    // const deleteChore = async () => {

    //     setIsFetching(true);

    //     const res = await fetch(`/api/chores?title=${title}`, {
    //         method: 'DELETE',
    //     });

    //     setIsFetching(false);

    //     startTransition(()=> router.refresh())
    //     // revalidatePath('/myboard');
    //     // router.refresh()
    // }

    return (
        <button 
            onClick={() => startTransition(() => deleteChore(title))}
            className="bg-red-700 w-[40%] min-h-8 rounded-md shadow-md absolute bottom-1 right-1
                    lg:hidden lg:group-hover:inline-block lg:h-14"
        >
            {!isMutating ? 'X': '...'}
        </button>
    );
}