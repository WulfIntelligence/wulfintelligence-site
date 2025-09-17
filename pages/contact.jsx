import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow max-w-md mx-auto px-6 py-12">
        <h1 className="text-2xl font-semibold mb-4">Contact</h1>
        <form action="https://formspree.io/f/YOUR_ID" method="POST" className="space-y-4">
          <input name="name" placeholder="Name" className="w-full border px-3 py-2 rounded" required />
          <input type="email" name="email" placeholder="Email" className="w-full border px-3 py-2 rounded" required />
          <textarea name="message" placeholder="Message" className="w-full border px-3 py-2 rounded h-32" required />
          <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded">Send</button>
        </form>
      </main>
      <Footer />
    </div>
  )
}
