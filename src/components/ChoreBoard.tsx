import ChoreSquare from './ChoreSquare'
import AddChoreSquare from './AddChoreSquare'
import AuthCheck from './AuthCheck'

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
            {/* <AuthCheck> */}
                <AddChoreSquare/>
            {/* </AuthCheck> */}
        </div>
    );
}