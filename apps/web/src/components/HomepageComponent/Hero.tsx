// components/Hero.tsx
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center text-white overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
      <div className="absolute inset-0 opacity-20 animate-float">
        {/* Replace with actual SVG background */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">AI-Powered Productivity Tools for Small Business Success</h1>
          <p className="text-lg opacity-90 mb-6">Supercharge your business with intelligent automation.</p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
              Start Free Trial
            </button>
            <a href="#" className="border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition duration-300 inline-block">
              Watch Demo
            </a>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-2xl transform transition-transform hover:scale-[1.02]">
          <div className="flex gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg">📝 Product Listing Generator</div>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg">✉️ Sales Email Writer</div>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg">📊 Report Summarizer</div>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg">🔧 Chrome Extensions</div>
          </div>
        </div>
      </div>
    </section>
  );
}