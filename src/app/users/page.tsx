import { prisma } from "../../lib/prisma"
import UserCard from '../../components/UserCard'

export default async function Users() {

    const users = await prisma.user.findMany();



    return(
        <main className="min-h-screen mt-16">
            <h1 className="text-3xl">Users</h1>
            <div className="grid grid-flow-col grid-cols-4 place-items-center">
                {users.map((user) => {
                    return (
                        <UserCard key={user.id} {...user}></UserCard>
                    );
                })}
            </div>
        </main>
    );
}