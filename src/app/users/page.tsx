import { prisma } from "../../lib/prisma"
import UserCard from '../../components/UserCard'
import ScrollToTop from "../../components/ScrollToTop"

export default async function Users() {

    const users = await prisma.user.findMany();



    return(
        <main className="min-h-screen mt-16">
            <ScrollToTop></ScrollToTop>
            <h1 className="text-3xl mb-3 px-2">Users</h1>
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