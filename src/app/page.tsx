import ChoreSquare from "../components/ChoreSquare"
import AddChoreSquare from "../components/AddChoreSquare"
import Link from 'next/link'

export default function Home() {
  return (
    <main >
      <section className="grid place-content-center pt-12">
        <h1 className="text-7xl mt-12 mb-6">Welcome to Chorgusbord!</h1>
        <h3 className="text-3xl my-6">Keep track of and share cyclical tasks!</h3>
        <Link href="/myboard" className="text-black bg-white">Go to your board!</Link>
      </section>
      <p className="mx-12 mt-24">Hello, my name is Daniel and I am the creator of this application. Thank you for trying out Chorgasbord!</p>
      <p className="mx-12 mt-8">As an example, here is my Board. Am I doing well or slacking off?</p>
      <h3 className="mt-10 mx-12 text-4xl">Daniel's Board</h3>
    </main>
  )
}
