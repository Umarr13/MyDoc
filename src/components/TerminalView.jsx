import React from 'react';
import BottomNav from './BottomNav';

export default function TerminalView() {
  return (
    <div className="bg-background text-on-background font-body-md h-screen flex flex-col overflow-hidden">
      {/* TopAppBar */}
      <header className="w-full top-0 sticky bg-background border-b border-border-default flex items-center justify-between px-container-margin h-16 z-10 transition-colors duration-150">
        <div className="flex items-center gap-base text-primary">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
          <span className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">MyDoc</span>
        </div>
        <div className="flex items-center gap-base">
          <button className="p-2 rounded-lg hover:bg-surface-variant hover:text-on-surface transition-colors duration-150">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="flex-1 overflow-y-auto px-container-margin md:px-[64px] py-stack-md flex flex-col bg-surface-container-lowest pb-32">
        <div className="w-full flex justify-center mb-stack-lg border-b border-border-default pb-stack-sm">
          <h1 className="font-headline-lg text-headline-lg font-bold uppercase text-on-surface">TODAY</h1>
        </div>

        {/* Terminal Log */}
        <div className="flex-1 flex flex-col gap-stack-lg mb-stack-md font-label-md text-label-md">
          {/* System Entry */}
          <div className="flex gap-gutter items-start">
            <div className="text-tertiary opacity-70 shrink-0 w-16 pt-1">[09:00]</div>
            <div className="flex-1 border-l-2 border-primary pl-gutter py-1">
              <span className="text-primary font-bold">SYS &gt; </span>
              <span className="text-on-surface">Initialization sequence complete. Secure connection established.</span>
            </div>
          </div>

          {/* User Entry */}
          <div className="flex gap-gutter items-start">
            <div className="text-tertiary opacity-70 shrink-0 w-16 pt-1">[09:05]</div>
            <div className="flex-1 border-l-2 border-border-default pl-gutter py-1">
              <span className="text-on-surface font-bold">USR &gt; </span>
              <span className="text-on-surface">Requesting manifest sync for local workspace /var/data/workspace_alpha.</span>
            </div>
          </div>

          {/* System Entry with Payload */}
          <div className="flex gap-gutter items-start">
            <div className="text-tertiary opacity-70 shrink-0 w-16 pt-1">[09:06]</div>
            <div className="flex-1 border-l-2 border-primary pl-gutter py-1">
              <span className="text-primary font-bold">SYS &gt; </span>
              <span className="text-on-surface mb-stack-sm block">Sync initiated. Retrieving object tree...</span>
              <div className="bg-surface-container-low rounded-lg p-stack-sm border border-border-default text-label-sm font-label-sm overflow-x-auto text-on-surface-variant">
                &gt; Fetching objects: 100% (45/45), done.<br/>
                &gt; Resolving deltas: 100% (12/12), done.<br/>
                &gt; Updating local files: 100% (2/2), done.<br/>
                &gt; Status: IN_SYNC
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Input Field Area */}
      <div className="fixed bottom-16 md:bottom-0 left-0 w-full bg-background border-t border-border-default p-container-margin flex gap-gutter items-center z-20">
        <div className="flex-1 relative flex items-center">
          <span className="absolute left-4 text-primary font-bold font-label-md text-label-md">USR &gt;</span>
          <input 
            type="text" 
            placeholder="Enter command..." 
            className="w-full bg-surface-container-lowest border border-border-default rounded-lg text-on-surface font-label-md text-label-md pl-16 py-3 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none placeholder:text-text-placeholder transition-shadow" 
          />
        </div>
        <button className="bg-primary text-on-primary rounded-lg p-3 hover:bg-on-primary-fixed-variant transition-colors duration-150 flex items-center justify-center shadow-sm">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
        </button>
      </div>

      {/* Bottom Nav */}
      <BottomNav />
    </div>
  );
}
