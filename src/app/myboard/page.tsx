import ChoreBoard from '../../components/ChoreBoard'
import { getServerSession } from 'next-auth'
import { Metadata } from "next";
import { authOptions } from '../api/auth/[...nextauth]/route'
import { prisma } from '../../lib/prisma'
import ChoreSquare from '../../components/ChoreSquare'
import AddChoreModal from '../../components/AddChoreModal'


export const dynamic = 'force-dynamic';
export const fetchCache = "force-no-store";
export const revalidate = 0;

export const metadata: Metadata = {
    title: 'My Chorgasbord',
    description: 'Your Personal Chorgasbord',
}

// interface Chore {
//     userId: string;
//     title: string;
//     description: string;
//     created_at: string;
//     updated_at: string;
//     frequency: number;
//     public: boolean;
// }

export default async function MyBoard() {

    const session = await getServerSession(authOptions)
    const userId = session?.user.id
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

    const chores = await prisma.chore.findMany({
        where: {
            userId: userId
        }
    })

    return (
        <main className="pt-16"> 
            <h3 className="text-2xl ml-56">My Personal Chorgasbord</h3>
            {/* <p>User: {userId}</p> */}
            {/* <p>Chores: {JSON.stringify(chores)}</p> */}
            {/* <p>Length: {chores.length}</p> */}
            <div className="mx-auto w-256">
                <div className="grid grid-cols-3 place-content-center gap-6">
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
                    <AddChoreModal></AddChoreModal>
                </div>
            </div>
            {/* <ChoreBoard userId={userId} getPrivate={true}></ChoreBoard> */}
        </main>
    );
}