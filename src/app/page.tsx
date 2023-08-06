import ChoreSquare from "../components/ChoreSquare"
import AddChoreSquare from "../components/AddChoreSquare"

export default function Home() {
  return (
    <main className="pt-24 bg-gray-800">

      {/* <h1 className="text-5xl">Hello World</h1> */}
      <div className="grid grid-cols-4 gap-12 place-content-center">
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
    </main>
  )
}
