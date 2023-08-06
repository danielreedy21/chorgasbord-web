import ChoreBoard from '../../components/ChoreBoard'
// import { useSession } from 'next-auth/react'

export default function MyBoard() {

    // const { data: session, status} = useSession();

    return (
        <main className="pt-16"> 
            <h3>My Board</h3>
            <ChoreBoard user="placeholder user"></ChoreBoard>
        </main>
    );
}