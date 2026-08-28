import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/terminal', { replace: true });
    }, 2200);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-background h-screen w-full flex flex-col items-center justify-between p-container-margin overflow-hidden selection:bg-primary-container selection:text-on-primary-container">
      <div className="h-stack-lg w-full flex-none"></div>
      
      <main className="flex flex-col items-center justify-center flex-grow w-full max-w-4xl space-y-stack-md">
        <h1 className="font-display-lg text-display-lg text-on-background mb-stack-lg">
          MyDoc
        </h1>
        
        <div className="flex flex-col items-center space-y-stack-sm w-full">
          <div className="w-[240px] h-[6px] bg-transparent overflow-hidden relative border border-border-default rounded-full">
            <div className="h-full w-full bg-primary-container rounded-full animate-[loadProgress_2s_ease-in-out_forwards]"></div>
          </div>
          <p className="font-label-sm text-label-sm text-tertiary uppercase tracking-widest opacity-80">
            Initializing System...
          </p>
        </div>
      </main>

      <footer className="w-full flex justify-center pb-container-margin flex-none">
        <span className="font-label-sm text-label-sm text-tertiary">
          v0.0.1
        </span>
      </footer>

      <style>{`
        @keyframes loadProgress {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(-30%); }
            100% { transform: translateX(0%); }
        }
      `}</style>
    </div>
  );
}
