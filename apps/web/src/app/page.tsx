import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, Noto Sans, sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between border-b border-solid border-b-[#f0f2f5] px-10 py-3">
          <div className="flex items-center gap-4 text-[#111418]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor" />
              </svg>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">ProductivityPro</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <nav className="flex items-center gap-9">
              <Link href="#" className="text-sm font-medium leading-normal">Features</Link>
              <Link href="#" className="text-sm font-medium leading-normal">Pricing</Link>
              <Link href="#" className="text-sm font-medium leading-normal">Resources</Link>
            </nav>
            <div className="flex gap-2">
              <button className="h-10 px-4 rounded-lg bg-[#0c77f2] text-white text-sm font-bold">Get Started</button>
              <button className="h-10 px-4 rounded-lg bg-[#f0f2f5] text-[#111418] text-sm font-bold">Log In</button>
            </div>
          </div>
        </header>

        <main className="px-10 md:px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col max-w-[960px] flex-1">
            {/* Hero Section */}
            <section className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-lg items-start justify-end px-4 pb-10 md:px-10"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(https://lh3.googleusercontent.com/aida-public/AB6AXuBnmTuGqmZMIUnjisruiYPH0Qs2DICyo7eozRBlzd9cnu7Zx7Fh3fAPx7Nn1yEwLK2C5F4JDEmbvJsv2fuhcsK5D989NcUpOyBO_hyBdBtbFirhEtNBa8kXPm6ismjrETvArKGZf1_5uc--tTIdRj6zqMR-jlJZTMy-QBlEo4fyhZzZfq4JVB3au3pN1WKN_qiB7pNR9gypnXjHtCO-MqBwZKvqZlN8zDrgaONnUeNbJh9I0Lfi1BW-BdcYgfudYxPpnCFP4ZjQHboT)'
              }}
            >
              <div className="flex flex-col gap-2 text-left text-white">
                <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                  Boost Your Business with AI-Powered Productivity
                </h1>
                <h2 className="text-sm md:text-base font-normal">
                  ProductivityPro is the all-in-one platform designed to help small business owners streamline workflows and automate tasks.
                </h2>
              </div>
              <div className="flex gap-3 flex-wrap">
                <button className="h-10 md:h-12 px-4 md:px-5 rounded-lg bg-[#0c77f2] text-white text-sm md:text-base font-bold">
                  Get Started Free
                </button>
                <button className="h-10 md:h-12 px-4 md:px-5 rounded-lg bg-[#f0f2f5] text-[#111418] text-sm md:text-base font-bold">
                  Explore Features
                </button>
              </div>
            </section>

            {/* Features Section */}
            <section className="flex flex-col gap-10 px-4 py-10">
              <div className="flex flex-col gap-4">
                <h2 className="text-[32px] md:text-4xl font-bold leading-tight max-w-[720px]">Key Features</h2>
                <p className="text-base font-normal max-w-[720px]">
                  ProductivityPro offers a suite of powerful tools to enhance your business operations.
                </p>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
                {/* Repeat for each feature card */}
                {/* Card 1 */}
                <div className="flex flex-col gap-3 p-4 border rounded-lg bg-white border-[#dbe0e6]">
                  <div className="text-[#111418]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                      <path d="..." />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-base font-bold leading-tight">AI-Powered Task Automation</h3>
                    <p className="text-sm text-[#60748a]">Automate repetitive tasks with our intelligent assistant.</p>
                  </div>
                </div>
                {/* Add other cards similarly... */}
              </div>
            </section>

            {/* CTA Section */}
            <section className="flex flex-col justify-end gap-6 px-4 py-10 text-center">
              <h2 className="text-[32px] md:text-4xl font-bold leading-tight max-w-[720px] mx-auto">
                Ready to Transform Your Business?
              </h2>
              <p className="text-base font-normal max-w-[720px] mx-auto">
                Join thousands of small business owners already experiencing the power of ProductivityPro.
              </p>
              <div className="flex justify-center">
                <button className="h-10 md:h-12 px-4 md:px-5 rounded-lg bg-[#0c77f2] text-white text-sm md:text-base font-bold">
                  Get Started Free
                </button>
              </div>
            </section>
          </div>
        </main>

        <footer className="flex justify-center bg-white">
          <div className="flex flex-col text-center px-5 py-10 gap-6">
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="#" className="text-[#60748a] text-base">Terms of Service</Link>
              <Link href="#" className="text-[#60748a] text-base">Privacy Policy</Link>
              <Link href="#" className="text-[#60748a] text-base">Contact Us</Link>
            </div>
            <p className="text-[#60748a] text-base">© 2024 ProductivityPro. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

