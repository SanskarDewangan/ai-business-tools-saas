// components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm transition-all duration-300">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">ProductivityAI</div>
        <ul className="hidden md:flex gap-8">
          <li><Link href="#features" className="text-gray-700 hover:text-blue-600">Features</Link></li>
          <li><Link href="#tools" className="text-gray-700 hover:text-blue-600">Tools</Link></li>
          <li><Link href="#pricing" className="text-gray-700 hover:text-blue-600">Pricing</Link></li>
          <li><Link href="#contact" className="text-gray-700 hover:text-blue-600">Contact</Link></li>
        </ul>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
          Get Started Free
        </button>
      </nav>
    </header>
  );
}