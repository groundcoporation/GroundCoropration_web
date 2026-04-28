import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronRight, Mail, Camera, Layout } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// --- 서브 컴포넌트 정의 ---
const MenuLink = ({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) => (
  <a
    href={href}
    onClick={onClick}
    className="text-2xl font-black italic hover:text-[#00d4ff] transition-colors"
  >
    {label}
  </a>
);

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#00d4ff] hover:text-[#050a14] hover:border-transparent transition-all cursor-pointer">
    {icon}
  </div>
);

const FooterSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <h4 className="text-[#00d4ff] text-[11px] font-black tracking-[0.3em] mb-8">
      {title}
    </h4>
    <div className="flex flex-col gap-4 text-sm text-white/40 font-medium">
      {children}
    </div>
  </div>
);

const BranchCard = ({
  title,
  subTitle,
  image,
  color,
  link,
}: {
  title: string;
  subTitle: string;
  image: string;
  color: string;
  link: string;
}) => (
  <Link
    to={link}
    className="group relative h-[400px] lg:h-[600px] rounded-[40px] overflow-hidden cursor-pointer block"
    data-aos="fade-up"
  >
    <img
      src={image}
      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
      alt={title}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-10 flex flex-col justify-end">
      <span
        className="text-sm font-bold tracking-widest mb-2"
        style={{ color }}
      >
        {subTitle}
      </span>
      <h3 className="text-4xl lg:text-6xl font-black italic tracking-tighter mb-6 text-white">
        {title}
      </h3>
      <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
        VIEW BRANCH <ChevronRight size={12} />
      </div>
    </div>
  </Link>
);

// --- 메인 컴포넌트 ---
const Main = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div
      className={`min-h-screen bg-[#050a14] text-white font-sans overflow-x-hidden ${isSidebarOpen ? "overflow-hidden" : ""}`}
    >
      {/* 사이드바 오버레이 */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1001]"
          onClick={toggleSidebar}
        />
      )}

      {/* 사이드바 */}
      <aside
        className={`fixed top-0 right-0 h-full w-[300px] bg-[#1e293b] z-[1002] p-10 transform transition-transform duration-500 ease-in-out ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={toggleSidebar}
          className="mb-10 text-white/50 hover:text-white"
        >
          <X size={30} />
        </button>
        <nav className="flex flex-col gap-6">
          <MenuLink href="#about" label="ABOUT" onClick={toggleSidebar} />
          <MenuLink href="#branches" label="BRANCHES" onClick={toggleSidebar} />
          <MenuLink href="#contact" label="CONTACT" onClick={toggleSidebar} />
        </nav>
      </aside>

      {/* 헤더 */}
      <nav className="fixed top-0 w-full h-[80px] flex justify-between items-center px-[8%] bg-[#050a14]/80 backdrop-blur-md z-[1000] border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#00d4ff] rounded-lg rotate-45 flex items-center justify-center">
            <div className="w-4 h-4 bg-[#050a14] rounded-sm -rotate-45"></div>
          </div>
          <span className="text-xl font-black italic">GROUND CORP.</span>
        </div>
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-white/5 rounded-full"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* 히어로 */}
      <section className="h-screen flex items-center px-[10%] relative overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-[#00d4ff]/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="z-10" data-aos="fade-right">
          <span className="text-[#00d4ff] font-black tracking-[0.3em] text-sm">
            NEXT LEVEL FOOTBALL
          </span>
          <h1 className="text-6xl lg:text-[10rem] font-black leading-[0.85] italic mt-4 mb-8">
            JUST
            <br />
            PLAY IT.
          </h1>
          <div className="flex gap-4">
            <button className="bg-[#00d4ff] text-[#050a14] px-10 py-5 rounded-full font-black hover:scale-105 transition-transform flex items-center gap-2">
              시작하기 <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 지점 */}
      <section id="branches" className="py-32 px-[10%] bg-[#0a1120]">
        <h2
          className="text-5xl lg:text-7xl font-black italic mb-20"
          data-aos="fade-up"
        >
          OUR BRANCHES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BranchCard
            title="SIHEUNG"
            subTitle="시흥 본점"
            image="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000"
            color="#d35400"
            link="/siheung"
          />
          <BranchCard
            title="YEONGJONG"
            subTitle="영종 브랜치"
            image="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=1000"
            color="#2d6a4f"
            link="/yeongjong"
          />
        </div>
      </section>

      {/* 푸터 */}
      <footer id="contact" className="py-20 px-[10%] border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="col-span-2">
            <h3 className="text-2xl font-black italic mb-6">GROUND CORP.</h3>
            <div className="flex gap-4">
              <SocialIcon icon={<Camera size={20} />} />
              <SocialIcon icon={<Layout size={20} />} />
              <SocialIcon icon={<Mail size={20} />} />
            </div>
          </div>
          <FooterSection title="QUICK LINK">
            <a href="#about">ABOUT US</a>
            <a href="#branches">BRANCHES</a>
          </FooterSection>
          <FooterSection title="CONTACT">
            <p>010-1234-5678</p>
            <p>info@groundcorp.com</p>
          </FooterSection>
        </div>
      </footer>
    </div>
  );
};

export default Main;
