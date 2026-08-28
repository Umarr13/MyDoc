import React from 'react';
import BottomNav from './BottomNav';

export default function ProfileView() {
  return (
    <div className="bg-[#FFF8F6] min-h-screen pb-32 font-body-md text-on-background relative">
      <header className="flex items-center justify-center p-6 relative">
        <button className="absolute left-6 text-on-background hover:bg-surface-variant p-2 rounded-full transition-colors">
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'wght' 600" }}>chevron_left</span>
        </button>
        <h1 className="font-bold text-[18px]">Edit Profile</h1>
      </header>

      <main className="px-6 flex flex-col items-center">
        {/* Profile Picture */}
        <div className="relative mb-8 mt-4">
          <div className="w-[100px] h-[100px] rounded-full border-[3px] border-[#3E2C26] overflow-hidden bg-gray-200">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <button className="absolute bottom-0 right-0 bg-[#FF5C00] text-white w-8 h-8 flex items-center justify-center rounded-full shadow-md border-2 border-[#FFF8F6] hover:bg-[#E05200] transition-colors">
            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>edit</span>
          </button>
        </div>

        {/* Form Fields */}
        <div className="w-full space-y-5 max-w-sm">
          <div>
            <label className="block text-[14px] font-bold text-[#271812] mb-2">Neural Link</label>
            <input type="text" defaultValue="Direct cortical integration" className="w-full border border-gray-300 rounded-[14px] p-4 text-[#5b4137] bg-white focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:border-transparent shadow-sm" />
          </div>

          <div>
            <label className="block text-[14px] font-bold text-[#271812] mb-2">Archive Rules</label>
            <div className="relative">
              <input type="text" defaultValue="Automated data compression" className="w-full border border-gray-300 rounded-[14px] p-4 text-[#5b4137] bg-white focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:border-transparent shadow-sm pr-12" />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-500">calendar_today</span>
            </div>
          </div>

          <div>
            <label className="block text-[14px] font-bold text-[#271812] mb-2">Security Protocols</label>
            <div className="relative">
              <input type="text" defaultValue="Review access logs" className="w-full border border-gray-300 rounded-[14px] p-4 text-[#5b4137] bg-white focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:border-transparent shadow-sm pr-12" />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-500">location_on</span>
            </div>
          </div>

          <div>
            <label className="block text-[14px] font-bold text-[#271812] mb-2">About MyDoc</label>
            <div className="relative">
              <input type="text" defaultValue="Version info, licenses" className="w-full border border-gray-300 rounded-[14px] p-4 text-[#5b4137] bg-white focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:border-transparent shadow-sm pr-12" />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-500">arrow_drop_down</span>
            </div>
          </div>
        </div>

        <button className="w-full max-w-sm mt-8 bg-[#271812] text-white font-bold py-4 rounded-[14px] hover:bg-[#3E2C26] transition-colors shadow-md">
          SAVE CHANGES
        </button>
      </main>

      <BottomNav />
    </div>
  );
}
