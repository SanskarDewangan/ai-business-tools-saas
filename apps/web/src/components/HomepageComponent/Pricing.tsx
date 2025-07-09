// components/Pricing.tsx
export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Choose Your Plan</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-8 rounded-2xl text-center">
            <h3 className="text-xl font-bold mb-2">Starter</h3>
            <div className="text-4xl font-extrabold mb-4">Free</div>
            <ul className="text-left space-y-2 mb-6 text-gray-700">
              <li>✓ 100 credits per month</li>
              <li>✓ Basic AI tools access</li>
              <li>✓ 3 Chrome extensions</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold">Get Started Free</button>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl text-center relative">
            <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-xs font-bold">Most Popular</span>
            <h3 className="text-xl font-bold mb-2">Professional</h3>
            <div className="text-4xl font-extrabold mb-4">$29<span className="text-sm font-normal">/month</span></div>
            <ul className="text-left space-y-2 mb-6 text-white/80">
              <li>✓ 2,000 credits per month</li>
              <li>✓ All AI tools access</li>
              <li>✓ All Chrome extensions</li>
              <li>✓ Priority support</li>
            </ul>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold">Start Trial</button>
          </div>
          <div className="bg-blue-50 p-8 rounded-2xl text-center">
            <h3 className="text-xl font-bold mb-2">Enterprise</h3>
            <div className="text-4xl font-extrabold mb-4">$99<span className="text-sm font-normal">/month</span></div>
            <ul className="text-left space-y-2 mb-6 text-gray-700">
              <li>✓ Unlimited credits</li>
              <li>✓ Custom AI models</li>
              <li>✓ White-label options</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
}