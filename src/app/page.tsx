import ChoreSquare from "../components/ChoreSquare"
import AddChoreSquare from "../components/AddChoreSquare"
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="grid place-content-center pt-12">
        <h1 className="text-3xl mt-12 mb-6
                      lg:text-7xl"
        >Welcome to Chorgusbord!</h1>
        <h3 className="text-2xl my-6
                      lg:text-3xl"
        >Keep track of and share cyclical tasks!</h3>
        <Link href="/myboard" className="text-black text-2xl bg-white w-fit h-fit p-3 text-center rounded-md">Go to your board!</Link>
      </section>
      <p className="mx-12 mt-24">Hello, my name is Daniel and I am the creator of this application. Thank you for trying out Chorgasbord!</p>
      <p className="mx-12 mt-8">As an example, here is my Board. Am I doing well or slacking off?</p>
      <h3 className="mt-10 mx-12 text-4xl">Daniel`&apos;`s Board</h3>
    </main>
  )
}
