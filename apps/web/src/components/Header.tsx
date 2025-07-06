'use client';

import Link from 'next/link';
import SearchBar from './SearchBar';

const navLinks = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Prompt Packs', href: '/prompt-packs' },
  { label: 'Community', href: '/community' },
  { label: 'Help', href: '/help' },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-[#f0f2f5] px-10 py-3">
      {/* Left Section: Logo + Navigation */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 text-[#111418]">
          <div className="w-4 h-4">
            <svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" />
            </svg>
          </div>
          <h2 className="text-lg font-bold">ProductivityPro</h2>
        </div>
        <nav className="flex items-center gap-9 text-sm font-medium text-[#111418]">
          {navLinks.map(({ label, href }) => (
            <Link key={href} href={href} className="hover:underline">
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Right Section: Search + Notification + Avatar */}
      <div className="flex items-center gap-8">
        <SearchBar placeholder="Search" />
        <button
          type="button"
          aria-label="Notifications"
          className="flex items-center justify-center rounded-lg h-10 w-10 bg-[#f0f2f5]"
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
            <path d="M221.8,175.94C216.25,166.38...Z" />
          </svg>
        </button>
        <div
          className="w-10 h-10 rounded-full bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCFAOT5npMZ1YbcPbhv5Xwmj89edWp1_2ZNYRGtuWch7CTPptm5j73CBd1FZr8sAx0KmGG0BlpgRa6KRhf1vkSqyDnckboJHczXEQ49Jqm1Bh_A9fI_LR3NOV-3RIzXoS5TiZNfKy4n4Xr3or2pxCA6iD44oV8lZmN6fRhMQQbAJNZHef3PtPgij4pC56BsVllTFtwNdmiFw3R67sydLAEjXBFcRJiC5btihFflEXQ3m1_Zz8pyW-TxAyBYFd-EnWNei8z1CE40O9y9")',
          }}
        />
      </div>
    </header>
  );
}
