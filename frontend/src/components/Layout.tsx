import React from "react";
import { X } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
  logoUrl: string;
  brandColor: string;
  branchName: string;
  isBookingPage?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  logoUrl,
  brandColor,
  branchName,
  isBookingPage,
}) => {
  return (
    <div
      className="min-h-screen font-sans"
      style={{ backgroundColor: isBookingPage ? "#f2efe9" : "#ffffff" }}
    >
      <header className="fixed top-0 w-full h-[70px] flex justify-between items-center px-[5%] bg-white/90 backdrop-blur-md border-b border-black/5 z-[1000]">
        <a href="/">
          <img src={logoUrl} alt={branchName} className="h-9 lg:h-11" />
        </a>
        {isBookingPage ? (
          <a
            href="/"
            className="flex items-center gap-1 font-bold text-sm"
            style={{ color: brandColor }}
          >
            <X size={18} /> 예약 취소
          </a>
        ) : (
          <a
            href="./booking"
            className="px-6 py-2 rounded-full text-white font-extrabold text-sm transition-transform hover:scale-105"
            style={{ backgroundColor: brandColor }}
          >
            예약하기
          </a>
        )}
      </header>
      <main className="pt-[70px]">{children}</main>
      <footer className="py-12 text-center text-[10px] tracking-widest text-gray-400 border-t border-gray-100">
        &copy; 2026 FOOTBALL GROUND {branchName.toUpperCase()}. ALL RIGHTS
        RESERVED.
      </footer>
    </div>
  );
};

export default Layout;
