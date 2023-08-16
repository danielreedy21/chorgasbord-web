'use client'
import { useState } from 'react'

interface Props {
    title: string;
}

export default function DeleteChore({title}: Props) {
    const [isFetching, setIsFetching] = useState(false);

    const deleteChore = async () => {

        setIsFetching(true);

        const res = await fetch(`/api/chores?title=${title}`, {
            method: 'DELETE',
        });

        setIsFetching(false);

        return res.json()
    }

    return (
        <button onClick={deleteChore}>Delete Chore</button>
    );
}