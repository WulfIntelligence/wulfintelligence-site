import Header from "../components/Header"
import Footer from "../components/Footer"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-semibold mb-4">About</h1>
        <p className="text-gray-700">
          Wulf Intelligence helps small businesses use AI tools without the hype.
          We focus on simple, practical automations that save time and boost clarity.
        </p>
      </main>
      <Footer />
    </div>
  )
}
