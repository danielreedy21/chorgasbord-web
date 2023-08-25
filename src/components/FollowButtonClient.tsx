'use client'

import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import {useState, useTransition, useEffect} from "react"
import {useSession} from "next-auth/react"
import { revalidateFollowingPage } from "../app/following/actions"


interface Props {
    targetUserId: string;
    isFollowing: boolean;
}

export default function FollowButtonClient({targetUserId, isFollowing}: Props) {
    const { data: session, status } = useSession()
    const [isFetching, setIsFetching] = useState(false)
    const [isFollowingAfter, setIsFollowingAfter] = useState(isFollowing)
    const [isPending, startTransition] = useTransition();
    const isMutating = isFetching || isPending;



    // checks following status. should return boolean
    const checkFollow = async () => {
        setIsFetching(true);

        const res = await fetch(`../api/follow?targetUserId=${targetUserId}`, {
            method: 'GET',
        });

        
        setIsFetching(false);
        console.log("Check Follow Result:" + res)
        return res.json()
    }

    // follow target user
    const follow = async () => {
        setIsFetching(true);

        const res = await fetch('/api/follow', {
            method: 'POST',
            body: JSON.stringify({ targetUserId }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        setIsFetching(false);

        console.log("Follow Result:", res)
        if (res.ok) {
            setIsFollowingAfter(true);
        }

    }

    // unfollow target user
    const unfollow = async () => {
        setIsFetching(true);

        const res = await fetch(`/api/follow?targetUserId=${targetUserId}`, {
            method: 'DELETE',
        });

        setIsFetching(false);

        console.log("Check Unfollow Result:" + res)
        if (res.ok) {
            setIsFollowingAfter(false);
        }
    }



    if (isFollowingAfter){
        return(
            <button onClick={unfollow} className="bg-white text-black rounded-md shadow-md self-center p-3">
                {!isMutating ? 'Unfollow': '...'}
            </button>
        );
    } else {
        return(
            <button onClick={follow} className="bg-white text-black rounded-md shadow-md self-center p-3">
                {!isMutating ? 'Follow': '...'}
            </button>
        );
    }
}