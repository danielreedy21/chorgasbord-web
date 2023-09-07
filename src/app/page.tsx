import ChoreSquare from "../components/ChoreSquare"
import AddChoreSquare from "../components/AddChoreSquare"
import Link from 'next/link'
import ChoreBoard from '../components/ChoreBoard'

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="grid place-content-center pt-12 ml-4 lg:ml-0">
        <h1 className="text-3xl mt-12 mb-6
                      lg:text-7xl"
        >Welcome to Chorgusbord!</h1>
        <h3 className="text-2xl my-6
                      lg:text-3xl"
        >Keep track of and share repeated tasks!</h3>
        <Link href="/myboard" className="text-black text-xl bg-gray-200 w-fit h-fit p-3 text-center rounded-lg mt-24">Go to your board!</Link>
        <Link href="/users/clkx1kqhz000060ymd6yuy0zj" className="text-black text-xl bg-gray-200 w-fit h-fit p-3 text-center rounded-lg mt-8">View an example board!</Link>
      </section>
      {/* <hr className="mt-24"/>
      <section className="flex flex-col w-72 mx-auto
                          md:w-128 lg:w-256">
        <p className="mt-24">{"Thank you for trying out Chorgasbord! As an example, here is the developer\'s Board. Am I keeping up with my tasks?"}</p>
      </section>
      <h3 className="mt-10 text-4xl my-4 w-72 mx-auto
                    md:w-128 lg:w-256"
      >{`Daniel\'s Board:`}</h3>
      {/* @ts-ignore */}
      {/* <ChoreBoard userId={'clkx1kqhz000060ymd6yuy0zj'}></ChoreBoard> */}
    </main>
  )
}
