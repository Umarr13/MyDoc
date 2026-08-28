import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import TerminalView from './components/TerminalView';
import BottomNav from './components/BottomNav';

// Placeholders for Task 6
function PlaceholderView({ title }) {
  return (
    <div className="bg-background h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center font-display-lg text-on-background">
        {title} (Coming Soon)
      </div>
      <BottomNav />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/terminal" element={<TerminalView />} />
        <Route path="/archive" element={<PlaceholderView title="Archive" />} />
        <Route path="/health" element={<PlaceholderView title="Health" />} />
        <Route path="/profile" element={<PlaceholderView title="Profile" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
