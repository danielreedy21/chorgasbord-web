import ChoreSquare from "../components/ChoreSquare"
import AddChoreSquare from "../components/AddChoreSquare"
import Link from 'next/link'

export default function Home() {
  return (
    <main className="grid place-content-center pt-12">
      <h1 className="text-7xl mt-12 mb-6">Welcome to Chorgusbord!</h1>
      <h3 className="text-3xl my-6">Keep track of and share cyclical tasks!</h3>
      <Link href="/myboard" className="">Go to your board!</Link>
    </main>
  )
}
