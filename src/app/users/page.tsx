import { prisma } from "../../lib/prisma"


export default async function Users() {

    const users = await prisma.user.findMany();



    return(
        <div className="grid">
            {users.map((user) => {
                return (
                    <div>
                        <h1>{user.name}</h1>
                        <p>{user.age}</p>
                        <p>{user.email}</p>
                    </div>
                );
            })}
        </div>
    );
}