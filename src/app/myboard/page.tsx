import ChoreBoard from '../../components/ChoreBoard'
// import { useSession } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import { Metadata } from "next";
import { authOptions } from '../api/auth/[...nextauth]/route'
import { GetServerSideProps } from 'next'
import { prisma } from '../../lib/prisma'
import AddChoreSquare from '../../components/AddChoreSquare'
import ChoreSquare from '../../components/ChoreSquare'
import Modal from '../../components/AddChoreModal'


export const metadata: Metadata = {
    title: 'My Board',
    description: 'Your Personal Chorgusbord',
}

export default async function MyBoard() {

    // const { data: session, status} = useSession();
    const session = await getServerSession(authOptions)
    const userId = session?.user.id
    // console.log(session?.user.id)
    if (!session) {
        return (
            <main className="mt-16">
                <h3> Please Log In to Use this Feature! </h3>
            </main>
        )
    }
    if (!userId || userId == 'undefined') {
        return (
            <main className="mt-16">
                <h3>Issue with account.</h3>
            </main>
        )
    }

    if (userId) {
        const chores = await prisma.chore.findMany({
            where: {
                userId: userId
            }
        })

        return (
            <main className="pt-16"> 
                <h3>My Board</h3>
                <p>User: {userId}</p>
                {/* <p>Chores: {JSON.stringify(chores)}</p> */}
                <p>Length: {chores.length}</p>
                <div className="mx-auto w-256">
                    <div className="grid grid-cols-4 place-content-center gap-6">
                        {chores.map((chore) => {
                            return (
                                <ChoreSquare 
                                    title={chore.title} 
                                    description={chore.description} 
                                    createdAt={chore.created_at}
                                    updatedAt={chore.updated_at}
                                    frequency={chore.frequency}
                                ></ChoreSquare>
                            );
                        })}
                        {/* <AddChoreSquare></AddChoreSquare> */}
                        <Modal></Modal>
                    </div>
                </div>
                {/* <ChoreBoard user={session?.user.id}></ChoreBoard> */}
                {/* <ChoreBoard user="placehold user"></ChoreBoard> */}
            </main>
        );
    }
}