import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from '../pages/home/sections/navbar'
import Logo from './Logo';
import { useAppContext } from '../contexts/AppContext';

export default function Layout() {
  const { isDark } = useAppContext();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  
  // to scroll to the top of the screen when navigation between pages
  const path = useLocation().pathname;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [path])

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 5;
        return prev;
      });
    }, 100);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {/* background squares */}
      <svg className="fixed inset-0 w-full h-full text-alpha/20">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40"
              fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      
      {loading ? (
        <div className="h-[100vh] bg-black text-white flex flex-col items-center justify-center text-2xl">
          <Logo size="w-50 h-50" />
          <p className="mb-4">Loading... {progress}%</p>
          <div className="w-80 h-3 bg-gray-700 rounded overflow-hidden">
            <div
              className="h-full bg-alpha transition-all duration-200 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      ) : (
        <div className={`min-h-screen transition-colors duration-300 ${
          isDark ? 'bg-[#050505] text-[#E1E1E1]' : 'bg-[#f8f8f8] text-[#0A0A0A]'
        }`}>
          <Navbar />
          <div className="pt-20">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
}