import React from 'react';
import { NavLink } from 'react-router-dom';

export default function BottomNav() {
  return (
    <div className="fixed bottom-6 left-0 w-full flex justify-center z-50">
      <nav className="flex items-center justify-around bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] px-4 py-3 w-[90%] max-w-sm">
        
        <NavLink 
          to="/terminal" 
          className={({ isActive }) => `flex items-center justify-center w-12 h-12 rounded-full transition-colors ${isActive ? 'bg-[#FF5C00] text-white shadow-md' : 'text-[#3E2C26] hover:bg-gray-100'}`}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>home</span>
        </NavLink>

        <NavLink 
          to="/archive" 
          className={({ isActive }) => `flex items-center justify-center w-12 h-12 rounded-full transition-colors ${isActive ? 'bg-[#FF5C00] text-white shadow-md' : 'text-[#3E2C26] hover:bg-gray-100'}`}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>filter_alt</span>
        </NavLink>

        <NavLink 
          to="/profile" 
          className={({ isActive }) => `flex items-center justify-center w-12 h-12 rounded-full transition-colors ${isActive ? 'bg-[#FF5C00] text-white shadow-md' : 'text-[#3E2C26] hover:bg-gray-100'}`}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
        </NavLink>

        <NavLink 
          to="/settings" 
          className={({ isActive }) => `flex items-center justify-center w-12 h-12 rounded-full transition-colors ${isActive ? 'bg-[#FF5C00] text-white shadow-md' : 'text-[#3E2C26] hover:bg-gray-100'}`}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>settings</span>
        </NavLink>

      </nav>
    </div>
  );
}
