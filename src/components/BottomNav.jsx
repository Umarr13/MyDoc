import React from 'react';
import { NavLink } from 'react-router-dom';

export default function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around h-16 bg-background border-t border-border-default z-50">
      <NavLink 
        to="/terminal"
        className={({ isActive }) => 
          `flex flex-col items-center justify-center p-2 h-full w-full transition-colors ${
            isActive ? 'bg-primary-container text-on-primary-container active:bg-primary active:text-on-primary' : 'text-on-surface-variant hover:bg-surface-variant'
          }`
        }
      >
        <span className="material-symbols-outlined text-headline-lg-mobile font-headline-lg-mobile" style={{ fontVariationSettings: "'FILL' 1" }}>
          terminal
        </span>
      </NavLink>

      <NavLink 
        to="/archive"
        className={({ isActive }) => 
          `flex flex-col items-center justify-center p-2 h-full w-full transition-colors ${
            isActive ? 'bg-primary-container text-on-primary-container active:bg-primary active:text-on-primary' : 'text-on-surface-variant hover:bg-surface-variant'
          }`
        }
      >
        <span className="material-symbols-outlined text-headline-lg-mobile font-headline-lg-mobile" style={{ fontVariationSettings: "'FILL' 1" }}>
          folder
        </span>
      </NavLink>

      <NavLink 
        to="/health"
        className={({ isActive }) => 
          `flex flex-col items-center justify-center p-2 h-full w-full transition-colors ${
            isActive ? 'bg-primary-container text-on-primary-container active:bg-primary active:text-on-primary' : 'text-on-surface-variant hover:bg-surface-variant'
          }`
        }
      >
        <span className="material-symbols-outlined text-headline-lg-mobile font-headline-lg-mobile" style={{ fontVariationSettings: "'FILL' 1" }}>
          monitor_heart
        </span>
      </NavLink>

      <NavLink 
        to="/profile"
        className={({ isActive }) => 
          `flex flex-col items-center justify-center p-2 h-full w-full transition-colors ${
            isActive ? 'bg-primary-container text-on-primary-container active:bg-primary active:text-on-primary' : 'text-on-surface-variant hover:bg-surface-variant'
          }`
        }
      >
        <span className="material-symbols-outlined text-headline-lg-mobile font-headline-lg-mobile" style={{ fontVariationSettings: "'FILL' 1" }}>
          map
        </span>
      </NavLink>
    </nav>
  );
}
