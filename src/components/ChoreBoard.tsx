import ChoreSquare from './ChoreSquare'
import AddChoreSquare from './AddChoreSquare'

interface Props {
    user: string;
}

export default function ChoreBoard({user}:Props) {
    return (
        <div className="grid grid-cols-4 gap-4 mx-4 place-content-center space-between">
            <ChoreSquare></ChoreSquare>
            <ChoreSquare></ChoreSquare>
            <ChoreSquare></ChoreSquare>
            <ChoreSquare></ChoreSquare>
            <ChoreSquare></ChoreSquare>
            <ChoreSquare></ChoreSquare>
            <ChoreSquare></ChoreSquare>
            <ChoreSquare></ChoreSquare>
            <AddChoreSquare/>
        </div>
    );
}