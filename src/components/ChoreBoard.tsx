'use client'

import ChoreSquare from './ChoreSquare'
import AddChoreSquare from './AddChoreSquare'
import AuthCheck from './AuthCheck'
import Modal from './AddChoreModal'
import {useState, useEffect} from 'react'
import Spinner from './Spinner'

interface Props {
    userId: string;
    getPrivate: boolean;
}


// const getChores = async (userId: string) => {

//     const body = {userId}

//     const res = await fetch('/api/chores', {
//         method: 'GET',
//         body: JSON.stringify(body),
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     })

//     const result = await res.json()
//     return result
// }

export default function ChoreBoard({userId, getPrivate}:Props) {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)


    useEffect(() => {
        fetch('/api/chores', {
            method: 'GET'
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) {
        return <Spinner></Spinner>
    } 
    if (!data) {
        return <p>missing data</p>
    }

    if (data) {
        console.log(data)

        return (
            // <div>data loaded</div>

            <div className="mx-auto w-256 mt-12">
                <div className="grid grid-cols-3 place-content-center gap-6">
                    {/* {data.map((chore) => {
                        return (
                            <ChoreSquare 
                                key={chore.title}
                                title={chore.title} 
                                description={chore.description} 
                                createdAt={chore.created_at}
                                updatedAt={chore.updated_at}
                                frequency={chore.frequency}
                            ></ChoreSquare>
                        );
                    })} */}
                    {/* <AddChoreSquare></AddChoreSquare> */}
                    {/* <Modal></Modal> */}
                </div>
            </div>
        );
    }

}