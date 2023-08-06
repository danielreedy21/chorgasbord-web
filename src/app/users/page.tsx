import { prisma } from "../../lib/prisma"
import UserCard from '../../components/UserCard'

export default async function Users() {

    const users = await prisma.user.findMany();



    return(
        <main className="mt-12 grid">
            {users.map((user) => {
                return (
                    <UserCard key={user.id} {...user}></UserCard>
                    // <div>
                    //     <h1>{user.name}</h1>
                    //     <p>{user.age}</p>
                    //     <p>{user.email}</p>
                    // </div>
                );
            })}
        </main>
    );
}