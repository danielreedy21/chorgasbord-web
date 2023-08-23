import ChoreSquare from './ChoreSquare'
import Spinner from './Spinner'
import { prisma } from '../lib/prisma'

interface Props {
    userId: string;
    // getPrivate: boolean;
}


export default async function ChoreBoard({userId}:Props) {

    const chores = await prisma.chore.findMany({
        where: {
            userId: userId,
            public: true
        }
    })

    return (
        <div 
            className="mx-auto w-72
                        lg:w-256 md:w-128"
        >
            <div 
                className="grid grid-cols-2 place-content-center gap-6
                            lg:grid-cols-3"
            >
                {chores.map((chore) => {
                    return (
                        <ChoreSquare 
                            key={chore.title}
                            mutable={false}
                            title={chore.title} 
                            description={chore.description} 
                            createdAt={chore.created_at}
                            updatedAt={chore.updated_at}
                            frequency={chore.frequency}
                        ></ChoreSquare>
                    );
                })}
            </div>
        </div>
    );
}
