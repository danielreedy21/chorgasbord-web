'use client'

import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import {useState, useTransition, useEffect} from "react"
import {useSession} from "next-auth/react"


interface Props {
    targetUserId: string;
    isFollowing: boolean;
}

export default function FollowButtonClient({targetUserId, isFollowing}: Props) {
    const { data: session, status } = useSession()
    const [isFetching, setIsFetching] = useState(false)
    const [isFollowingAfter, setIsFollowingAfter] = useState(isFollowing)



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
            <button onClick={unfollow}>
                {!isFetching ? 'Unfollow': '...'}
            </button>
        );
    } else {
        return(
            <button onClick={follow}>
                {!isFetching ? 'Follow': '...'}
            </button>
        );
    }
}