import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-4xl font-bold">Wulf Intelligence</h1>
          <p className="mt-4 text-gray-600">
            Simple AI automation & consulting — no jargon, just results.
          </p>
          <div className="mt-6 space-x-4">
            <a href="/contact" className="px-5 py-2 bg-blue-600 text-white rounded">Contact</a>
            <a href="/about" className="px-5 py-2 border rounded">About</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
