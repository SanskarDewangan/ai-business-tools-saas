'use client';

import { SignedIn, useClerk, UserButton } from "@clerk/nextjs";
import { use } from "react";

const Sidebar = () => {
  const user = useClerk().user?.fullName || "User";
  const navItems = [
    { label: 'Dashboard', icon: '🏠' },
    { label: 'AI Tools', icon: '✨' },
    { label: 'Templates', icon: '📄' },
    { label: 'Settings', icon: '⚙️' },
    { label: 'Help', icon: '❓' },
  ];

  return (
    <aside className="w-80 flex flex-col bg-white p-4 min-h-[700px] justify-between">
      <div className="flex gap-3 items-center mb-6">
        <div><SignedIn><UserButton appearance={{elements:{userButtonAvatarBox:{width:50,height:50}}}}/></SignedIn></div>
        {/* <div className="rounded-full size-10 bg-cover bg-center" style={{
          backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA3S2Q3EpW_P4Kj_pdXauFBALUxlcC7l-lp0g_O8UUIo-6LnSuX3DAYtR14KZlZzXgqYkqOHdaajWAjS7_vQFCMEXKvYlYqlqymvF66CH4gDGUiGTUFVvXXj1MF1C32HFztz1jvue5gm5-YvmP99h40UPcpoC64GgFH9JllVdzdTR6temXDowPqSIEbGqILlQd4s1QvpamSW1Cr5iMWTXnqm3VklcdCtsAfobPKBwxmSPbP7R15xLSu1ttzCv-cUCe7_uCTEvH6e4z0")'
        }} /> */}
        <div>
          <h1 className="text-base font-medium text-[#111418]">{user}</h1>
          <p className="text-sm text-[#60748a]">Personal</p>
        </div>
      </div>
      <nav className="flex flex-col gap-2">
        {navItems.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
              item.label === 'Dashboard' ? 'bg-[#f0f2f5]' : ''
            }`}
          >
            <span>{item.icon}</span>
            <p className="text-sm font-medium text-[#111418]">{item.label}</p>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
