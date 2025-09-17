export default function Header() {
  return (
    <header className="border-b">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="font-semibold">Wulf Intelligence</a>
        <nav className="space-x-4 text-sm">
          <a href="/about">About</a>
          <a href="/contact" className="px-3 py-1 border rounded">Contact</a>
        </nav>
      </div>
    </header>
  )
}
