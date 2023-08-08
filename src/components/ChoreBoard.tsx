import ChoreSquare from './ChoreSquare'
import AddChoreSquare from './AddChoreSquare'
import AuthCheck from './AuthCheck'

interface Props {
    user: string | null | undefined;
}


// const getChores = async (userId: string) => {

//     const body = {userId}

//     const res = await fetch('/api/chores', {
//         method: 'GET',
//         body: JSON.stringify(body),
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     })

//     const result = await res.json()
//     return result
// }

export default function ChoreBoard({user}:Props) {
    // console.log(getChores(user))


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