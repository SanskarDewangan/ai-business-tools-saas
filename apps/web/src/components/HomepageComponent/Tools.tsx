// components/Tools.tsx
export default function Tools() {
  const tools = [
    "Product Listing Generator",
    "Sales Email Writer",
    "Report Summarizer",
    "Chrome Extensions",
    "Content Optimizer",
    "Social Media Assistant",
    "Customer Support Helper",
    "Market Research Tool"
  ];

  return (
    <section id="tools" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Powerful AI Tools at Your Fingertips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-shadow">
              <h4 className="text-blue-600 font-semibold mb-2">{tool}</h4>
              <p className="text-sm text-gray-600">Create compelling product descriptions, titles, and bullet points that convert browsers into buyers.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}