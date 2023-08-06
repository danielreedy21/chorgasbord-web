import { prisma } from "../../lib/prisma"
import UserCard from '../../components/UserCard'

export default async function Users() {

    const users = await prisma.user.findMany();



    return(
        <main className="mt-16 grid grid-flow-col grid-cols-4 place-items-center">
            {users.map((user) => {
                return (
                    <UserCard key={user.id} {...user}></UserCard>
                );
            })}
        </main>
    );
}