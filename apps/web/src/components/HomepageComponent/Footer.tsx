// components/Footer.tsx
export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-blue-400 font-bold mb-4">ProductivityAI</h4>
            <p>Empowering small businesses with AI-powered productivity tools.</p>
          </div>
          <div>
            <h4 className="text-blue-400 font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#features">Features</a></li>
              <li><a href="#tools">Tools</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-blue-400 font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-blue-400 font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2025 ProductivityAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}