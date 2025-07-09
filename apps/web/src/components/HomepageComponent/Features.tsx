// components/Features.tsx
export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose ProductivityAI?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-blue-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Instant AI Tools</h3>
              <p className="text-gray-600">Ready-to-use AI tools that work out of the box. No complex setup or training required.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}