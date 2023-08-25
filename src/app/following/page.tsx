import { Metadata } from "next";
import { getServerSession } from 'next-auth'
import { authOptions } from "../api/auth/[...nextauth]/route"
import { prisma } from "../../lib/prisma"
import ScrollToTop from "../../components/ScrollToTop"
import UserCard from "../../components/UserCard"

export const metadata: Metadata = {
    title: 'About Us',
    description: 'About Chorgusbord',
}

export const dynamic = "force-dynamic"
export const revalidate = 0

export default async function Following() {

    const session = await getServerSession(authOptions)
    const userId = session?.user.id
    if (!session) {
        return (
            <main className="mt-16 min-h-screen">
                <h3> Please Log In to Use this Feature! </h3>
            </main>
        )
    }
    if (!userId || userId == 'undefined') {
        return (
            <main className="mt-16 min-h-screen">
                <h3>Issue with account.</h3>
            </main>
        )
    }
    


    const followRelationships = await prisma.follows.findMany({
        where: {
            followerId: userId
        }
    });

    const followIds = followRelationships.map((rel) => rel.followingId)

    const usersFollowing = await prisma.user.findMany({
        where:{
            id: {
                in: followIds
            }
        }
    })

    return (
        <main className="min-h-screen mt-16">
            <ScrollToTop></ScrollToTop>
            <h1 className="text-3xl mb-3 px-2">Followed Users</h1>
            {usersFollowing.length == 0 ? <p>Not currently following any users</p>: <p className="hidden"></p>}
            <div className="grid grid-flow-row grid-cols-2 place-items-center gap-y-4
                            md:grid-cols-3
                            lg:grid-cols-4
            ">
                {usersFollowing.map((user) => {
                    return (
                        <UserCard key={user.id} {...user}></UserCard>
                    );
                })}
            </div>
        </main>
    );
}