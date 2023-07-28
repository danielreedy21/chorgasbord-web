import ChoreSquare from "../components/ChoreSquare";

export default function Home() {
  return (
    <main>

      <h1 className="text-5xl">Hello World</h1>
      <div className="grid grid-cols-4 gap-1 place-content-center">
        <ChoreSquare></ChoreSquare>
        <ChoreSquare></ChoreSquare>
        <ChoreSquare></ChoreSquare>
        <ChoreSquare></ChoreSquare>
        <ChoreSquare></ChoreSquare>
        <ChoreSquare></ChoreSquare>
        <ChoreSquare></ChoreSquare>
        <ChoreSquare></ChoreSquare>
      </div>
    </main>
  )
}
