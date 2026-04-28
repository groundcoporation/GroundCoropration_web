import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const SiheungIntro = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-[#1b4332]">
      {/* 고정 헤더 */}
      <header className="fixed top-0 w-full h-[70px] flex justify-between items-center px-[5%] bg-white/90 backdrop-blur-md border-b border-[#d8f3dc] z-[1000]">
        <a href="/">
          <img
            src="/resource/image/logo.png"
            alt="Logo"
            className="h-[35px] lg:h-[50px]"
          />
        </a>
        <a
          href="/booking/siheung"
          className="bg-[#2d6a4f] text-white px-5 py-2 rounded-full font-extrabold text-xs lg:text-sm hover:scale-105 transition-transform"
        >
          예약하기
        </a>
      </header>

      {/* Hero 섹션 */}
      <section className="relative h-[60vh] lg:h-[75vh] min-h-[400px] flex flex-col justify-center items-center text-white text-center">
        <div className="absolute inset-0 z-[-1]">
          <img
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600"
            className="w-full h-full object-cover brightness-50"
            alt="Hero"
          />
        </div>
        <div
          className="bg-[#52b788] px-4 py-1 rounded-full font-black text-[10px] mb-4"
          data-aos="fade-down"
        >
          SIHEUNG HEADQUARTERS
        </div>
        <h1
          className="text-5xl lg:text-8xl font-black leading-none"
          data-aos="fade-up"
        >
          GREEN
          <br />
          GROUND
        </h1>
        <p
          className="mt-4 text-base lg:text-xl font-medium opacity-90"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          영종의 에너지가 시작된 곳,
          <br />
          시흥 본점의 프리미엄 교육
        </p>
      </section>

      {/* 갤러리 섹션 */}
      <section className="py-20 lg:py-32 px-[5%] lg:px-[10%]">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-[#52b788] font-black tracking-widest text-sm">
            GALLERY
          </span>
          <h2 className="text-3xl lg:text-5xl font-black mt-2">
            성장의 순간들
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-10">
          <div
            className="col-span-2 row-span-2 rounded-[20px] overflow-hidden"
            data-aos="zoom-in"
          >
            <img
              src="https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=1000"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              alt="Activity"
            />
          </div>
          <div
            className="rounded-[15px] lg:rounded-[20px] overflow-hidden aspect-square"
            data-aos="fade-up"
          >
            <img
              src="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=600"
              className="w-full h-full object-cover"
              alt="Activity"
            />
          </div>
          <div
            className="rounded-[15px] lg:rounded-[20px] overflow-hidden aspect-square"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src="https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=600"
              className="w-full h-full object-cover"
              alt="Activity"
            />
          </div>
          <div
            className="col-span-2 row-span-2 rounded-[20px] overflow-hidden"
            data-aos="fade-up"
          >
            <img
              src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=1000"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              alt="Activity"
            />
          </div>
        </div>

        {/* 비디오 섹션 */}
        <div
          className="relative rounded-[25px] lg:rounded-[30px] overflow-hidden shadow-2xl group"
          data-aos="fade-up"
        >
          <video
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=1200"
            controls={isPlaying}
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-playing-soccer-in-the-stadium-14250-large.mp4"
              type="video/mp4"
            />
          </video>
          {!isPlaying && (
            <div
              className="absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              <div className="w-16 h-16 lg:w-24 lg:h-24 bg-[#52b788] rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                <Play fill="white" color="white" size={32} />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 코치 섹션 */}
      <section className="bg-[#d8f3dc] py-20 lg:py-32 px-[5%] lg:px-[10%] rounded-t-[40px] lg:rounded-t-[60px]">
        <h2
          className="text-center text-3xl lg:text-5xl font-black mb-12"
          data-aos="fade-up"
        >
          PROFESSIONAL COACHES
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 max-w-[1000px] mx-auto">
          <CoachCard
            role="DIRECTOR"
            name="김민수"
            desc="전 국가대표 유스 출신 / AFC A License 지도자"
          />
          <CoachCard
            role="ELITE COACH"
            name="이승우"
            desc="독일 분데스리가 유스 연수 / 유소년 전문 피지컬 트레이너"
            delay={100}
          />
        </div>
      </section>

      <footer className="bg-[#2d6a4f] text-white/60 py-16 text-center">
        <p className="text-[10px] tracking-widest">
          &copy; 2026 GREEN GROUND SIHEUNG. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
};

const CoachCard = ({ role, name, desc, delay }: any) => (
  <div
    className="bg-white p-8 lg:p-10 rounded-[25px] border border-[#2d6a4f]/10 shadow-sm"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <span className="text-[#52b788] font-black text-[10px] tracking-tighter">
      {role}
    </span>
    <h3 className="text-2xl font-bold text-[#2d6a4f] mt-1 mb-3">{name}</h3>
    <p className="text-sm opacity-80 leading-relaxed">{desc}</p>
  </div>
);

export default SiheungIntro;
